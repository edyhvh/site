'use client';

import { useLanguage } from '@/hooks/useLanguage';

// Inline SVG icons for reliability
const GithubIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const TelegramIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21.198 2.433a2.242 2.242 0 0 0-1.022.215l-16.03 6.653a2.26 2.26 0 0 0-.126 4.089l3.9 1.307a1.082 1.082 0 0 0 .612.003l7.143-2.47a.72.72 0 0 1 .898.956l-2.52 5.083c-.165.334-.006.738.346.899l5.032 2.265a2.25 2.25 0 0 0 3.074-2.097L22.74 3.86a2.25 2.25 0 0 0-1.542-2.427Z" />
  </svg>
);

const XIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
    <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
  </svg>
);

export function Header() {
  const { t } = useLanguage();

  const socialLinks = [
    { icon: GithubIcon, href: 'https://github.com/edyhvh', label: 'GitHub' },
    { icon: TelegramIcon, href: 'https://t.me/edyhvh', label: 'Telegram' },
    { icon: XIcon, href: 'https://x.com/edyhvh', label: 'X' },
  ];

  return (
    <header className="mb-16">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-mono font-bold tracking-tight mb-6">
        {t.greeting}
      </h1>
      <div className="flex gap-4">
        {socialLinks.map(({ icon: Icon, href, label }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-black hover:opacity-60 transition-opacity"
            aria-label={label}
          >
            <Icon />
          </a>
        ))}
      </div>
    </header>
  );
}
