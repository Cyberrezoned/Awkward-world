
'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import Image from 'next/image';

import { LoginForm } from "@/components/auth/login-form";
import Link from "next/link";
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { cn } from '@/lib/utils';

// Array of images to cycle through for the background
const backgroundImages = [
    PlaceHolderImages.find(p => p.id === 'hero-main'),
    PlaceHolderImages.find(p => p.id === 'product-2-b'),
    PlaceHolderImages.find(p => p.id === 'product-5-b'),
    PlaceHolderImages.find(p => p.id === 'product-6-b'),
].filter(img => img !== undefined);


export default function LoginPage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    }, 8000); // Refresh animation every 8 seconds

    return () => clearInterval(interval);
  }, []);

  const formVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.8, ease: 'easeInOut' } },
    exit: { opacity: 0, scale: 0.98, y: -10, transition: { duration: 0.4, ease: 'easeInOut' } },
  };

  const imageVariants = {
    enter: { opacity: 0 },
    center: { opacity: 1 },
    exit: { opacity: 0 },
  };

  return (
    <div className="relative flex h-[calc(100vh-5rem)] w-full items-center justify-center overflow-hidden">
      <AnimatePresence initial={false}>
        <motion.div
            key={currentImageIndex}
            className="absolute inset-0"
            variants={imageVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 1.5, ease: 'easeOut' }}
        >
            {backgroundImages[currentImageIndex] && (
                <Image
                    src={backgroundImages[currentImageIndex]!.imageUrl}
                    alt={backgroundImages[currentImageIndex]!.description}
                    fill
                    className="object-cover"
                    data-ai-hint={backgroundImages[currentImageIndex]!.imageHint}
                    priority
                />
            )}
        </motion.div>
      </AnimatePresence>
      <div className="absolute inset-0 bg-black/50" />

      <AnimatePresence mode="wait">
          <motion.div
            key="login-form"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={formVariants}
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
      </AnimatePresence>
    </div>
  );
}
