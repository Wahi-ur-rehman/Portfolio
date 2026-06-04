import { motion } from "motion/react";
import { useInView } from "react-intersection-observer";
import { Code2, Database, Cloud, Brain, Palette, Cog } from "lucide-react";

const skillCategories = [
  {
    title: "AI/ML Stack",
    icon: Brain,
    color: "from-purple-500 to-pink-600",
    skills: [
      { name: "Claude API", level: 95 },
      { name: "Google Gemini", level: 90 },
      { name: "OpenAI GPT-4", level: 90 },
      { name: "LightGBM", level: 85 },
      { name: "Scikit-learn", level: 85 },
      { name: "Python 3.11", level: 95 },
    ],
  },
  {
    title: "Frontend",
    icon: Palette,
    color: "from-blue-500 to-cyan-600",
    skills: [
      { name: "React 19", level: 95 },
      { name: "Next.js 14", level: 90 },
      { name: "TypeScript", level: 95 },
      { name: "Three.js / R3F", level: 85 },
      { name: "Framer Motion", level: 90 },
      { name: "Tailwind CSS", level: 95 },
    ],
  },
  {
    title: "Backend",
    icon: Database,
    color: "from-green-500 to-emerald-600",
    skills: [
      { name: "Node.js", level: 90 },
      { name: "Express", level: 85 },
      { name: "Fastify", level: 80 },
      { name: "Supabase", level: 90 },
      { name: "Firebase", level: 85 },
      { name: "MetaTrader 5 API", level: 85 },
    ],
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    color: "from-orange-500 to-red-600",
    skills: [
      { name: "AWS", level: 80 },
      { name: "Google Cloud Run", level: 85 },
      { name: "Docker", level: 85 },
      { name: "CI/CD", level: 80 },
      { name: "Git", level: 95 },
      { name: "Vercel", level: 90 },
    ],
  },
  {
    title: "Languages",
    icon: Code2,
    color: "from-indigo-500 to-purple-600",
    skills: [
      { name: "TypeScript", level: 95 },
      { name: "JavaScript", level: 95 },
      { name: "Python", level: 95 },
      { name: "Dart", level: 70 },
    ],
  },
  {
    title: "Tools & Other",
    icon: Cog,
    color: "from-pink-500 to-rose-600",
    skills: [
      { name: "GSAP", level: 85 },
      { name: "Vite", level: 90 },
      { name: "PWA", level: 85 },
      { name: "Pandas", level: 90 },
      { name: "NumPy", level: 90 },
      { name: "WebGL", level: 80 },
    ],
  },
];

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="min-h-screen py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-indigo-950/20 to-gray-950" />

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-cyan-600 mx-auto rounded-full" />
          <p className="text-gray-400 mt-6 text-lg max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, production-ready applications
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-600/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all h-full">
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`p-3 bg-gradient-to-br ${category.color} rounded-xl shadow-lg`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold">{category.title}</h3>
                  </div>

                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{
                          duration: 0.5,
                          delay: categoryIndex * 0.1 + skillIndex * 0.05,
                        }}
                      >
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm font-medium text-gray-300">
                            {skill.name}
                          </span>
                          <span className="text-xs text-gray-500">{skill.level}%</span>
                        </div>
                        <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={inView ? { width: `${skill.level}%` } : {}}
                            transition={{
                              duration: 1,
                              delay: categoryIndex * 0.1 + skillIndex * 0.05 + 0.3,
                              ease: "easeOut",
                            }}
                            className={`h-full bg-gradient-to-r ${category.color} rounded-full relative overflow-hidden`}
                          >
                            <div className="absolute inset-0 bg-white/20 animate-pulse" />
                          </motion.div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 border border-blue-500/20 rounded-2xl p-8 backdrop-blur-sm">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Always Learning
            </h3>
            <p className="text-gray-400 max-w-3xl mx-auto">
              Currently focused on AWS production hardening, Docker/ECS/CI-CD pipelines,
              and making my first open source contributions. I'm continuously expanding
              my skillset to stay at the forefront of technology.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
