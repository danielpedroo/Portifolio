import { parsePhoneNumberFromString } from "libphonenumber-js";
import { z } from "zod";

// Remove everything that is not a number
export const digitsOnly = (val: string) => val.replace(/\D/g, "");

// Phone validator for Brazilian numbers (expects only Brazilian numbers, no +55)
export const phoneField = z
    .string()
    .nonempty("Telefone obrigatório.")
    .refine(
        (val) => {
            // Accepts only digits, spaces, dashes, parentheses
            return /^[\d\s\-()]+$/.test(val);
        },
        {
            message: "Informe o número de telefone no formato brasileiro: (DD) XXXXX-XXXX.",
        }
    )
    .transform(digitsOnly)
    .refine(
        (val) => {
            // Prepend +55 for validation, but user should not input it
            const phone = parsePhoneNumberFromString(`+55${val}`);
            return phone?.isValid() ?? false;
        },
        {
            message: "O número de telefone informado é inválido.",
        }
    );