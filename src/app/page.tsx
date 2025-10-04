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
import { ScrollArea } from '@/components/ui/scroll-area';

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
                <ScrollArea className="h-72 w-full">
                  <SelectItem value="us">United States</SelectItem>
                  <SelectItem value="ca">Canada</SelectItem>
                  <SelectItem value="gb">United Kingdom</SelectItem>
                  <SelectItem value="au">Australia</SelectItem>
                  <SelectItem value="de">Germany</SelectItem>
                  <SelectItem value="fr">France</SelectItem>
                  <SelectItem value="jp">Japan</SelectItem>
                  <SelectItem value="cn">China</SelectItem>
                  <SelectItem value="in">India</SelectItem>
                  <SelectItem value="br">Brazil</SelectItem>
                  <SelectItem value="za">South Africa</SelectItem>
                  <SelectItem value="af">Afghanistan</SelectItem>
                  <SelectItem value="al">Albania</SelectItem>
                  <SelectItem value="dz">Algeria</SelectItem>
                  <SelectItem value="ar">Argentina</SelectItem>
                  <SelectItem value="am">Armenia</SelectItem>
                  <SelectItem value="at">Austria</SelectItem>
                  <SelectItem value="az">Azerbaijan</SelectItem>
                  <SelectItem value="bh">Bahrain</SelectItem>
                  <SelectItem value="bd">Bangladesh</SelectItem>
                  <SelectItem value="by">Belarus</SelectItem>
                  <SelectItem value="be">Belgium</SelectItem>
                  <SelectItem value="bo">Bolivia</SelectItem>
                  <SelectItem value="ba">Bosnia and Herzegovina</SelectItem>
                  <SelectItem value="bg">Bulgaria</SelectItem>
                  <SelectItem value="cl">Chile</SelectItem>
                  <SelectItem value="co">Colombia</SelectItem>
                  <SelectItem value="cr">Costa Rica</SelectItem>
                  <SelectItem value="hr">Croatia</SelectItem>
                  <SelectItem value="cu">Cuba</SelectItem>
                  <SelectItem value="cy">Cyprus</SelectItem>
                  <SelectItem value="cz">Czech Republic</SelectItem>
                  <SelectItem value="dk">Denmark</SelectItem>
                  <SelectItem value="ec">Ecuador</SelectItem>
                  <SelectItem value="eg">Egypt</SelectItem>
                  <SelectItem value="ee">Estonia</SelectItem>
                  <SelectItem value="fi">Finland</SelectItem>
                  <SelectItem value="ge">Georgia</SelectItem>
                  <SelectItem value="gr">Greece</SelectItem>
                  <SelectItem value="hu">Hungary</SelectItem>
                  <SelectItem value="is">Iceland</SelectItem>
                  <SelectItem value="id">Indonesia</SelectItem>
                  <SelectItem value="ir">Iran</SelectItem>
                  <SelectItem value="iq">Iraq</SelectItem>
                  <SelectItem value="ie">Ireland</SelectItem>
                  <SelectItem value="il">Israel</SelectItem>
                  <SelectItem value="it">Italy</SelectItem>
                  <SelectItem value="jm">Jamaica</SelectItem>
                  <SelectItem value="jo">Jordan</SelectItem>
                  <SelectItem value="kz">Kazakhstan</SelectItem>
                  <SelectItem value="ke">Kenya</SelectItem>
                  <SelectItem value="kw">Kuwait</SelectItem>
                  <SelectItem value="lv">Latvia</SelectItem>
                  <SelectItem value="lb">Lebanon</SelectItem>
                  <SelectItem value="lt">Lithuania</SelectItem>
                  <SelectItem value="lu">Luxembourg</SelectItem>
                  <SelectItem value="my">Malaysia</SelectItem>
                  <SelectItem value="mx">Mexico</SelectItem>
                  <SelectItem value="md">Moldova</SelectItem>
                  <SelectItem value="mn">Mongolia</SelectItem>
                  <SelectItem value="me">Montenegro</SelectItem>
                  <SelectItem value="ma">Morocco</SelectItem>
                  <SelectItem value="np">Nepal</SelectItem>
                  <SelectItem value="nl">Netherlands</SelectItem>
                  <SelectItem value="nz">New Zealand</SelectItem>
                  <SelectItem value="ng">Nigeria</SelectItem>
                  <SelectItem value="mk">North Macedonia</SelectItem>
                  <SelectItem value="no">Norway</SelectItem>
                  <SelectItem value="om">Oman</SelectItem>
                  <SelectItem value="pk">Pakistan</SelectItem>
                  <SelectItem value="pa">Panama</SelectItem>
                  <SelectItem value="py">Paraguay</SelectItem>
                  <SelectItem value="pe">Peru</SelectItem>
                  <SelectItem value="ph">Philippines</SelectItem>
                  <SelectItem value="pl">Poland</SelectItem>
                  <SelectItem value="pt">Portugal</SelectItem>
                  <SelectItem value="qa">Qatar</SelectItem>
                  <SelectItem value="ro">Romania</SelectItem>
                  <SelectItem value="ru">Russia</SelectItem>
                  <SelectItem value="sa">Saudi Arabia</SelectItem>
                  <SelectItem value="rs">Serbia</SelectItem>
                  <SelectItem value="sg">Singapore</SelectItem>
                  <SelectItem value="sk">Slovakia</SelectItem>
                  <SelectItem value="si">Slovenia</SelectItem>
                  <SelectItem value="kr">South Korea</SelectItem>
                  <SelectItem value="es">Spain</SelectItem>
                  <SelectItem value="lk">Sri Lanka</SelectItem>
                  <SelectItem value="se">Sweden</SelectItem>
                  <SelectItem value="ch">Switzerland</SelectItem>
                  <SelectItem value="sy">Syria</SelectItem>
                  <SelectItem value="tw">Taiwan</SelectItem>
                  <SelectItem value="th">Thailand</SelectItem>
                  <SelectItem value="tr">Turkey</SelectItem>
                  <SelectItem value="ua">Ukraine</SelectItem>
                  <SelectItem value="ae">United Arab Emirates</SelectItem>
                  <SelectItem value="uy">Uruguay</SelectItem>
                  <SelectItem value="uz">Uzbekistan</SelectItem>
                  <SelectItem value="ve">Venezuela</SelectItem>
                  <SelectItem value="vn">Vietnam</SelectItem>
                </ScrollArea>
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
