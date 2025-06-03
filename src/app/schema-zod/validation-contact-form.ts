// lib/schema/contactFormSchema.ts
import { z } from "zod";
import { phoneField } from "./helpers/phone-validation";

const serviceOptions = [
  "Web",
  "Mobile",
  "Api",
  "Outros",
];

export const contactFormSchema = z.object({
  name: z
    .string()
    .nonempty("Nome é obrigatório")
    .max(100, "Nome é muito longo"),

  email: z
    .string()
    .nonempty("E-mail é obrigatório")
    .email("Por favor, insira um e-mail válido"),

  phone: phoneField,

  service: z
    .string()
    .nonempty("Por favor, selecione um serviço")
    .refine((val) => serviceOptions.includes(val), {
      message: "Selecione um serviço",
    }),

  timeline: z
    .string()
    .nonempty("Prazo é obrigatório")
    .max(100, "Descrição do prazo é muito longa"),

  details: z
    .string()
    .nonempty("Por favor, forneça mais detalhes sobre o projeto")
    .max(1000, "Detalhes do projeto são muito longos")
});

export type ContactFormSchema = z.infer<typeof contactFormSchema>;


/**
 * Zod schema for validating the contact form fields.
 *
 * Fields:
 * - name: Required string, minimum 1 and maximum 100 characters.
 * - email: Required string, must be a valid email format.
 * - phone: Validated by the custom `phoneField` schema.
 * - service: Required string, must be one of the allowed `serviceOptions`.
 * - timeline: Required string, minimum 1 and maximum 100 characters.
 * - details: Required string, minimum 10 and maximum 1000 characters.
 *
 * Each field includes custom error messages for validation failures.
 */