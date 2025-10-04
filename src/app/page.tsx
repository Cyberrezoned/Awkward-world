'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Globe, Languages, Lock, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useAppState } from '@/hooks/use-app-state';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { cn } from '@/lib/utils';

export default function WelcomePage() {
  const router = useRouter();
  const { setIsAuthenticated } = useAppState();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const heroImage = PlaceHolderImages.find((p) => p.id === 'hero-main');

  const handleEnter = (e: React.FormEvent) => {
    e.preventDefault();
    // Basic validation
    if (email && password) {
      setIsAuthenticated(true);
      router.push('/home');
    }
  };

  return (
    <div className="relative flex h-screen w-full items-center justify-center overflow-hidden">
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt="Background"
          fill
          className="object-cover object-center"
          data-ai-hint={heroImage.imageHint}
          priority
        />
      )}
      <div className="absolute inset-0 bg-black/50" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background" />

      <div className="relative z-10 mx-auto flex w-full max-w-md flex-col items-center p-8 text-center text-primary-foreground">
        <div className="fade-in-up-staggered flex flex-col items-center">
          <h1
            className={cn("font-headline text-6xl md:text-7xl typewriter float-animation")}
            style={{ animationDelay: '0.2s', animationIterationCount: '1, infinite' }}
          >
            Welcome to AWKWORLD
          </h1>
          <p
            className="mt-2 text-sm uppercase tracking-widest"
            style={{ animationDelay: '0.4s' }}
          >
            A Fashion Space for the Brave, Bold & Alté
          </p>
        </div>

        <form
          onSubmit={handleEnter}
          className="mt-10 w-full space-y-4 fade-in-up"
          style={{ animationDelay: '0.6s' }}
        >
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="email"
              placeholder="Email"
              className="bg-background/80 pl-9 text-foreground placeholder:text-muted-foreground"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="password"
              placeholder="Password"
              className="bg-background/80 pl-9 text-foreground placeholder:text-muted-foreground"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Select>
              <SelectTrigger className="w-full bg-background/80 text-foreground">
                <Languages className="mr-2 h-4 w-4 text-muted-foreground" />
                <SelectValue placeholder="Language" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="en">English</SelectItem>
                <SelectItem value="es">Español</SelectItem>
                <SelectItem value="fr">Français</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="w-full bg-background/80 text-foreground">
                <Globe className="mr-2 h-4 w-4 text-muted-foreground" />
                <SelectValue placeholder="Location" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="us">United States</SelectItem>
                <SelectItem value="gb">United Kingdom</SelectItem>
                <SelectItem value="ca">Canada</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Button
            type="submit"
            className="w-full rounded-none bg-primary font-bold uppercase tracking-widest text-primary-foreground hover:glitch"
            size="lg"
          >
            ENTER
          </Button>
        </form>
        <p
          className="mt-8 font-headline text-lg font-bold text-primary-foreground glitch"
          style={{ animationDelay: '0.8s' }}
        >
          ⚠️ If you aren’t ALTÉ, don’t sign in.
        </p>
      </div>
    </div>
  );
}
