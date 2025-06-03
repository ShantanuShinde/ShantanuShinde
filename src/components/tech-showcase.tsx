"use client"

import { useState } from "react"
import dynamic from "next/dynamic"

// Dynamically import IconCloud to avoid SSR issues
const IconCloud = dynamic(() => import("./icon-cloud"), { ssr: false })

const technologies = [
  "react",
  "javascript",
  "typescript",
  "nextdotjs",
  "nodedotjs",
  "python",
  "vuedotjs",
  "mongodb",
  "postgresql",
  "docker",
  "amazonaws",
  "git",
  "tailwindcss",
  "express",
  "graphql",
  "redis",
  "django",
  "angular",
  "java",
  "go",
  "kubernetes",
  "sass",
  "webpack",
  "vite",
  "jest",
  "mysql",
  "flask",
  "cplusplus",
  "html5",
  "css3",
  "firebase",
  "vercel",
  "github",
  "visualstudiocode",
]

export default function TechStack() {
  const [hoveredTech, setHoveredTech] = useState<string | null>(null)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-3/4 w-96 h-96 bg-green-500 rounded-full blur-3xl"></div>
      </div>

      {/* Header */}
      <div className="relative z-10 text-center pt-16 pb-8">
        <h1 className="text-4xl md:text-6xl font-bold text-slate-800 dark:text-slate-100 mb-4">My Tech Stack</h1>
        <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto px-4">
          Interactive 3D cloud of technologies I work with. Click and drag to rotate!
        </p>
      </div>

      {/* Icon Cloud Container */}
      <div className="relative z-10 flex justify-center items-center min-h-[60vh]">
        <div className="w-full max-w-4xl h-[500px] flex justify-center items-center">
          <IconCloud iconSlugs={technologies} />
        </div>
      </div>

      {/* Technology Grid for Reference */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 pb-16">
        <div className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm rounded-2xl p-8 border border-slate-200/50 dark:border-slate-700/50">
          <h2 className="text-2xl font-semibold text-slate-800 dark:text-slate-100 mb-6 text-center">
            Technologies & Tools
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              "React",
              "JavaScript",
              "TypeScript",
              "Next.js",
              "Node.js",
              "Python",
              "Vue.js",
              "MongoDB",
              "PostgreSQL",
              "Docker",
              "AWS",
              "Git",
              "Tailwind CSS",
              "Express.js",
              "GraphQL",
              "Redis",
              "Django",
              "Angular",
              "Java",
              "Go",
              "Kubernetes",
              "Sass",
              "Webpack",
              "Vite",
              "Jest",
              "MySQL",
              "Flask",
              "C++",
              "HTML5",
              "CSS3",
            ].map((tech) => (
              <div
                key={tech}
                className="text-center p-3 rounded-lg bg-white/50 dark:bg-slate-700/50 hover:bg-white/80 dark:hover:bg-slate-700/80 transition-all duration-200 cursor-pointer"
                onMouseEnter={() => setHoveredTech(tech)}
                onMouseLeave={() => setHoveredTech(null)}
              >
                <span
                  className={`text-sm font-medium ${
                    hoveredTech === tech ? "text-blue-600 dark:text-blue-400" : "text-slate-700 dark:text-slate-300"
                  }`}
                >
                  {tech}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="relative z-10 text-center pb-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-200/50 dark:border-slate-700/50">
            <p className="text-slate-600 dark:text-slate-300">
              This 3D cloud represents my journey through various technologies. Each icon represents a tool or language
              I've used to build applications and solve problems. The cloud rotates automatically, or you can interact
              with it directly!
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
