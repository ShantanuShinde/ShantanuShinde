import './globals.css'
import { ReactNode } from 'react';
import { JetBrains_Mono } from 'next/font/google'
import ParticlesBackground from '@/components/particle-background';
import Navbar from '@/components/navbar';
import { Analytics } from "@vercel/analytics/next"

const jetBrains = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
})

export const metadata = {
  title: 'Shantanu Shinde\'s Portfolio',
  description: 'Portfolio of projects, skills, and contact information.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      </head>
      <body className={`${jetBrains.className} bg-[#0f0f0f] text-gray-300 flex flex-col`}>
        <ParticlesBackground/>
        <Navbar/>
        <main className="flex-grow flex items-center justify-center relative mt-17">{children}</main>
        <Analytics/>
      </body>
    </html>
  );
}
