
"use client";

import {
    Avatar,
    AvatarFallback,
    AvatarImage,
  } from "@/components/ui/avatar"
  import { Button } from "@/components/ui/button"
  import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
  import Link from "next/link"
  import { useUser, useAuth } from "@/firebase";
  import { useRouter } from "next/navigation";
  import { signOut } from "firebase/auth";
import { LogOut, Package, Settings, User as UserIcon } from "lucide-react";
  
  export function UserNav() {
    const user = useUser();
    const auth = useAuth();
    const router = useRouter();

    const handleLogout = async () => {
      if (!auth) return;
      await signOut(auth);
      router.push('/login');
    };

    if (user.loading) {
      return <Button variant="ghost">Loading...</Button>
    }

    if (!user.data) {
        return (
            <Button asChild variant="ghost">
                <Link href="/login">Login</Link>
            </Button>
        )
    }
  
    const { displayName, email, photoURL } = user.data;
    const fallback = displayName ? displayName.charAt(0).toUpperCase() : (email ? email.charAt(0).toUpperCase() : '?');

    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="relative h-8 w-8 rounded-full">
            <Avatar className="h-8 w-8">
              {photoURL && <AvatarImage src={photoURL} alt={displayName || 'User Avatar'} />}
              <AvatarFallback>{fallback}</AvatarFallback>
            </Avatar>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56" align="end" forceMount>
          <DropdownMenuLabel className="font-normal">
            <div className="flex flex-col space-y-1">
              <p className="text-sm font-medium leading-none">{displayName || 'User'}</p>
              <p className="text-xs leading-none text-muted-foreground">
                {email}
              </p>
            </div>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem>
              <UserIcon className="mr-2 h-4 w-4" />
              <span>Profile</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Package className="mr-2 h-4 w-4" />
              <span>Orders</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Settings className="mr-2 h-4 w-4" />
              <span>Settings</span>
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={handleLogout}>
            <LogOut className="mr-2 h-4 w-4" />
            <span>Log out</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    )
  }
  