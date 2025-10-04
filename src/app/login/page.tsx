
'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import Image from 'next/image';

import { LoginForm } from "@/components/auth/login-form";
import Link from "next/link";
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function LoginPage() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero-main');
  const [showLogin, setShowLogin] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowLogin(false);
      setTimeout(() => setShowLogin(true), 200); // Glitch effect
    }, 3000); // Refresh every 3 seconds

    return () => clearInterval(interval);
  }, []);

  const formVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0 },
  };

  return (
    <div className="relative flex h-[calc(100vh-5rem)] w-full items-center justify-center overflow-hidden">
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          fill
          className="object-cover"
          data-ai-hint={heroImage.imageHint}
          priority
        />
      )}
      <div className="absolute inset-0 bg-black/50" />

      <AnimatePresence mode="wait">
        {showLogin && (
          <motion.div
            key="login-form"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={formVariants}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="relative z-10 w-full max-w-sm rounded-lg border bg-background/80 p-8 shadow-2xl backdrop-blur-md"
          >
            <div className="mx-auto grid w-full gap-6">
              <div className="grid gap-2 text-center">
                <h1 className="font-headline text-3xl">Login</h1>
                <p className="text-balance text-muted-foreground">
                  Enter your email below to login to your account
                </p>
              </div>
              <LoginForm />
              <div className="mt-4 text-center text-sm">
                Don&apos;t have an account?{" "}
                <Link href="/signup" className="underline">
                  Sign up
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
