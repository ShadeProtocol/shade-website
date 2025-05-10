import React from 'react';
import '../styles/index.css';
import type { Metadata } from 'next';
import '../styles/tailwind.css';

export const metadata: Metadata = {
  title: 'Next.js 15 with TypeScript and Tailwind CSS',
  description: 'A boilerplate project with Next.js 15, TypeScript and Tailwind CSS 3.4.17',
  icons: {
    icon: [
      { url: '/favicon.ico', type: 'image/x-icon' }
    ],
  },
  viewport: 'width=device-width, initial-scale=1',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
      {children}
        <script id="dhws-errorTracker" src="/dhws-error-tracker.js"></script>
  <script id="dhws-elementInspector" src="/dhws-web-inspector.js"></script>
</body>
    </html>
  );
}
