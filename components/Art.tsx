'use client';

import { useLanguage } from '@/hooks/useLanguage';

export function Art() {
  const { t } = useLanguage();

  const artItems = [
    {
      name: '4s4f',
      description: t.artDescriptions.music,
      url: 'https://suno.com/@4s4f',
    },
    {
      name: 'shaul',
      description: t.artDescriptions.bible,
      url: 'https://shaul.vercel.app',
    },
  ];

  return (
    <section className="mb-12">
      <h2 className="text-lg font-medium tracking-wide mb-6">{t.art}</h2>
      <ul className="space-y-2">
        {artItems.map((item, index) => (
          <li key={item.name} className="flex items-center gap-3">
            <span>—</span>
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:underline"
            >
              {item.name}
            </a>
            <span className="text-gray-600">{item.description}</span>
            {index < artItems.length - 1 && <span className="text-gray-400">—</span>}
          </li>
        ))}
      </ul>
    </section>
  );
}
