'use client';

import { useLanguage } from '@/hooks/useLanguage';

export function Education() {
  const { t } = useLanguage();

  return (
    <section className="mb-12">
      <h2 className="text-lg font-medium tracking-wide mb-6">{t.education}</h2>
      <ul className="space-y-2">
        <li className="text-black">— {t.educationItem}</li>
      </ul>
    </section>
  );
}
