import localFont from 'next/font/local'
import { TextIterator } from '@/components/text-iterator'
import { Button } from '@/components/ui/button'
import { SiGithub, SiLinkedin, SiGmail } from 'react-icons/si'
import Link from "next/link"

const tigerious = localFont({
  src: '../../public/fonts/Tigerious-ywyKe.otf'
})

const texts = ['Software Engineer', 'Machine Learning Enthusiast', 'Problem Solver', 'Game Dev', 'Data Science Aficionado', 'Dungeons and Dragons Enjoyer', 'Gamer', 'History Nerd']

export default function Home() {
  return (
  <div className='mx-w-4xl mx-auto'>
    <h1 className={`${tigerious.className} text-4xl sm:text-7xl md:text-8xl text-center`}>Shantanu Shinde</h1>
    <TextIterator texts={texts} interval={9000} className='w-full text-center text-1xl sm:text-3xl sm:text-left m-3 sm:m-6'/>
    <div className='flex justify-left gap-6 m-3 sm:text-3xl sm:m-6'>
      <Link href="https://github.com/ShantanuShinde">
        <SiGithub className=" hover:text-gray-600 transition-colors"/>
      </Link>
      <Link href="https://www.linkedin.com/in/shantanu-shinde123">
        <SiLinkedin className="hover:text-gray-600 transition-colors"/>
      </Link>
      <Link href="mailto:shinde.shantanu21@gmail.com">
        <SiGmail className="hover:text-gray-600 transition-colors"/>
      </Link>
    </div>
    <Button className="max-w-md absolute top-4 right-4" asChild size="sm" variant="outline">
      <Link href="/view_resume">
        View Resume
      </Link>
    </Button>
  </div>
  );
}
