"use client"

import { useState } from "react"
import dynamic from "next/dynamic"

const IconCloud = dynamic(() => import("@/components/icon-cloud"), { ssr: false })

const technologies = [
  "react",
  "javascript",
  "typescript",
  "nextdotjs",
  "nodedotjs",
  "python",
  "mongodb",
  "docker",
  "git",
  "tailwindcss",
  "django",
  "angular",
  "kubernetes",
  "mysql",
  "flask",
  "cplusplus",
  "html5",
  "css3",
  "visualstudiocode",
  "pytorch",
  "tensorflow",
  "dotnet",
  "sqlite",
  "unity",
  "apachespark",
  "blazor",
  "langchain",
  "springboot"
]

export default function TechStack() {
  const [hoveredTech, setHoveredTech] = useState<string | null>(null)

  return (
    <div className="min-h-screen relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-3/4 w-96 h-96 bg-green-500 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 text-center pt-16 pb-8">
        <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
            My Tech Stack
          </h1>
      </div>

      <div className="relative z-10 flex justify-center items-center min-h-[70vh]">
        <div className="w-full max-w-4xl h-[500px] flex justify-center items-center">
          <IconCloud iconSlugs={technologies} />
        </div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 pb-16 mt-16">
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
              "MongoDB",
              "Docker",
              "Git",
              "Tailwind CSS",
              "Django",
              "Angular",
              "Java",
              "Kubernetes",
              "MySQL",
              "Flask",
              "C++",
              "HTML5",
              "CSS3",
              "Apache Spark",
              "PyTorch",
              "Tensorflow",
              "LangChain",
              ".NET",
              "Spring Boot",
              "SQLite",
              "Blazor",
              "Unity 3D",
              "C#"
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
    </div>
  )
}
