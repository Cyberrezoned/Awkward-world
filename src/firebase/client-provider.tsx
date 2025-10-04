'use client';

import { initializeFirebase } from '.';
import { FirebaseProvider } from './provider';

// this is a lazy-loaded singleton.
const firebaseApp = initializeFirebase();

function FirebaseClientProvider({ children }: { children: React.ReactNode }) {
  return <FirebaseProvider {...firebaseApp}>{children}</FirebaseProvider>;
}

export default FirebaseClientProvider;
