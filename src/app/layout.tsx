import './globals.css'
import Link from 'next/link';
import { ReactNode } from 'react';
import { JetBrains_Mono } from 'next/font/google'
import ParticlesBackground from '@/components/particle-background';

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
        <nav className="w-full px-6 py-4 shadow-md shadow-lime-200 text-shadow-md sticky top-0 bg-blue-900 z-50">
          <div className="max-w-5xl mx-auto flex items-center justify-between">
            <h1 className="text-2xl font-bold">Shantanu Shinde</h1>
              <div className="space-x-6 text-l">
                <Link href="/" className="hover:text-lime-500">Home</Link>
                <Link href="/projects" className="hover:text-lime-500">Projects</Link>
                <Link href="/tech_stack" className="hover:text-lime-500">Tech Stack</Link>
                <Link href="/work_experience" className="hover:text-lime-500">Work Experience</Link>
                <Link href="/contact" className="hover:text-lime-500">Contact</Link>
              </div>
            </div>
        </nav>
        <main className="flex-grow flex items-center justify-center relative">{children}</main>
      </body>
    </html>
  );
}
