import localFont from 'next/font/local'
import { TextIterator } from '@/components/text-iterator'
import { pdfjs, Document, Page } from 'react-pdf'

//pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

const tigerious = localFont({
  src: '../../public/fonts/Tigerious-ywyKe.otf'
})

const texts = ['Software Engineer', 'Machine Learning Enthusiast', 'Dungeons and Dragons Enjoyer', 'Gamer']

export default function Home() {
  return (
  <div className='mx-w-4xl mx-auto text-center'>
    <h1 className={`${tigerious.className} text-9xl`}>Shantanu Shinde</h1>
    <TextIterator texts={texts} interval={9000} className='text-3xl m-6'/>
    {/* <Document file="../../public/documents/ECS Editable Resume8.pdf">
      <Page pageIndex={0}/>
    </Document> */}
  </div>
  );
}
