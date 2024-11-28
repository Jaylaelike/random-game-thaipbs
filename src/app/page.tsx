import { auth } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default async function Home() {
  const { userId }: { userId: string | null } = await auth()

  if (userId) {
    redirect('/dashboard');
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 flex items-center justify-center">
      <div className="max-w-md w-full mx-auto p-8 bg-white rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center mb-8">Welcome to Random Number Registration</h1>
        <div className="space-y-4">
          <p className="text-gray-600 text-center">
            Sign in to get your unique random number or view your existing one.
          </p>
          <div className="flex justify-center gap-4">
            <Button asChild>
              <Link href="/sign-in">Sign In</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/sign-up">Sign Up</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}