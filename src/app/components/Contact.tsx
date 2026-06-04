import { motion } from "motion/react";
import { useInView } from "react-intersection-observer";
import { Mail, MapPin, Linkedin, Github, Send, Code2 } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { sanitizeInput, validateEmail } from "../../utils/sanitize";

export default function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateEmail(formData.email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    const sanitizedData = {
      name: sanitizeInput(formData.name),
      email: sanitizeInput(formData.email),
      message: sanitizeInput(formData.message),
    };

    toast.success("Message sent! I'll get back to you soon.", {
      duration: 4000,
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-blue-950/20 to-black" />

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-600 mx-auto rounded-full" />
          <p className="text-gray-400 mt-6 text-lg max-w-2xl mx-auto">
            Let's build something amazing together
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl font-bold mb-6">Let's Connect</h3>
              <p className="text-gray-400 text-lg leading-relaxed">
                I'm currently open to remote opportunities worldwide and always
                interested in hearing about new projects and collaborations.
                Whether you have a question or just want to say hi, feel free
                to reach out!
              </p>
            </div>

            <div className="space-y-4">
              <motion.a
                href="mailto:contact@example.com"
                whileHover={{ x: 10 }}
                className="flex items-center gap-4 p-4 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-all group"
              >
                <div className="p-3 bg-blue-500/20 rounded-lg group-hover:bg-blue-500/30 transition-all">
                  <Mail className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <p className="font-semibold">Email</p>
                  <p className="text-sm text-gray-400">Available on GitHub</p>
                </div>
              </motion.a>

              <motion.a
                href="https://www.linkedin.com/in/wahi-ur-rehman/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 10 }}
                className="flex items-center gap-4 p-4 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-all group"
              >
                <div className="p-3 bg-blue-500/20 rounded-lg group-hover:bg-blue-500/30 transition-all">
                  <Linkedin className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <p className="font-semibold">LinkedIn</p>
                  <p className="text-sm text-gray-400">Let's connect professionally</p>
                </div>
              </motion.a>

              <motion.a
                href="https://github.com/Wahi-ur-rehman"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 10 }}
                className="flex items-center gap-4 p-4 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-all group"
              >
                <div className="p-3 bg-purple-500/20 rounded-lg group-hover:bg-purple-500/30 transition-all">
                  <Github className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <p className="font-semibold">GitHub</p>
                  <p className="text-sm text-gray-400">Check out my code</p>
                </div>
              </motion.a>

              <motion.div
                whileHover={{ x: 10 }}
                className="flex items-center gap-4 p-4 bg-white/5 border border-white/10 rounded-xl"
              >
                <div className="p-3 bg-green-500/20 rounded-lg">
                  <MapPin className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <p className="font-semibold">Location</p>
                  <p className="text-sm text-gray-400">Rawalpindi, Pakistan</p>
                </div>
              </motion.div>
            </div>

            <div className="pt-6">
              <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://ai-portfolio-seven-liart.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 rounded-lg transition-all shadow-lg hover:shadow-xl"
                >
                  <Code2 className="w-4 h-4" />
                  <span>3D Portfolio</span>
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity" />

              <form
                onSubmit={handleSubmit}
                className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 space-y-6"
              >
                <h3 className="text-2xl font-bold mb-6">Send a Message</h3>

                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-white placeholder-gray-500"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-white placeholder-gray-500"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-white placeholder-gray-500 resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-6 py-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 group"
                >
                  <span>Send Message</span>
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
