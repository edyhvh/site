'use client';

import { useLanguage } from '@/hooks/useLanguage';

const LinkIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M10 13a5 5 0 0 0 7.07.07l2-2A5 5 0 0 0 12 4l-1.15 1.15" />
    <path d="M14 11a5 5 0 0 0-7.07-.07l-2 2A5 5 0 0 0 12 20l1.15-1.15" />
  </svg>
);

export function Education() {
  const { t } = useLanguage();

  return (
    <section className="mb-12">
      <h2 className="text-lg font-medium tracking-wide mb-6">{t.education}</h2>
      <ul className="space-y-2">
        <li className="text-black">
          — {t.educationItem}, Universidad Monteávila{" "}
          <a
            href="https://www.uma.edu.ve/ciencias-administrativas/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex align-middle hover:opacity-60 transition-opacity"
            aria-label="Universidad Monteávila — Ciencias Administrativas"
          >
            <LinkIcon />
          </a>{" "}(2018–2022)
        </li>
      </ul>
    </section>
  );
}
