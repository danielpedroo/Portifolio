// components/ContactForm.tsx
"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { contactFormSchema, type ContactFormSchema } from "@/app/schema-zod/validation-contact-form";
import { motion } from "framer-motion";
import { InputWithIMask } from "../../components/Inputs/InputMask";
import { AnimatedInput } from "../../components/Inputs/InputMotion";
import { AnimatedSelect } from "../../components/Inputs/InputMotionSelect";
import { AnimatedTextarea } from "../../components/Inputs/InputMotionTextArea";
import { sendEmail } from "@/app/services/resend-sending/send-email";
import confetti from 'canvas-confetti';
import { useEffect } from 'react';



export default function ContactForm() {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormSchema>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      service: "",
      timeline: "",
      details: "",
    }
  });

  const [success, setSuccess] = useState(false);

  const onSubmit = async (data: ContactFormSchema) => {
    try {
      sendEmail(data);
      setSuccess(true);
      reset();
    } catch (error) {
      console.error("Failed to send message", error);
    }
  };

  useEffect(() => {
    if (success) {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#4F46E5', '#F97316', '#0EA5E9'], // azul, laranja e roxo/azul do Tailwind
      });

      const timer = setTimeout(() => setSuccess(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [success]);


  return (

    <motion.section id="contact" className="flex justify-center items-center px-4 sm:px-6 py-16">
      <motion.div className="flex flex-col items-center justify-center gap-6 w-full max-w-7xl">
        <span className="text-3xl sm:text-4xl md:text-5xl text-zinc-50 text-center">Contact Me</span>
        <span className="text-lg sm:text-xl md:text-2xl text-zinc-500 text-center">
          Cultivating Connections: Reach Out and Connect with Me
        </span>

        {success && (
          <motion.div
            className="w-full md:col-span-2 bg-green-600/20 text-green-400 border border-green-600 rounded-lg p-4 mt-6 shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <p className="text-center text-sm md:text-base font-medium">
              ✅ Sua mensagem foi enviada com sucesso. Em breve entrarei em contato!
            </p>
          </motion.div>
        )}

        <motion.form
          onSubmit={handleSubmit(onSubmit)}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 gap-y-6 text-white mt-10 w-full max-w-[1100px]"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <AnimatedInput name="name" placeholder="Nome" register={register} errors={errors} />
          <AnimatedInput name="email" placeholder="Email" register={register} errors={errors} />

          <InputWithIMask
            name="phone"
            control={control}
            errors={errors}
            mask="(00) 00000-0000"
            placeholder="Telefone"
          />

          <AnimatedSelect
            name="service"
            register={register}
            errors={errors}
            options={[
              { value: "Web", label: "Web Development" },
              { value: "Api", label: "API Integration" },
              { value: "Mobile", label: "Mobile Development" },
              { value: "Outros", label: "Other" },
            ]}
          />

          <AnimatedInput name="timeline" placeholder="Prazo" register={register} errors={errors} />

          <motion.div className="flex flex-col justify-end col-span-1 md:col-span-2">
            <AnimatedTextarea
              name="details"
              placeholder="Detalhe do projeto"
              register={register}
              errors={errors}
            />

            <div className="flex justify-end mt-4">
              <motion.button
                type="submit"
                className="border h-10 w-28 text-zinc-500 border-zinc-500 rounded hover:bg-white hover:text-black transition-colors"
                disabled={isSubmitting}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? "Enviando..." : "Enviar"}
              </motion.button>
            </div>
          </motion.div>
        </motion.form>
      </motion.div>
    </motion.section>


  );
}