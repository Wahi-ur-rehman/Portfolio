import { motion } from "motion/react";
import { useInView } from "react-intersection-observer";
import { ExternalLink, Github, TrendingUp, Brain, Box, Utensils, Code } from "lucide-react";
import { ImageWithFallback } from "./ImageWithFallback";

const projects = [
  {
    title: "ApexScalp AI",
    description: "Algorithmic trading system with ML-driven signal detection and live execution on MetaTrader 5. Features real-time OHLCV engineering, LightGBM classification, and advanced risk management.",
    tech: ["Python", "LightGBM", "MetaTrader5", "Pandas", "NumPy"],
    status: "Live in Production",
    progress: "83%",
    icon: TrendingUp,
    color: "from-green-500 to-emerald-600",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800",
  },
  {
    title: "MNEMO - AI Memory App",
    description: "Context-aware AI companion for memory capture and retrieval. Features voice & text memory capture, location-triggered surfacing, and conversational AI search using Claude API.",
    tech: ["React", "TypeScript", "Supabase", "Claude API", "Cloud Run"],
    status: "Deployed",
    progress: "62%",
    link: "https://mnemo-627678856506.asia-southeast1.run.app/",
    icon: Brain,
    color: "from-blue-500 to-cyan-600",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800",
  },
  {
    title: "3D AI Portfolio",
    description: "Immersive portfolio experience with Three.js R3F and Framer Motion page transitions. Features terminal-style interactive UI and performance-optimized WebGL rendering.",
    tech: ["Three.js", "React 19", "TypeScript", "Tailwind", "Framer Motion"],
    status: "Live",
    link: "https://ai-portfolio-seven-liart.vercel.app/",
    github: "https://github.com/Wahi-ur-rehman",
    icon: Box,
    color: "from-purple-500 to-pink-600",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800",
  },
  {
    title: "FreshPlan AI",
    description: "Smart food inventory system with computer vision expiry date detection and Gemini-powered recipe generation. Real-time inventory management with push notifications.",
    tech: ["Vite", "Firebase", "TypeScript", "Google Gemini", "PWA"],
    status: "In Progress",
    progress: "44%",
    icon: Utensils,
    color: "from-orange-500 to-red-600",
    image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=800",
  },
  {
    title: "Clothing Classifier",
    description: "Machine learning project for automated clothing classification and categorization using computer vision techniques.",
    tech: ["TypeScript", "Machine Learning", "Computer Vision"],
    status: "Completed",
    github: "https://github.com/Wahi-ur-rehman",
    icon: Code,
    color: "from-indigo-500 to-blue-600",
    image: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=800",
  },
];

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="min-h-screen py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-purple-950/20 to-gray-950" />

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-600 mx-auto rounded-full" />
          <p className="text-gray-400 mt-6 text-lg max-w-2xl mx-auto">
            From AI-powered systems to immersive web experiences
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all h-full flex flex-col">
                  <div className="relative h-48 overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-80 mix-blend-multiply`} />
                    <ImageWithFallback
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 right-4 p-3 bg-black/50 backdrop-blur-sm rounded-lg">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-2xl font-bold">{project.title}</h3>
                    </div>

                    <div className="mb-4">
                      <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold bg-gradient-to-r ${project.color} text-white`}>
                        {project.status}
                      </span>
                      {project.progress && (
                        <span className="ml-2 text-sm text-gray-400">
                          {project.progress} complete
                        </span>
                      )}
                    </div>

                    <p className="text-gray-400 mb-4 flex-1">{project.description}</p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-gray-300 hover:bg-white/10 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-3 mt-auto">
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 bg-blue-500/20 hover:bg-blue-500/30 border border-blue-500/30 rounded-lg transition-all group/link"
                        >
                          <ExternalLink className="w-4 h-4 group-hover/link:scale-110 transition-transform" />
                          <span className="text-sm">Live Demo</span>
                        </a>
                      )}
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg transition-all group/link"
                        >
                          <Github className="w-4 h-4 group-hover/link:scale-110 transition-transform" />
                          <span className="text-sm">Code</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
