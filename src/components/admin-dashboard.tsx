"use client";

import { UserButton } from "@clerk/nextjs";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

interface User {
  randomNumber: number;
  name: string;
  email: string;
  role: string;
  createdAt: string;
  id: string;
}

interface AdminDashboardProps {
  currentUser: User;
  users: User[] | null;
}

function exportToCSV(users: User[]) {
  const headers = ["Username", "Role", "Random Number", "Created At"];
  const csvData = users.map((user) => [
    user.name,
    user.role,
    user.randomNumber.toString(),
    new Date(user.createdAt).toLocaleDateString("th-TH"),
  ]);

  const csvContent = [
    headers.join(","),
    ...csvData.map((row) => row.join(",")),
  ].join("\n");

  const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
  const link = document.createElement("a");
  const url = URL.createObjectURL(blob);

  link.setAttribute("href", url);
  link.setAttribute("download", "users.csv");
  link.style.display = "none";

  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

export function AdminDashboard({ currentUser, users }: AdminDashboardProps) {
  return (
    <div className="container mx-auto py-8">
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        <UserButton afterSignOutUrl="/" />
      </div>

      <div className="space-y-8">
        <div>
          <h2 className="mb-4 text-xl font-semibold">Your Information</h2>
          <div className="flex items-center gap-4">
            <Badge>Admin</Badge>
            <span>Random Number: {currentUser.randomNumber}</span>
          </div>
        </div>

        <div>
          <h2 className="mb-4 text-xl font-semibold">All Users</h2>
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Username</TableHead>
                  <TableHead>Role</TableHead>
                  <TableHead>Random Number</TableHead>
                  <TableHead>Created At</TableHead>
                </TableRow>
              </TableHeader>

              <TableBody>
                {users?.map((user) => (
                  <TableRow key={user.id}>
                    <TableCell>{user.name}</TableCell>
                    <TableCell>
                      <Badge
                        variant={
                          user.role === "admin" ? "default" : "secondary"
                        }
                      >
                        {user.role === "admin" ? "ผู้ดูแลระบบ" : "ผู้ใช้งาน"}
                      </Badge>
                    </TableCell>
                    <TableCell>{user.randomNumber}</TableCell>
                    <TableCell>
                      {new Date(user.createdAt).toLocaleDateString("th-TH")}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>

              <TableFooter>
                <TableRow>
                  <TableCell colSpan={4}>
                    <button
                      onClick={() => exportToCSV(users ?? [])}
                      className="btn btn-primary"
                    >
                      Export to CSV
                    </button>
                  </TableCell>
                </TableRow>
              </TableFooter>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
}
