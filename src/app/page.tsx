'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useUser } from '@/firebase';

export default function WelcomePage() {
  const router = useRouter();
  const user = useUser();

  useEffect(() => {
    // We only want to redirect once the loading is complete
    if (!user.loading) {
      if (user.data) {
        router.push('/home');
      } else {
        router.push('/login');
      }
    }
  }, [user.loading, user.data, router]);

  // Render a consistent loading state on both server and client
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <p>Loading...</p>
    </div>
  );
}
