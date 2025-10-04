
'use server';

import { z } from 'zod';
import { Resend } from 'resend';
import ContactEmail from '@/components/emails/contact-email';

const resend = new Resend(process.env.RESEND_API_KEY);

const contactSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  message: z.string(),
});

export async function sendContactEmail(formData: z.infer<typeof contactSchema>) {
  const validatedFields = contactSchema.safeParse(formData);

  if (!validatedFields.success) {
    return {
      success: false,
      error: 'Invalid fields.',
    };
  }
  
  const { name, email, message } = validatedFields.data;

  try {
    const { data, error } = await resend.emails.send({
      from: 'AWKWORLD Contact Form <onboarding@resend.dev>',
      to: ['delivered@resend.dev'], // Replace with your receiving email
      subject: `New Message from ${name} via AWKWORLD`,
      react: ContactEmail({ name, email, message }),
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
    });

    if (error) {
      console.error('Resend error:', error);
      return { success: false, error: error.message };
    }

    return { success: true, data };
  } catch (error) {
    console.error('Failed to send email:', error);
    return { success: false, error: 'Failed to send email.' };
  }
}
