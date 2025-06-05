'use client'

import Link from "next/link"
import DropMenu from "./menu";

export default function Navbar() {
    return (
        <nav className="w-full px-6 py-4 shadow-md shadow-lime-200 text-shadow-md sticky top-0 right-0 bg-blue-900 z-50">
          <div className="mx-auto flex items-center justify-between">
            <h1 className="text-2xl font-bold">Shantanu Shinde</h1>
            <ul className="hidden md:flex">
                <div className="space-x-6 text-l">
                    <Link href="/" className="hover:text-lime-500">Home</Link>
                    <Link href="/projects" className="hover:text-lime-500">Projects</Link>
                    <Link href="/tech_stack" className="hover:text-lime-500">Tech Stack</Link>
                    <Link href="/work_experience" className="hover:text-lime-500">Work Experience</Link>
                    <Link href="/contact" className="hover:text-lime-500">Contact</Link>
                </div>
            </ul>
            <div className="md:hidden">
              <DropMenu/>
            </div>
          </div>
        </nav>        
    )
}