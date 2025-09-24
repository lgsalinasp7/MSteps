"use client";
import React, { useState, useRef, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { useLocale } from 'next-intl';
import { Globe } from 'lucide-react';

const languages = [
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'en', name: 'English', flag: '🇺🇸' }
];

export function LanguageSelector() {
  const [isOpen, setIsOpen] = useState(false);
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentLanguage = languages.find(lang => lang.code === locale) || languages[0];

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLanguageChange = (langCode: string) => {
    // For now, just reload the page with the new locale
    // In a more complex setup, we'd use a proper locale switching mechanism
    document.cookie = `locale=${langCode}; path=/; max-age=${60 * 60 * 24 * 30}`; // 30 days
    window.location.reload();
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 p-2 sm:p-3 rounded-xl hover:bg-white/20 transition-all duration-200 text-white"
        title="Cambiar idioma / Change language"
      >
        <Globe className="size-4 sm:size-5" />
        <span className="hidden sm:inline text-sm font-medium">{currentLanguage.flag}</span>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-gray-900/90 backdrop-blur-md rounded-xl shadow-2xl border border-gray-700/50 overflow-hidden z-50">
          {languages.map((language) => (
            <button
              key={language.code}
              onClick={() => handleLanguageChange(language.code)}
              className={`w-full flex items-center gap-3 px-4 py-3 text-sm font-medium transition-colors ${
                language.code === locale
                  ? 'bg-blue-600/20 text-blue-300'
                  : 'text-gray-200 hover:bg-white/10'
              }`}
            >
              <span className="text-lg">{language.flag}</span>
              <span className="flex-1 text-left">{language.name}</span>
              {language.code === locale && (
                <span className="text-blue-400">✓</span>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

