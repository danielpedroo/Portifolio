import clsx from "clsx";
import { motion, AnimatePresence } from "framer-motion";
import type { UseFormRegister, FieldErrors } from "react-hook-form";


interface AnimatedTextareaProps {
  name: string;
  register: UseFormRegister<any>;
  errors?: FieldErrors;
  placeholder: string;
}

export function AnimatedTextarea({
  name,
  register,
  errors,
  placeholder,
}: AnimatedTextareaProps) {
  const hasError = !!errors?.[name];

  return (
    <div className="w-full">
      <motion.textarea
        placeholder={placeholder}
        {...register(name)}
        whileFocus={{ scale: 1.02 }}
        whileHover={{ scale: 1.01 }}
        className={clsx(
          "p-3 resize-none h-40 w-full bg-zinc-900 rounded outline-none",
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