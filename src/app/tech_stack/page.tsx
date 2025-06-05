"use client"

import { useState } from "react"
import { Code, Database, Globe, Server, Wrench, Brain, CloudIcon, GitBranch, Gamepad2 } from "lucide-react"
import {
  SiReact,
  SiNextdotjs,
  SiAngular,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiNodedotjs,
  SiPython,
  SiLangchain,
  SiOpenai,
  SiSqlite,
  SiUnity,
  SiUnrealengine,
  SiCplusplus,
  SiDjango,
  SiFlask,
  SiSpringboot,
  SiMongodb,
  SiMysql,
  SiDocker,
  SiKubernetes,
  SiVercel,
  SiGit,
  SiGithub,
  SiApachespark,
  SiTensorflow,
  SiScikitlearn,
  SiPytorch,
  SiJupyter,
  SiGooglecolab,
  SiDotnet,
} from "react-icons/si"
import { FaJava } from "react-icons/fa";
import { DiVisualstudio } from "react-icons/di";
import { VscAzure } from "react-icons/vsc";
import { VscAzureDevops } from "react-icons/vsc";
import { TbBrandCSharp } from "react-icons/tb";
import { FaAws } from "react-icons/fa";

const technologies = [
  { name: "React", category: "Frontend", color: "bg-blue-500", icon: SiReact },
  { name: "Next.js", category: "Frontend", color: "bg-black", icon: SiNextdotjs },
  { name: "Angular", category: "Frontend", color: "bg-red-500", icon: SiAngular },
  { name: "TypeScript", category: "Frontend", color: "bg-blue-600", icon: SiTypescript },
  { name: "JavaScript", category: "Frontend", color: "bg-yellow-500", icon: SiJavascript },
  { name: "HTML5", category: "Frontend", color: "bg-orange-500", icon: SiHtml5 },
  { name: "CSS3", category: "Frontend", color: "bg-blue-400", icon: SiCss3 },
  { name: "Tailwind CSS", category: "Frontend", color: "bg-cyan-500", icon: SiTailwindcss },

  { name: "Node.js", category: "Backend", color: "bg-green-600", icon: SiNodedotjs },
  { name: "Python", category: "Backend", color: "bg-blue-600", icon: SiPython },
  { name: "Java", category: "Backend", color: "bg-red-600", icon: FaJava },
  { name: "C#", category: "Backend", color: "bg-purple-600", icon: TbBrandCSharp },
  { name: "C++", category: "Backend", color: "bg-blue-700", icon: SiCplusplus },

  { name: "Django", category: "Backend", color: "bg-green-700", icon: SiDjango },
  { name: "Flask", category: "Backend", color: "bg-gray-600", icon: SiFlask },
  { name: ".NET", category: "Backend", color: "bg-purple-700", icon: SiDotnet },
  { name: "Spring Boot", category: "Backend", color: "bg-green-800", icon: SiSpringboot },

  { name: "MongoDB", category: "Database", color: "bg-green-500", icon: SiMongodb },
  { name: "MySQL", category: "Database", color: "bg-blue-600", icon: SiMysql },
  { name: "SQLite", category: "Database", color: "bg-black", icon: SiSqlite },

  { name: "Docker", category: "DevOps", color: "bg-blue-600", icon: SiDocker },
  { name: "Kubernetes", category: "DevOps", color: "bg-blue-700", icon: SiKubernetes },
  { name: "Azure Dev-Ops", category: "DevOps", color: "text-blue-700", icon: VscAzureDevops },

  { name: "AWS", category: "Cloud", color: "text-black bg-white", icon: FaAws },
  { name: "Azure", category: "Cloud", color: "text-blue-700", icon: VscAzure },
  { name: "Vercel", category: "Cloud", color: "bg-black", icon: SiVercel },

  { name: "Git", category: "Tools", color: "bg-orange-700", icon: SiGit },
  { name: "GitHub", category: "Tools", color: "bg-gray-800", icon: SiGithub },
  { name: "VS Code", category: "Tools", color: "text-blue-500", icon: DiVisualstudio },
  { name: "Jupyter", category: "Tools", color: "text-orange-500 bg-white", icon: SiJupyter },
  { name: "Google Colab", category: "Tools", color: "text-yellow-500 bg-white", icon: SiGooglecolab },

  { name: "Apache Spark", category: "Big Data", color: "bg-orange-600", icon: SiApachespark },

  { name: "OpenAI", category: "AI", color: "bg-cyan-600", icon: SiOpenai },
  { name: "LangChain", category: "AI", color: "text-grey-600", icon: SiLangchain },
  { name: "PyTorch", category: "AI", color: "text-orange-400", icon: SiPytorch },
  { name: "Tensorflow", category: "AI", color: "text-orange-600 bg-white", icon: SiTensorflow },
  { name: "Scikit-Learn", category: "AI", color: "text-blue-600 bg-white", icon: SiScikitlearn },

  { name: "Unity 3D", category: "Game Development", color: "bg-white text-black", icon: SiUnity },
  { name: "Unreal Engine", category: "Game Development", color: "bg-white text-black", icon: SiUnrealengine },
]

const categories = [
  { name: "Frontend", icon: Globe, color: "text-blue-500" },
  { name: "Backend", icon: Server, color: "text-green-500" },
  { name: "Database", icon: Database, color: "text-purple-500" },
  { name: "AI", icon: Brain, color: "text-violet-500" },
  { name: "Cloud", icon: CloudIcon, color: "text-orange-500" },
  { name: "DevOps", icon: Wrench, color: "text-red-500" },
  { name: "Tools", icon: GitBranch, color: "text-gray-500" },
  { name: "Big Data", icon: Database, color: "text-cyan-500" },
  { name: "Game Development", icon: Gamepad2, color: "text-white-500" }
]

export default function Component() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [hoveredTech, setHoveredTech] = useState<string | null>(null)

  const filteredTechnologies = selectedCategory
    ? technologies.filter((tech) => tech.category === selectedCategory)
    : technologies

  return (
    <div className="min-h-screen">
      <div className="relative z-10">
        <div className="text-center pt-16 pb-12">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
            My Tech Stack
          </h1>
        </div>

        <div className="max-w-6xl mx-auto px-4 mb-12">
          <div className="flex flex-wrap justify-center gap-3">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-200 ${
                selectedCategory === null
                  ? "bg-slate-800 text-white dark:bg-slate-200 dark:text-slate-800"
                  : "bg-white/60 dark:bg-slate-800/60 hover:bg-white/80 dark:hover:bg-slate-700/80"
              }`}
            >
              <span className="text-sm font-medium">All</span>
              <span className="text-xs bg-slate-200 dark:bg-slate-700 px-2 py-1 rounded-full">
                {technologies.length}
              </span>
            </button>
            {categories.map((category) => {
              const Icon = category.icon
              const count = technologies.filter((tech) => tech.category === category.name).length
              if (count === 0) return null
              return (
                <button
                  key={category.name}
                  onClick={() => setSelectedCategory(category.name)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-200 ${
                    selectedCategory === category.name
                      ? "bg-slate-800 text-white dark:bg-slate-200 dark:text-slate-800"
                      : "bg-white/60 dark:bg-slate-800/60 hover:bg-white/80 dark:hover:bg-slate-700/80"
                  }`}
                >
                  <Icon className={`w-4 h-4 ${selectedCategory === category.name ? "" : category.color}`} />
                  <span className="text-sm font-medium">{category.name}</span>
                  <span className="text-xs bg-slate-200 dark:bg-slate-700 px-2 py-1 rounded-full">{count}</span>
                </button>
              )
            })}
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 pb-16">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {filteredTechnologies.map((tech, index) => {
              const Icon = tech.icon
              return (
                <div
                  key={tech.name}
                  className="group relative"
                  style={{ animationDelay: `${index * 50}ms` }}
                  onMouseEnter={() => setHoveredTech(tech.name)}
                  onMouseLeave={() => setHoveredTech(null)}
                >
                  <div
                    className={`
                    relative p-6 rounded-2xl transition-all duration-300 cursor-pointer
                    bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm
                    border border-slate-200/50 dark:border-slate-700/50
                    hover:scale-105 hover:shadow-xl hover:shadow-slate-200/50 dark:hover:shadow-slate-900/50
                    ${hoveredTech === tech.name ? "ring-2 ring-blue-400 ring-opacity-50" : ""}
                  `}
                  >
                    <div
                      className={`
                      w-16 h-16 rounded-xl flex items-center justify-center mb-4 mx-auto
                      ${tech.color} shadow-lg
                      group-hover:scale-110 transition-transform duration-300
                    `}
                    >
                      <Icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-100 text-center mb-2">
                      {tech.name}
                    </h3>
                    <div className="flex justify-center">
                      <span className="text-xs px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300">
                        {tech.category}
                      </span>
                    </div>
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
