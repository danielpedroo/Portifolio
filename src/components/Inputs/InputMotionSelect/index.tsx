import clsx from "clsx";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronDown } from "react-icons/fi"; // <- ícone da seta
import type { UseFormRegister, FieldErrors } from "react-hook-form";

interface AnimatedSelectProps {
  name: string;
  register: UseFormRegister<any>;
  errors?: FieldErrors;
  options: { value: string; label: string }[];
}

export function AnimatedSelect({
  name,
  register,
  errors,
  options,
}: AnimatedSelectProps) {
  const hasError = !!errors?.[name];

  return (
    <div className="w-full relative">
      <motion.select
        {...register(name)}
        whileFocus={{ scale: 1.02 }}
        whileHover={{ scale: 1.01 }}
        transition={{ duration: 0.2 }}
        className={clsx(
          "p-3 pr-10 h-14 w-full text-zinc-500 bg-zinc-900 rounded outline-none appearance-none",
          hasError
            ? "ring-2 ring-red-500"
            : "focus:ring-2 focus:ring-purple-500"
        )}
      >
        <option value={""} disabled selected hidden>
           Selecione uma opção
        </option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </motion.select>

      {/* Ícone personalizado */}
      <FiChevronDown
        size={22}
        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-zinc-400 pointer-events-none"
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
