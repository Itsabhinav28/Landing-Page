import { Eye, Brain, MapIcon, MessageSquare, Cpu } from "lucide-react";
import { motion } from "framer-motion";

const technologies = [
  {
    icon: Eye,
    name: "Azure AI Vision",
    description: "Obstacle & signage detection",
    gradient: "from-blue-500/20 to-blue-600/10",
    iconColor: "text-blue-600",
    borderColor: "border-blue-500/20",
    glowColor: "group-hover:shadow-blue-500/20",
  },
  {
    icon: Brain,
    name: "Azure Machine Learning",
    description: "Accessible route prediction",
    gradient: "from-purple-500/20 to-purple-600/10",
    iconColor: "text-purple-600",
    borderColor: "border-purple-500/20",
    glowColor: "group-hover:shadow-purple-500/20",
  },
  {
    icon: MapIcon,
    name: "Azure Maps",
    description: "Indoor & outdoor routing",
    gradient: "from-emerald-500/20 to-emerald-600/10",
    iconColor: "text-emerald-600",
    borderColor: "border-emerald-500/20",
    glowColor: "group-hover:shadow-emerald-500/20",
  },
  {
    icon: MessageSquare,
    name: "Cognitive Services",
    description: "Speech, TTS, alerts",
    gradient: "from-amber-500/20 to-amber-600/10",
    iconColor: "text-amber-600",
    borderColor: "border-amber-500/20",
    glowColor: "group-hover:shadow-amber-500/20",
  },
  {
    icon: Cpu,
    name: "Azure IoT",
    description: "Smart glasses integration",
    gradient: "from-rose-500/20 to-rose-600/10",
    iconColor: "text-rose-600",
    borderColor: "border-rose-500/20",
    glowColor: "group-hover:shadow-rose-500/20",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const TechSection = () => {
  return (
    <section id="technology" className="py-20 lg:py-32 bg-secondary relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
      
      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Tech Stack */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <motion.span 
              className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              Technology
            </motion.span>
            <motion.h2 
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Powered by <span className="text-primary bg-gradient-to-r from-primary to-emerald-600 bg-clip-text text-transparent">Microsoft AI</span>
            </motion.h2>
            <motion.p 
              className="text-lg text-muted-foreground mb-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Built using cutting-edge Microsoft Azure AI Services to deliver reliable, scalable, and intelligent accessibility solutions.
            </motion.p>

            {/* Tech Cards */}
            <motion.div 
              className="space-y-3"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              {technologies.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  variants={itemVariants}
                  className={`group flex items-center gap-4 bg-card rounded-2xl p-4 shadow-soft hover:shadow-elevated transition-all duration-500 border ${tech.borderColor} hover:border-primary/30 cursor-pointer ${tech.glowColor}`}
                  whileHover={{ 
                    x: 8,
                    transition: { duration: 0.2 }
                  }}
                >
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${tech.gradient} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                    <tech.icon className={`w-7 h-7 ${tech.iconColor}`} strokeWidth={1.5} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">{tech.name}</h4>
                    <p className="text-sm text-muted-foreground">{tech.description}</p>
                  </div>
                  <motion.div 
                    className="w-8 h-8 rounded-full bg-primary/5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                    initial={{ scale: 0 }}
                    whileHover={{ scale: 1.1 }}
                  >
                    <span className="text-primary text-lg">→</span>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right - Architecture Visual */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="bg-card rounded-3xl p-8 lg:p-12 shadow-elevated border border-border/50 relative overflow-hidden">
              {/* Background glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
              
              {/* Central Hub */}
              <div className="relative flex items-center justify-center h-[320px]">
                {/* Orbiting ring */}
                <motion.div 
                  className="absolute w-64 h-64 rounded-full border-2 border-dashed border-primary/20"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                />
                <motion.div 
                  className="absolute w-48 h-48 rounded-full border border-primary/10"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                />
                
                {/* Central AI Hub */}
                <motion.div 
                  className="relative z-10 w-32 h-32 rounded-full bg-gradient-to-br from-primary/30 via-primary/20 to-accent/20 flex items-center justify-center"
                  animate={{ 
                    boxShadow: [
                      "0 0 30px rgba(111, 175, 143, 0.2)",
                      "0 0 50px rgba(111, 175, 143, 0.4)",
                      "0 0 30px rgba(111, 175, 143, 0.2)"
                    ]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <div className="w-24 h-24 rounded-full bg-card shadow-card flex items-center justify-center border border-primary/20">
                    <span className="text-3xl font-bold bg-gradient-to-br from-primary to-emerald-600 bg-clip-text text-transparent">AI</span>
                  </div>
                </motion.div>

                {/* Orbiting icons */}
                {technologies.map((tech, index) => {
                  const angle = (index * 72 - 90) * (Math.PI / 180);
                  const radius = 130;
                  const x = Math.cos(angle) * radius;
                  const y = Math.sin(angle) * radius;
                  return (
                    <motion.div
                      key={tech.name}
                      className="absolute z-20"
                      style={{
                        left: "50%",
                        top: "50%",
                      }}
                      initial={{ x: x - 28, y: y - 28, scale: 0, opacity: 0 }}
                      whileInView={{ x: x - 28, y: y - 28, scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + index * 0.1, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <motion.div 
                        className={`w-14 h-14 rounded-2xl bg-card border ${tech.borderColor} flex items-center justify-center shadow-card`}
                        animate={{ 
                          y: [0, -6, 0],
                        }}
                        transition={{ 
                          duration: 3, 
                          repeat: Infinity, 
                          delay: index * 0.4,
                          ease: "easeInOut"
                        }}
                        whileHover={{ scale: 1.15 }}
                      >
                        <tech.icon className={`w-7 h-7 ${tech.iconColor}`} strokeWidth={1.5} />
                      </motion.div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Labels */}
              <motion.div 
                className="mt-8 text-center relative z-10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8, duration: 0.5 }}
              >
                <p className="text-sm text-muted-foreground mb-1">Built on</p>
                <p className="text-xl font-bold text-foreground">Microsoft Azure AI Services</p>
              </motion.div>
            </div>

            {/* Badge */}
            <motion.div 
              className="absolute -bottom-4 left-1/2 -translate-x-1/2"
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1, duration: 0.4 }}
            >
              <div className="bg-gradient-to-r from-primary to-emerald-600 text-primary-foreground px-6 py-2.5 rounded-full shadow-elevated font-semibold text-sm flex items-center gap-2">
                <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
                AI for Accessibility
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TechSection;
