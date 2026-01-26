import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Github, ExternalLink } from "lucide-react"
import Link from "next/link"
import {
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiNodedotjs,
  SiPython,
  SiOpenai,
  SiMediapipe,
  SiOpencv,
  SiMysql,
  SiLangchain,
  SiUnity,
  SiDotnet,
  SiSqlite,
  SiFlask,
  SiSpringboot,
  SiMulesoft,
  SiKubernetes,
  SiTensorflow,
  SiJupyter,
  SiKeras,
  SiAmazondynamodb,
  SiAmazons3,
  SiAwslambda,
  SiJavascript,
  SiGithubactions,
} from "react-icons/si"
import { TbBrandCSharp } from "react-icons/tb";
import { VscAzureDevops } from "react-icons/vsc";
import { FaJava, FaAws } from "react-icons/fa";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

export default function ProjectsShowcase() {
  // Technology icon mapping
  const techIcons = {
    "Next.js": { icon: SiNextdotjs, color: "text-white" },
    React: { icon: SiReact, color: "text-cyan-400" },
    "Tailwind CSS": { icon: SiTailwindcss, color: "text-cyan-400" },
    TypeScript: { icon: SiTypescript, color: "text-blue-400" },
    "Node.js": { icon: SiNodedotjs, color: "text-green-400" },
    Python: {icon: SiPython, color: "text-blue-400"},
    OpenAI: {icon: SiOpenai, color: "text-teal-400"},
    MediaPipe: {icon: SiMediapipe, color: "text-yellow-400"},
    OpenCV: {icon: SiOpencv, color: "text-red-400"},
    MySQL: {icon: SiMysql, color: "text-orange-400"},
    LangChain: {icon: SiLangchain, color: "text-white-400"},
    Unity: {icon: SiUnity, color: "text-white-400"},
    CSharp: {icon: TbBrandCSharp, color: "text-black-400"},
    Dotnet: {icon: SiDotnet, color: "text-purple-400"},
    SQLite: {icon: SiSqlite, color: "text-blue-400"},
    AzureDevOps: {icon: VscAzureDevops, color: "text-blue-400"},
    Flask: {icon: SiFlask, color: "text-black-400"},
    Java: {icon: FaJava, color: "text-orange-400"},
    Springboot: {icon: SiSpringboot, color: "text-green-400"},
    MuleSoft: {icon: SiMulesoft, color: "text-black-400"},
    Kubernetes: {icon: SiKubernetes, color: "text-blue-400"},
    Tensorflow: {icon: SiTensorflow, color: "text-orange-400"},
    Keras: {icon: SiKeras, color: "text-red-400"},
    Jupyter: {icon: SiJupyter, color: "text-orange-400"},
    AWS: {icon: FaAws, color: "text-orange-400"},
    AmazonDynamoDB: {icon: SiAmazondynamodb, color: "text-purple-400"},
    AmazonS3: {icon: SiAmazons3, color: "text-green-400"},
    AWSLambda: {icon: SiAwslambda, color: "text-orange-400"},
    JavaScript: {icon: SiJavascript, color: "text-yellow-400"},
    GithubActions: {icon: SiGithubactions, color: "text-black-400"},
  }

  const projects = [
    {
      id: 1,
      title: "AWS Hosted Resume with visitor count",
      description:
        "HTML Resume website hosted on AWS S3 with visitor count functionality using AWS Lambda and DynamoDB and GitHub Actions for CI/CD.",
      technologies: ["AWS", "AmazonS3", "AWSLambda", "AmazonDynamoDB", "JavaScript", "GithubActions"],
      githubUrl: "https://github.com/ShantanuShinde/AWS-Resume",
    },
    {
      id: 2,
      title: "Portfolio Website",
      description:
        "Personal portfolio website showcasing my skills and projects.",
      technologies: ["Next.js", "React", "Tailwind CSS", "TypeScript", "Node.js"],
      githubUrl: "https://github.com/ShantanuShinde/ShantanuShinde.github.io",
    },
    {
      id: 3,
      title: "Sign-opsis - Making media accessible through sign language",
      description:
        "A web application that converts audio or video input into American Sign Language and renders a downloadable 3D animation of the translation.",
      technologies: ["Next.js", "React", "Node.js", "Python", "OpenAI", "MediaPipe", "OpenCV", "Flask"],
      githubUrl: "https://github.com/ShantanuShinde/HackAI",
    },
    {
      id: 4,
      title: "CourseCOMET - Courses and Professors Insight Chat Bot",
      description:
        "A chatbot that helps UT Dallas students choose courses and professors by providing ratings, reviews, grade distributions, and side-by-side professor comparisons.",
      technologies: ["Python", "OpenAI", "LangChain", "MySQL", "Flask", "Next.js"],
      githubUrl: "https://github.com/ShantanuShinde/Professor-Course-Insight-Bot",
    },
    {
      id: 5,
      title: "Don't Squish the Squirrel! - Squirrel minigames",
      description: "A Unity 3D game with multiple minigames involving cute squirrels trying to collect nuts while avoiding threats and obstacles.",
      technologies: ["Unity", "CSharp"],
      githubUrl: "https://github.com/SanicSpeed1238/SquirrelGames",
    },
    {
      id: 6,
      title: "NI Hardware Activation REST API",
      description: "A REST API that generates activation codes for subscription based export controlled and non-export controlled features of NI Hardwares.",
      technologies: ["Java", "Springboot", "Mulesoft", "Kubernetes", "AzureDevOps"],
      githubUrl: "",
    },
    {
      id: 7,
      title: "Database Migration Tool for NI VLM",
      description: "A automated tool that converts SQL CE licensing database into SQLite equivalent for the NI Volume License Manager.",
      technologies: ["Dotnet", "SQLite", "AzureDevOps"],
      githubUrl: "",
    },
    {
      id: 8,
      title: "Character Recognition using CNN",
      description: "This project involves recognizing handwritten English characters from images using a Convolutional Neural Network (CNN). The images are preprocessed to remove noise and binarized before being stored in a CSV file for training. The CNN model, implemented in Keras, was trained on 15,948 samples over 50 epochs with a batch size of 64, achieving ~94.7% accuracy on both training and validation sets.",
      technologies: ["Python", "Tensorflow", "Keras", "Jupyter"],
      githubUrl: "https://github.com/ShantanuShinde/Character-Recognition-with-CNN"
    }
  ]

  return (
    <div className="min-h-screen">
      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
            My Projects
          </h1>
        </div>

        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-purple-500 to-cyan-500 opacity-60"></div>

          <div className="space-y-12">
            {projects.map((project, index) => (
              <div key={project.id} className="relative flex items-center">
                <div className="absolute left-6 w-4 h-4 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full border-2 border-slate-900 shadow-lg shadow-cyan-500/25 z-10"></div>

                <div className="ml-16 w-full">
                  <Card className="bg-slate-800/50 border-slate-700 hover:border-cyan-500/50 transition-all duration-300 backdrop-blur-sm hover:shadow-lg hover:shadow-cyan-500/10">
                    <CardHeader>
                      <CardTitle className="text-2xl text-white">{project.title}</CardTitle>
                      <CardDescription className="text-slate-300 text-base">{project.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <TooltipProvider>
                        <div className="flex flex-wrap gap-4">
                          {project.technologies.map((tech) => {
                            const techInfo = techIcons[tech as keyof typeof techIcons]
                            const IconComponent = techInfo?.icon || SiReact
                            const iconColor = techInfo?.color || "text-slate-400"

                            return (
                              <Tooltip key={tech}>
                                <TooltipTrigger asChild>
                                  <div className="p-2 bg-slate-700/50 rounded-lg hover:bg-slate-700 transition-colors cursor-pointer group">
                                    <IconComponent
                                      size={24}
                                      className={`${iconColor} group-hover:scale-110 transition-transform`}
                                    />
                                  </div>
                                </TooltipTrigger>
                                <TooltipContent>
                                  <p className="text-sm">{tech}</p>
                                </TooltipContent>
                              </Tooltip>
                            )
                          })}
                        </div>
                      </TooltipProvider>
                    </CardContent>
                    <CardFooter className="flex justify-end gap-6">
                      <Link
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm text-slate-300 hover:text-cyan-400 transition-colors group"
                      >
                        <Github size={16} className="group-hover:scale-110 transition-transform" />
                        <span>Code</span>
                        <ExternalLink size={16} className="group-hover:scale-110 transition-transform" />
                      </Link>
                    </CardFooter>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 flex justify-center">
          <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
        </div>
      </main>
    </div>
  )
}
