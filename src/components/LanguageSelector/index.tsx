'use client';

import { useRouter } from 'next/navigation';
import { Us, Br } from 'react-flags-select';

export default function LanguageSelector() {
  const router = useRouter();

  const changeLanguage = (lang: 'pt' | 'en') => {
      router.push(`/${lang}`);
  };

  return (
    <div className="flex items-center gap-4">
      <button
        type="button"
        onClick={() => changeLanguage('pt')}
        aria-label="Português"
        className="w-7 h-5 hover:scale-110 transition-transform cursor-pointer"
      >
        <Br className="w-full h-full rounded-sm shadow" />
      </button>

      <button
        type="button"
        onClick={() => changeLanguage('en')}
        aria-label="English"
        className="w-7 h-5 hover:scale-110 transition-transform cursor-pointer"
      >
        <Us className="w-full h-full rounded-sm shadow" />
      </button>
    </div>
  );
}