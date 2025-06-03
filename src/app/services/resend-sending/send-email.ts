"use server"

import { Resend } from 'resend';
import { EmailTemplate } from '../emailTemplate';
import type { ContactFormSchema } from '@/app/schema-zod/validation-contact-form';

const resend = new Resend(process.env.REZEND_API_KEY);

export async function sendEmail(formData: ContactFormSchema) {
  const { name, details, phone, service, email, timeline } = formData;

  try {
    const { data, error } = await resend.emails.send({
      from: 'Daniel Pedro <onboarding@resend.dev>', // ✅ válido para testes
      to: ['danielpapereirajv@gmail.com'],
      subject: `Novo contato de ${name} via portifólio`,
      react: await EmailTemplate({
        name,
        email,
        phone,
        service,
        timeline,
        details,
      }),
    });

    if (error) {
      return { success: false, error };
    }

    return { success: true, data };
  } catch (error) {
    return { success: false, error };
  }
}

