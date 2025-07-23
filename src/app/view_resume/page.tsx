import { ArrowLeft, Download, ZoomIn, ZoomOut } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function PDFViewerPage() {
  return (
    <div className="flex h-screen w-full flex-col">
      <div className="flex-1 p-4">
        <div className="h-full w-full rounded-lg border bg-white shadow-sm">
          <iframe src="/documents/myresume.pdf" className="h-full w-full rounded-lg" title="Resume" />
        </div>
      </div>
    </div>
  )
}
