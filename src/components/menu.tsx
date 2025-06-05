'use client'

import { Menu, X } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function DropMenu() {
    const [open, setOpen] = useState(false);

    return (
        <div className="relative md:hidden">
        <button
            onClick={() => setOpen(!open)}
            className="p-2 text-gray-700 dark:text-white focus:outline-none z-[100] relative"
            aria-label="Toggle Menu"
        >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
         {open && (
                <div className="fixed inset-0 bg-white dark:bg-gray-900 flex flex-col items-center text-center justify-center text-2xl text-gray-900 dark:text-white z-50">
                    <Link href="/" onClick={() => setOpen(false)} className="hover:bg-white hover:text-black w-full p-4"><p>Home</p></Link>
                    <Link href="/projects" onClick={() => setOpen(false)} className="hover:bg-white hover:text-black w-full p-4"><p>Projects</p></Link>
                    <Link href="/tech_stack" onClick={() => setOpen(false)} className="hover:bg-white hover:text-black w-full p-4"><p>Tech Stack</p></Link>
                    <Link href="/work_experience" onClick={() => setOpen(false)} className="hover:bg-white hover:text-black w-full p-4"><p>Work Experience</p></Link>
                    <Link href="/contact" onClick={() => setOpen(false)} className="hover:bg-white hover:text-black w-full p-4"><p>Contact</p></Link>
                </div>
        )}
        </div>
    )    
}