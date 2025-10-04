'use server';

import { getAuth, sendPasswordResetEmail } from 'firebase-admin/auth';
import { z } from 'zod';
import { adminApp } from '@/firebase/admin';

const resetPasswordSchema = z.object({
  email: z.string().email({ message: 'Please enter a valid email address.' }),
});

export async function resetPassword(
  values: z.infer<typeof resetPasswordSchema>
) {
  const validatedFields = resetPasswordSchema.safeParse(values);

  if (!validatedFields.success) {
    return {
      success: false,
      error: 'Invalid email address.',
    };
  }

  const { email } = validatedFields.data;

  try {
    const auth = getAuth(adminApp);
    await sendPasswordResetEmail(auth, email);
    return { success: true };
  } catch (error: any) {
    console.error('Password reset error:', error);
    // Provide a generic message to avoid leaking user existence information
    return {
      success: false,
      error: 'If an account exists for this email, a password reset link has been sent.',
    };
  }
}
