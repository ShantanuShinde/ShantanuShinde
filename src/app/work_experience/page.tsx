import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, Building2, MapPin } from "lucide-react"

export default function WorkExperiencePage() {
  const experiences = [
    {
      id: 1,
      role: "Computer Science Graduate Grader",
      organization: "University of Texas at Dallas",
      location: "Richardson, TX, US",
      period: "August 2025 – Present",
      description:
        "Teaching and conducting coding workshops for school students as part of computer science outreach programs.",
      responsibilities: [
        "Evaluated 300+ submissions across 10+ theory and coding assignments for 30+ honors CS students and created solutions for Data Structures and Foundation of Algorithm Analysis course.",
      ],
    },
    {
      id: 2,
      role: "CS Outreach Instructor",
      organization: "University of Texas at Dallas",
      location: "Richardson, TX, US",
      period: "September 2024 – June 2025",
      description:
        "Teaching and conducting coding workshops for school students as part of computer science outreach programs.",
      responsibilities: [
        "Helped conduct coding workshops and events for school students.",
        "Acted as an instructor to present and teach workshop materials and resolve doubts.",
      ],
    },
    {
      id: 3,
      role: "Software Engineering Intern → Software Engineer → Staff Software Engineer",
      organization: "NI (National Instruments) (Emerson)",
      location: "Bangalore, India",
      period: "January 2021 – June 2024",
      description: "Progressed through multiple roles developing enterprise software solutions and AI-powered tools.",
      responsibilities: [
        "Developed a prototype chatbot for NI Customer Support using GPT-3, Python, Prompt-Engineering with chatbot web interface using NodeJS.",
        "Worked on a Similar Yammer post detector that searched for the most similar yammer post using BERT vector outputs and cosine similarity. Integrated that into a Yammer group using Power Automate, gRPC, Azure Function App and Azure Container Instance.",
        "Helped with development of gRPC API wrappers for NI Device Driver APIs using Python, C++, LabVIEW and wrote automated tests using gtest.",
        "Implemented Linux web service for LabVIEW web interface using C++.",
        "Worked on developing Hardware Configuration Utility using .NET Core which gives information and allows configuration of NI Hardware Devices.",
        "Implemented Hardware Licensing Activation API using Java, Springboot, Kubernetes, Micro Service architecture, Maven and Azure Pipeline for deployment, MuleSoft for proxy API.",
        "Updated NI Volume License Manager to use SQLite database in place of SQL CE database using C# .NET, SQLite, SQLite encryption library and wrote automated testing using XUnit and Moq.",
        "Awarded 'Rookie of the Year' at NI Global R&D Excellence Awards 2022 for outstanding performance.",
      ],
    },
    {
      id: 4,
      role: "Summer Intern",
      organization: "International Institute of Information Technology",
      location: "Hyderabad, India",
      period: "May 2019 – August 2019",
      description: "Developed web applications focusing on 3D simulation and computer vision technologies.",
      responsibilities: [
        "Developed 3D simulation web application using JavaScript 3D library.",
        "Implemented Image Processing and Computer Vision web application using Python, OpenCV, Flask.",
        "Received a letter of commendation for good performance.",
      ],
    },
  ]

  return (
    <div className="min-h-screen">
      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
            My Work Experience
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            My professional journey from intern to staff engineer, spanning AI, enterprise software, and educational
            outreach.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-purple-500 to-cyan-500 opacity-60"></div>

          <div className="space-y-12">
            {experiences.map((experience) => (
              <div key={experience.id} className="relative flex items-start">
                {/* Connection node */}
                <div className="absolute left-6 top-8 w-4 h-4 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full border-2 border-slate-900 shadow-lg shadow-cyan-500/25 z-10"></div>

                <div className="ml-16 w-full">
                  <Card className="bg-slate-800/50 border-slate-700 hover:border-cyan-500/50 transition-all duration-300 backdrop-blur-sm hover:shadow-lg hover:shadow-cyan-500/10">
                    <CardHeader>
                      <div className="flex justify-between items-start flex-wrap gap-2">
                        <div className="flex-1">
                          <CardTitle className="text-2xl text-white leading-tight">{experience.role}</CardTitle>
                          <div className="flex items-center mt-2 text-slate-300">
                            <Building2 size={16} className="mr-2 text-purple-400" />
                            <span>{experience.organization}</span>
                          </div>
                          <div className="flex items-center mt-1 text-slate-400 text-sm">
                            <MapPin size={14} className="mr-2 text-cyan-400" />
                            <span>{experience.location}</span>
                          </div>
                        </div>
                        <div className="flex items-center px-3 py-1 rounded-full bg-slate-700/50 text-cyan-400 text-sm whitespace-nowrap">
                          <Calendar size={14} className="mr-2 h-7" />
                          <span>{experience.period}</span>
                        </div>
                      </div>
                      <CardDescription className="text-slate-300 text-base mt-3">
                        {experience.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <h4 className="text-sm font-medium text-purple-400 mb-3">Key Responsibilities & Achievements</h4>
                      <ul className="space-y-3 text-slate-300">
                        {experience.responsibilities.map((responsibility, index) => (
                          <li key={index} className="flex items-start">
                            <div className="mr-3 mt-1.5 h-1.5 w-1.5 rounded-full bg-cyan-400 flex-shrink-0"></div>
                            <span className="text-sm leading-relaxed">{responsibility}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
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
