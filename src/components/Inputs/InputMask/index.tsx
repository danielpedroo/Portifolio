import { Controller, type Control, type FieldErrors } from "react-hook-form";
import { IMaskInput } from "react-imask";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";

interface InputWithIMaskProps {
  name: string;
  control: Control<any>;
  errors?: FieldErrors;
  mask: string;
  placeholder?: string;
}

export function InputWithIMask({
  name,
  control,
  mask,
  placeholder,
  errors,
}: InputWithIMaskProps) {
  const hasError = !!errors?.[name];

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, onBlur, value, ref } }) => (
        <div className="w-full">
          <motion.div
            whileFocus={{ scale: 1.02 }}
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.2 }}
            className="w-full"
          >
            <IMaskInput
              mask={mask}
              value={value}
              onAccept={(val: string) => onChange(val)}
              onBlur={onBlur}
              inputRef={ref}
              placeholder={placeholder}
              autoComplete="off"
              className={clsx(
                "p-3 h-14 w-full bg-zinc-900 rounded outline-none transition-all duration-200",
                hasError
                  ? "ring-2 ring-red-500"
                  : "focus:ring-2 focus:ring-purple-500"
              )}
            />
          </motion.div>

          {/* Mensagem de erro animada */}
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
      )}
    />
  );
}
