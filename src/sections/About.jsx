/* eslint-disable no-unused-vars */
import ElasticComponent from "@/components/ElasticComponent";
import { BentoCard, BentoGrid } from "../components/magicui/bento-grid";
import { Frameworks } from "../components/Frameworks";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

const floatingTechs = [
  { name: "React", x: "10%", y: "15%", delay: 0 },
  { name: "Next.js", x: "85%", y: "25%", delay: 0.5 },
  { name: "TypeScript", x: "75%", y: "60%", delay: 1 },
  { name: "Node.js", x: "15%", y: "70%", delay: 1.5 },
  { name: "PostgreSQL", x: "90%", y: "80%", delay: 2 },
  { name: "Docker", x: "5%", y: "45%", delay: 2.5 },
  { name: "AWS", x: "80%", y: "10%", delay: 3 },
  { name: "GraphQL", x: "25%", y: "85%", delay: 3.5 },
];

const features = [
  {
    className: "col-span-3 lg:col-span-2 bg-transparent",
    background: (
      <div className="px-6 py-4">
        <div className="flex items-center space-x-2 mb-4">
          <div className="w-3 h-3 rounded-full bg-destructive"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
          <span className="ml-4 text-muted-foreground font-mono text-sm">
            about.tsx
          </span>
        </div>
        <div className="text-md font-mono">
          <span className="text-seaGreen">className</span>{" "}
          <span className="text-salmon">Jeel Rajpara</span>{" "}
          <span className="text-seaGreen">extends</span>{" "}
          <span className="text-salmon">Developer</span> {"{"}
          <br />
          <span className="ml-4 text-seaGreen">constructor</span>() {"{"}
          <br />
          <span className="ml-8">super();</span>
          <br />
          <span className="ml-8">
            <span className="text-yellow-300">this</span>.specialty ={" "}
            <span className="text-salmon">"Full Stack Developer"</span>;
          </span>
          <br />
          <span className="ml-8">
            <span className="text-yellow-300">this</span>.experience ={" "}
            <span className="text-salmon">
              "Building scalable applications"
            </span>
            ;
          </span>
          <br />
          <span className="ml-4">{"}"}</span>
          <br />
          <br />
          <span className="ml-4 text-seaGreen">getPhilosophy</span>() {"{"}
          <br />
          <span className="ml-8 text-seaGreen">return</span>{" "}
          <span className="text-salmon">
            "Success through excellence in development."
          </span>
          ;
          <br />
          <span className="ml-4">{"}"}</span>
          <br />
          {"}"}
        </div>
      </div>
    ),
  },
  {
    className: "col-span-3 lg:col-span-1 bg-transparent relative",
    background: <ElasticComponent />,
  },
  {
    className: "col-span-3 lg:col-span-1 bg-transparent",
    background: (
      <div className="px-6 py-4">
        <div className="text-mono text-yellow-300 text-2xl font-semibold">
          Education
        </div>
        <div className="py-5">
          <ul className="space-y-5 text-primary-foreground/70">
            <li className="border-l-2 border-pink-700 pl-4 py-1 hover:border-pink-900 transition-colors">
              <p className="font-medium text-primary-foreground">
                B.Tech (C.E.)
              </p>
              <p>Silver Oak University , Ahmedabad</p>
              <p className="text-sm opacity-70">Aug 2022 - Present</p>
            </li>
            <li className="border-l-2 border-pink-700 pl-4 py-1 hover:border-pink-900 transition-colors">
              <p className="font-medium text-primary-foreground">HSC</p>
              <p>Infocity Junior Science College , Gandhinagar</p>
              <p className="text-sm opacity-70">2021 - 2022</p>
            </li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    className: "col-span-3 lg:col-span-2 bg-transparent h-full",
    href: "#",
    cta: "Learn more",
    background: (
      <>
        <div className="overflow-hidden h-full">
          <Frameworks />
        </div>
      </>
    ),
  },
];

export default function About() {
  return (
    <section
      className="min-h-screen bg-gradient-to-b from-storm via-slate-900 to-indigo relative overflow-hidden"
      style={{
        backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
          `,
        backgroundSize: "20px 20px",
      }}
      id="about"
    >
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-purple-500/20 rounded-full" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-blue-500/20 rounded-full" />
      </div>
      {floatingTechs.map((tech) => (
        <motion.div
          key={tech.name}
          className="absolute z-10"
          style={{ left: tech.x, top: tech.y }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: 1,
            scale: 1,
            y: [0, -10, 0],
          }}
          transition={{
            delay: tech.delay,
            duration: 0.8,
            y: {
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            },
          }}
        >
          <Badge
            variant="outline"
            className="bg-slate-800/80 border-purple-500/50 text-purple-200 backdrop-blur-sm hover:bg-purple-500/20 transition-all duration-300 px-3 py-1"
          >
            {tech.name}
          </Badge>
        </motion.div>
      ))}
      <div className="max-w-7xl mx-auto relative z-20 px-4 py-20">
        <motion.div
          className="text-heading font-mono"
          initial={{ x: 0, opacity: 0 }}
          whileInView={{ x: 10, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          About Me ✨
        </motion.div>
        <BentoGrid>
          {features.map((feature, idx) => (
            <BentoCard key={idx} {...feature} />
          ))}
        </BentoGrid>
      </div>
    </section>
  );
}
