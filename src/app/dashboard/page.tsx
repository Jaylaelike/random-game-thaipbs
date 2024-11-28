import { auth, currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { db } from "@/server/db";
import { users } from "@/server/db/schema";
import { eq } from "drizzle-orm";
import { UserDashboard } from "@/components/user-dashboard";
import { AdminDashboard } from "@/components/admin-dashboard";

async function getOrCreateUser(userId: string, email: string , name: string) {
  let user = await db.query.users.findFirst({
    where: eq(users.id, userId),
  });

  if (!user) {
    const randomNumber = Math.floor(Math.random() * 1000000);
    await db.insert(users).values({
      id: userId,
      email,
      name: name,
      randomNumber,
      role: "user",
    });

    user = await db.query.users.findFirst({
      where: eq(users.id, userId),
    });
  }

  return user;
}

export default async function DashboardPage() {
  const { userId }: { userId: string | null } = await auth();

  const user = await currentUser();

  if (!userId) {
    redirect("/sign-in");
  }

  const dbUser = await getOrCreateUser(
    userId,
    user.emailAddresses[0]?.emailAddress ?? "no-email",
    user?.firstName ?? "no-name"
    
  );

  if (!dbUser) {
    throw new Error("User not found");
  }

  const getAllUsers = async () => {
    const allUsers = await db.query.users.findMany();
    return allUsers;
  };

  const allUsers = dbUser.role === 'admin' ? await getAllUsers() : null;

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      {dbUser.role === "admin" ? (
        <AdminDashboard currentUser={dbUser} users={allUsers} />
      ) : (
        <UserDashboard user={dbUser} />
      )}
    </div>
  );
}
