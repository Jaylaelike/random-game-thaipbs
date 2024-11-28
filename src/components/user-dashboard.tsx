"use client";

import { UserButton, useUser } from "@clerk/nextjs";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

import { EventCard } from "@/components/event/event-card";

interface User {
  randomNumber: number;
  email: string;
  role: string;
  createdAt: string;
  id: string;
}

export function UserDashboard({ user }: { user: User }) {
  const { user: clerkUser } = useUser();
  const firstName = clerkUser?.firstName || clerkUser?.username || "Guest";
  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="mb-8 p-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              ยินดีต้อนรับ, {firstName}! 👋
            </h1>
            <p className="mt-2 text-gray-600">
              นี่คือหมายเลขการลงทะเบียนของคุณสำหรับกิจกรรมพิเศษ
            </p>

            <Badge className="bg-green-500 hover:bg-green-600">
              หมายเลขของคุณคือ: {user.randomNumber}
            </Badge>
          </div>
          <div className="flex items-center space-x-4">
            <Badge variant="secondary" className="text-sm">
              {user.role}
            </Badge>
            <UserButton afterSignOutUrl="/" />
          </div>
        </div>
      </Card>
      <EventCard
        eventNumber={user.randomNumber}
        date="26/11/2567"
        time="12:00:00 - 16:00:00"
        location="ณ บริเวณลาน หน้าห้อง Co-Working Space"
      />
    </div>
  );
}
