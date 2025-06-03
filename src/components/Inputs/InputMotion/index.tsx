import clsx from "clsx";
import { motion, AnimatePresence } from "framer-motion";
import type { UseFormRegister, FieldErrors } from "react-hook-form";

interface AnimatedInputProps {
  name: string;
  register: UseFormRegister<any>;
  placeholder: string;
  errors?: FieldErrors;
  type?: string;
}

export function AnimatedInput({
  name,
  register,
  placeholder,
  errors,
  type = "text",
}: AnimatedInputProps) {
  const hasError = !!errors?.[name];

  return (
    <div className="w-full">
      <motion.input
        type={type}
        placeholder={placeholder}
        {...register(name)}
        whileFocus={{ scale: 1.02 }}
        whileHover={{ scale: 1.01 }}
        transition={{ duration: 0.2 }}
        className={clsx(
          "p-3 h-14 w-full bg-zinc-900 rounded outline-none transition-all duration-200",
          hasError
            ? "ring-2 ring-red-500"
            : "focus:ring-2 focus:ring-purple-500"
        )}
      />
      <AnimatePresence>
        {hasError && (
          <motion.p
            className="text-sm text-red-500 mt-1 pl-1"
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
          >
            {errors?.[name]?.message as string}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}
