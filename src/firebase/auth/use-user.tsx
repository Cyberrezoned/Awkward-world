'use client';

import { useEffect, useState }from 'react';
import type { User } from 'firebase/auth';
import { onAuthStateChanged } from 'firebase/auth';

import { useAuth } from '../provider';

export const useUser = () => {
  const auth = useAuth();
  const [user, setUser] = useState<{
    data: User | null;
    loading: boolean;
  }>({
    data: auth?.currentUser ?? null,
    loading: true,
  });

  useEffect(() => {
    if (!auth) {
      setUser({ data: null, loading: false });
      return;
    }

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser({ data: user, loading: false });
    });

    return () => unsubscribe();
  }, [auth]);

  return user;
};
