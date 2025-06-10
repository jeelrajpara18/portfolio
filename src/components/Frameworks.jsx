/* eslint-disable no-unused-vars */
"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useState } from "react"

const techStacks = {
  Frontend: [
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Tailwind CSS",
    "shadcn/ui",
    "Framer Motion",
    "HTML5",
    "CSS3",
    "Sass",
    "Redux",
    "Zustand",
  ],
  Backend: [
    "Node.js",
    "Express.js",
    "REST APIs",
    "WebSockets",
  ],
  Database: ["PostgreSQL", "MongoDB", "Redis", "MySQL", "Firebase", "Prisma", "Drizzle", "SQL"],
  "DevOps & Cloud": [
    "Vercel",
    "Netlify",
    "GitHub Actions",
    "Git",
  ],
  "Design & Tools": ["Figma", "VS Code", "Postman", "Notion", "Slack", "Discord"],
}

const allTechs = Object.values(techStacks).flat()

export function Frameworks() {
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [hoveredTech, setHoveredTech] = useState(null)

  const displayTechs = selectedCategory ? techStacks[selectedCategory ] : allTechs

  return (
    <Card className="bg-transparent border-slate-700/50 border-b-0 backdrop-blur-sm h-full">
      <CardHeader className="pb-4">
        <CardTitle className="text-yellow-300 text-xl font-semibold">Tech Stack</CardTitle>
        <p className="text-slate-300 text-sm leading-relaxed">
          I specialize in a variety of languages, frameworks, and tools that allow me to build robust and scalable
          applications
        </p>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* Category Filter Buttons */}
        <div className="flex flex-wrap gap-1 mb-4">
          <button
            onClick={() => setSelectedCategory(null)}
            className={`px-2 py-1 rounded text-xs transition-all duration-200 ${
              selectedCategory === null
                ? "bg-purple-500/20 text-purple-300 border border-purple-500/30"
                : "bg-slate-700/50 text-slate-400 hover:bg-slate-600/50"
            }`}
          >
            All
          </button>
          {Object.keys(techStacks).map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-2 py-1 rounded text-xs transition-all duration-200 ${
                selectedCategory === category
                  ? "bg-purple-500/20 text-purple-300 border border-purple-500/30"
                  : "bg-slate-700/50 text-slate-400 hover:bg-slate-600/50"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Tech Badges */}
        <motion.div
          className="flex flex-wrap gap-2 max-h-64 overflow-y-auto scrollbar-thin scrollbar-thumb-slate-600 scrollbar-track-slate-800"
          layout
        >
          {displayTechs.map((tech, index) => (
            <motion.div
              key={tech}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{
                duration: 0.2,
                delay: index * 0.02,
                layout: { duration: 0.3 },
              }}
              onHoverStart={() => setHoveredTech(tech)}
              onHoverEnd={() => setHoveredTech(null)}
            >
              <Badge
                variant="outline"
                className={`
                  text-xs px-2 py-1 transition-all duration-200 cursor-default
                  ${
                    hoveredTech === tech
                      ? "bg-purple-500/20 border-purple-400/50 text-purple-200 shadow-sm shadow-purple-500/25 scale-105"
                      : "bg-slate-700/30 border-slate-600/50 text-slate-300 hover:bg-slate-600/40"
                  }
                `}
              >
                {tech}
              </Badge>
            </motion.div>
          ))}
        </motion.div>

        {/* Tech Count */}
        {/* <div className="pt-2 border-t border-slate-700/50">
          <p className="text-slate-400 text-xs">
            {selectedCategory ? (
              <>
                <span className="text-purple-400">{displayTechs.length}</span> technologies in{" "}
                <span className="text-purple-400">{selectedCategory}</span>
              </>
            ) : (
              <>
                <span className="text-purple-400">{displayTechs.length}+</span> technologies mastered
              </>
            )}
          </p>
        </div> */}

        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-2 pt-2">
          <div className="text-center">
            <div className="text-lg font-bold text-cyan-400">{techStacks.Frontend.length}</div>
            <div className="text-xs text-slate-400">Frontend</div>
          </div>
          <div className="text-center">
            <div className="text-lg font-bold text-green-400">{techStacks.Backend.length}</div>
            <div className="text-xs text-slate-400">Backend</div>
          </div>
          <div className="text-center">
            <div className="text-lg font-bold text-blue-400">{techStacks.Database.length}</div>
            <div className="text-xs text-slate-400">Database</div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
