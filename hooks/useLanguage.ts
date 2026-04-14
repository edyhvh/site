'use client';

import { useState, useEffect } from 'react';
import { Language, Translations, translations, detectLanguage } from '@/lib/translations';

export function useLanguage(): { language: Language; t: Translations } {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    setLanguage(detectLanguage());
  }, []);

  return {
    language,
    t: translations[language],
  };
}
