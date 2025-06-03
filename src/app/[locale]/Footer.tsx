'use client';
import { FaEnvelope, FaWhatsapp } from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";
import SocialMediaLink from "../../components/SocialMedia";


export default function Footer() {

  return (
    <footer className="bg-zinc-900 text-zinc-200 px-6 py-10">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-8 text-center">
        <h1 className="text-xl font-bold text-red-500">LOGO</h1>
        <nav className="flex flex-wrap justify-center gap-6 text-sm md:text-base font-medium">
          <ScrollLink to="home" smooth duration={2000} offset={-80} className="hover:text-white transition-colors cursor-pointer">Home</ScrollLink>
          <ScrollLink to="services" smooth duration={2000} offset={-5} className="hover:text-white transition-colors cursor-pointer">Services</ScrollLink>
          <ScrollLink to="about" smooth duration={2000} offset={-100} className="hover:text-white transition-colors cursor-pointer">About me</ScrollLink>
          <ScrollLink to="portifolio" smooth duration={2000} offset={-20} className="hover:text-white transition-colors cursor-pointer">Portifolio</ScrollLink>
          <ScrollLink to="contact" smooth duration={2000} offset={0} className="hover:text-white transition-colors cursor-pointer">Contact me</ScrollLink>
        </nav>

        <SocialMediaLink />

        <div className="flex flex-col md:flex-row items-center gap-3 text-sm md:text-base">
          <div className="flex items-center gap-2">
            <FaEnvelope size={25} className="text-zinc-400" />
            <a href="mailto:danielpapereirajv@gmail.com" className="hover:underline">
              danielpapereirajv@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-2 group">
            <FaWhatsapp
              size={25}
              className="text-zinc-400 group-hover:text-[#25D366] transition-colors duration-300"
            />
            <a
              href="https://wa.me/5511989612174?text=Olá,%20gostaria%20de%20falar%20com%20você%20sobre%20seus%20serviços!"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 group-hover:text-[#25D366] hover:underline transition-colors duration-300"
            >
              +55 11 98961-2174
            </a>
          </div>
        </div>

        <hr className="w-full border-zinc-700 my-4" />
        <p className="text-xs text-zinc-500">
          Designed by <span className="text-white">@danielpedroo</span> Software Developer
        </p>
      </div>
    </footer>
  );
}
