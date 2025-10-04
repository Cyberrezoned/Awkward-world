
"use client"

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useAuth } from "@/firebase";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import Link from "next/link";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
import { errorEmitter } from "@/firebase/error-emitter";
import { AuthError } from "@/firebase/errors";
import { resetPassword } from "@/app/auth/actions";
import { KeyRound, Mail } from "lucide-react";
import { Icons } from "../icons";

const formSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address." }),
  password: z.string().min(1, { message: "Password is required." }),
});

const resetSchema = z.object({
    resetEmail: z.string().email({ message: "Please enter a valid email address." }),
})

export function LoginForm() {
  const router = useRouter();
  const auth = useAuth();
  const { toast } = useToast();
  const [isResetting, setIsResetting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const resetForm = useForm<z.infer<typeof resetSchema>>({
      resolver: zodResolver(resetSchema),
      defaultValues: {
          resetEmail: "",
      }
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    if (!auth) return;
    signInWithEmailAndPassword(auth, values.email, values.password)
      .then(() => {
        toast({
          title: "Logged in successfully!",
        });
        router.push("/home");
      })
      .catch((error) => {
        const authError = new AuthError(error.code, error.message);
        errorEmitter.emit('auth-error', authError);
      });
  }

  async function handleGoogleLogin() {
    if (!auth) return;
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then(() => {
        toast({
          title: "Logged in successfully with Google!",
        });
        router.push("/home");
      })
      .catch((error) => {
        const authError = new AuthError(error.code, error.message);
        errorEmitter.emit('auth-error', authError);
      });
  }

  async function onPasswordReset(values: z.infer<typeof resetSchema>) {
      setIsResetting(true);
      const result = await resetPassword({email: values.resetEmail});
      if (result.success) {
          toast({
              title: "Password Reset Email Sent",
              description: "If an account exists, a link to reset your password has been sent to your email.",
          })
      } else {
        toast({
            title: "Error",
            description: result.error,
            variant: "destructive"
        })
      }
      setIsResetting(false);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-4">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="m@example.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
                <AlertDialog>
                    <AlertDialogTrigger asChild>
                        <Button variant="link" className="ml-auto inline-block text-sm underline p-0 h-auto">Forgot your password?</Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                        <Form {...resetForm}>
                        <form onSubmit={resetForm.handleSubmit(onPasswordReset)}>
                        <AlertDialogHeader>
                        <AlertDialogTitle>Reset Password</AlertDialogTitle>
                        <AlertDialogDescription>
                            Enter your email address and we will send you a link to reset your password.
                        </AlertDialogDescription>
                        </AlertDialogHeader>
                        <div className="my-4">
                            <FormField
                                control={resetForm.control}
                                name="resetEmail"
                                render={({ field }) => (
                                    <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input placeholder="m@example.com" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                    </FormItem>
                                )}
                                />
                        </div>
                        <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction type="submit" disabled={isResetting}>
                            <Mail className="mr-2 h-4 w-4" />
                            {isResetting ? "Sending..." : "Send Reset Link"}
                        </AlertDialogAction>
                        </AlertDialogFooter>
                        </form>
                        </Form>
                    </AlertDialogContent>
                </AlertDialog>
              </div>
              <FormControl>
                <Input type="password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full" disabled={form.formState.isSubmitting}>
          <KeyRound className="mr-2 h-4 w-4" />
          {form.formState.isSubmitting ? 'Logging in...' : 'Login'}
        </Button>
        <Button variant="outline" className="w-full" onClick={handleGoogleLogin} type="button">
          <Icons.google className="mr-2 h-4 w-4" />
          Login with Google
        </Button>
      </form>
    </Form>
  )
}
