"use client";

import { useTranslations } from "next-intl";
import SocialMedia from "../../components/SocialMedia";

export default function Home() {
  const t = useTranslations('home');

  return (
    <header id="home" className="min-h-screen flex flex-col-reverse lg:flex-row items-center justify-between px-6 md:px-16 lg:px-24 bg-black text-white py-12 gap-12">
      {/* Texto */}
      <section className="w-full lg:w-1/2 max-w-2xl space-y-6 text-center lg:text-left">
        <p className="text-gray-400 text-base sm:text-lg">{t("message")}</p>

        <h1 className="text-3xl sm:text-4xl font-semibold text-white font-sans">
          {t("name")}
        </h1>

        <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold font-title text-orange-500 leading-tight">
          {t("role")}
        </h2>

        {/* Social icons */}
        <SocialMedia />

        {/* Botões */}
        <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-6">
          <button
            type="button"
            className="bg-orange-500 hover:bg-orange-600 text-white font-medium px-6 py-2 rounded-md"
          >
            {t("hire_me").toUpperCase()}
          </button>
          <button
            type="button"
            className="border border-gray-400 px-6 py-2 rounded-md text-gray-200 hover:border-white hover:text-white transition"
          >
            <a
              href="https://drive.google.com/uc?export=download&id=1wPazVEy9uiGl2nuX81E0z99nnEthF97m"
              download
              target="_blank"
              rel="noopener noreferrer"
            >
              Download CV
            </a>
          </button>

          {/* Destaques */}
          <div className="grid grid-cols-3 gap-4 mt-10 text-center">
            <div>
              <h3 className="text-orange-500 text-2xl font-bold">5+</h3>
              <p className="text-sm text-gray-300">Experiences</p>
            </div>
            <div>
              <h3 className="text-orange-500 text-2xl font-bold">20+</h3>
              <p className="text-sm text-gray-300">Project done</p>
            </div>
            <div>
              <h3 className="text-orange-500 text-2xl font-bold">80+</h3>
              <p className="text-sm text-gray-300">Happy Clients</p>
            </div>
          </div>
        </div>
      </section>

      {/* Imagem */}
      <figure className="w-full flex justify-center lg:justify-end">
        <div className="rounded-full bg-[#1a1a1a] p-2">
          <img
            alt="Foto de Daniel Pedro"
            className="h-[300px] sm:h-[400px] md:h-[450px] w-[220px] sm:w-[300px] md:w-[350px] object-cover rounded-2xl grayscale"
          />
        </div>
      </figure>
    </header>
  );
}

