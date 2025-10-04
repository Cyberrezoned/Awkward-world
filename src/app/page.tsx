'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useUser } from '@/firebase';

export default function WelcomePage() {
  const router = useRouter();
  const user = useUser();

  useEffect(() => {
    if (user.data) {
      router.push('/home');
    } else {
      router.push('/login');
    }
  }, [user.data, router]);

  return (
    <div className="flex h-screen w-full items-center justify-center">
      <p>Loading...</p>
    </div>
  );
}
