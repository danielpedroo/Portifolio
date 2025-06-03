'use client';

import IconClose from "@/components/IconsMobile/IconClose";
import IconMenu from "@/components/IconsMobile/IconMenu";
import LanguageSelector from "@/components/LanguageSelector";
import clsx from "clsx";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { Link as ScrollLink } from "react-scroll";

const navItemsKeys = ['home', 'about_me', 'projects', 'contact'];

export default function Navbar() {
  const t = useTranslations('navbar');
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full bg-black text-white px-6 md:px-12 py-4 border-b border-neutral-800">
      <nav className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold text-orange-500">LOGO</div>

        {/* Menu Desktop */}
        <ul className="hidden lg:flex space-x-10 text-sm font-medium">
          {navItemsKeys.map((key) => (
            <li key={key}>
              <ScrollLink
                to={key}
                smooth
                duration={800}
                offset={-80}
                className={clsx(
                  'hover:text-orange-500 transition-colors cursor-pointer',
                  key === 'inicio' && 'text-orange-500'
                )}
              >
                {t(key).toUpperCase()}
              </ScrollLink>
            </li>
          ))}
        </ul>

        {/* Ações lado direito */}
        <div className="hidden lg:flex justify-between items-center gap-4">
          <LanguageSelector />
        </div>

        {/* Botão do menu mobile */}
        <button
          type="button"
          className="lg:hidden text-white"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <IconClose /> : <IconMenu />}
        </button>
      </nav>

      {/* Menu Mobile */}
      {menuOpen && (
        <div className="lg:hidden mt-4 px-4">
          <ul className="flex flex-col gap-4">
            {navItemsKeys.map((key) => (
              <li key={key}>
                <ScrollLink
                  to={key}
                  smooth
                  duration={800}
                  offset={-80}
                  onClick={() => setMenuOpen(false)}
                  className={clsx(
                    'block text-sm py-2 border-b border-neutral-700 cursor-pointer',
                    key === 'inicio' && 'text-orange-500'
                  )}
                >
                  {t(key)}
                </ScrollLink>
              </li>
            ))}
          </ul>

          <div className="mt-4 flex justify-between items-center gap-4">
            <LanguageSelector />
          </div>
        </div>
      )}
    </header>
  );
}
