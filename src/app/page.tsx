import localFont from 'next/font/local'
import { TextIterator } from '@/components/text-iterator'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import Link from "next/link"

const tigerious = localFont({
  src: '../../public/fonts/Tigerious-ywyKe.otf'
})

const texts = ['Software Engineer', 'Machine Learning Enthusiast', 'Dungeons and Dragons Enjoyer', 'Gamer']

export default function Home() {
  return (
  <div className='mx-w-4xl mx-auto text-center'>
    <h1 className={`${tigerious.className} text-9xl`}>Shantanu Shinde</h1>
    <TextIterator texts={texts} interval={9000} className='text-3xl m-6'/>
        {/* View PDF button positioned at top right */}
          <Button className="max-w-md absolute top-4 right-4" asChild size="sm" variant="outline">
            <Link href="/view_resume">
              View Resume
            </Link>
          </Button>
  </div>
  );
}
