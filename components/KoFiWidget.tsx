'use client';

import Script from "next/script";

export function KoFiWidget() {
  return (
    <Script
      src="https://storage.ko-fi.com/cdn/scripts/overlay-widget.js"
      strategy="lazyOnload"
      onLoad={() => {
        if (typeof window !== 'undefined' && 'kofiWidgetOverlay' in window) {
          (window as typeof window & { kofiWidgetOverlay: { draw: (username: string, config: object) => void } }).kofiWidgetOverlay.draw('edyehoshua', {
            'type': 'floating-chat',
            'floating-chat.donateButton.text': 'Support me',
            'floating-chat.donateButton.background-color': '#00b9fe',
            'floating-chat.donateButton.text-color': '#fff'
          });
        }
      }}
    />
  );
}
