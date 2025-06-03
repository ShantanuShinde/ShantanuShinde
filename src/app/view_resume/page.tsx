import { ArrowLeft, Download, ZoomIn, ZoomOut } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function PDFViewerPage() {
  return (
    <div className="flex h-screen w-full flex-col">
      <div className="flex items-center justify-between border-b p-4 shadow-sm">
        <div className="flex items-center gap-4">
          <Button asChild variant="ghost" size="sm" className="text-black">
            <Link href="/">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back
            </Link>
          </Button>
        </div>
      </div>

      <div className="flex-1 p-4">
        <div className="h-full w-full rounded-lg border bg-white shadow-sm">
          <iframe src="/documents/resume.pdf" className="h-full w-full rounded-lg" title="Resume" />
        </div>
      </div>
    </div>
  )
}
