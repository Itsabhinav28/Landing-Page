import { motion, type Variants } from "framer-motion";
import { Eye, Headphones, Vibrate, ShieldAlert, Hand, Sparkles, Cpu, Box } from "lucide-react";
import smartGlassesImage from "@/assets/smart-glasses.jpg";

const features = [
  {
    icon: Eye,
    title: "Obstacle Detection",
    description: "Real-time detection of obstacles and hazards in your path",
    color: "primary",
  },
  {
    icon: Headphones,
    title: "Bone-Conduction Audio",
    description: "Clear audio guidance without blocking ambient sounds",
    color: "accent",
  },
  {
    icon: Vibrate,
    title: "Vibration Alerts",
    description: "Haptic feedback for turns and warnings",
    color: "sage",
  },
  {
    icon: ShieldAlert,
    title: "Fall Detection",
    description: "Automatic detection with emergency alerts",
    color: "warning",
  },
  {
    icon: Hand,
    title: "Gesture Input",
    description: "Simple hand gestures for control",
    color: "primary",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5 },
  },
};

const GlassesSection = () => {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-b from-secondary to-background overflow-hidden relative">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -right-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -left-32 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left - Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            <motion.span
              variants={itemVariants}
              className="inline-flex items-center gap-2 text-primary font-semibold text-sm uppercase tracking-wider mb-4 bg-primary/10 px-3 py-1 rounded-full"
            >
              <Sparkles className="w-4 h-4" />
              Smart Hardware
            </motion.span>
            
            <motion.h2
              variants={itemVariants}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6"
            >
              Smart Glasses{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-sage">
                Companion
              </span>
            </motion.h2>
            
            <motion.p
              variants={itemVariants}
              className="text-lg text-muted-foreground mb-8 leading-relaxed"
            >
              Hands-free navigation and obstacle detection with our lightweight,
              accessible smart glasses designed for everyday use. Experience
              independence like never before.
            </motion.p>

            <motion.div variants={containerVariants} className="space-y-3 lg:mt-4">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02, x: 8 }}
                  className="flex items-start gap-4 bg-card/80 backdrop-blur-sm rounded-xl p-4 shadow-soft border border-border/50 hover:border-primary/30 hover:shadow-md transition-all duration-300 cursor-default"
                >
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">
                      {feature.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right - Multi-Image Visual Layout */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative flex items-start justify-center lg:pt-0"
          >
            <div className="relative w-full max-w-2xl pb-32 lg:pb-40">
              {/* Animated glow rings */}
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 bg-gradient-to-r from-primary/30 via-sage/20 to-accent/30 rounded-full blur-3xl scale-150"
              />
              <motion.div
                animate={{
                  scale: [1.1, 1, 1.1],
                  opacity: [0.2, 0.4, 0.2],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
                className="absolute inset-0 bg-gradient-to-l from-primary/20 to-accent/20 rounded-full blur-2xl scale-125"
              />

              {/* Secondary Image 1 - 3D Model (Bottom Left) */}
              {false && (
                <motion.div
                  initial={{ opacity: 0, x: -40, y: 40 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  viewport={{ once: true }}
                  animate={{ 
                    y: [0, -8, 0],
                    rotate: [0, 1, 0]
                  }}
                  transition={{
                    default: { duration: 0.6, delay: 0.2 },
                    y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 },
                    rotate: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }
                  }}
                  whileHover={{ scale: 1.08, zIndex: 10, rotate: 2 }}
                  className="absolute top-full mt-8 -left-20 lg:mt-12 lg:-left-24 w-36 h-36 lg:w-44 lg:h-44 z-20"
                >
                  <div className="relative w-full h-full bg-gradient-to-br from-card/95 to-secondary/95 backdrop-blur-md rounded-2xl p-3 shadow-elevated border border-border/60 hover:border-primary/50 transition-all duration-300">
                    <div className="w-full h-full bg-gradient-to-br from-sage-light/60 to-cream/60 rounded-xl flex items-center justify-center overflow-hidden">
                      <div className="relative w-full h-full flex items-center justify-center">
                        <Box className="w-14 h-14 lg:w-18 lg:h-18 text-primary/70" />
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent" />
                      </div>
                    </div>
                    <div className="absolute -bottom-2 -right-2 bg-primary/25 backdrop-blur-sm rounded-lg px-2 py-1 border border-primary/40 shadow-sm">
                      <span className="text-[10px] lg:text-xs font-medium text-primary">3D Model</span>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Secondary Image 2 - 3D Model (Bottom Right) */}
              {false && (
                <motion.div
                  initial={{ opacity: 0, x: 40, y: 40 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  viewport={{ once: true }}
                  animate={{ 
                    y: [0, -8, 0],
                    rotate: [0, -1, 0]
                  }}
                  transition={{
                    default: { duration: 0.6, delay: 0.3 },
                    y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1.2 },
                    rotate: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1.2 }
                  }}
                  whileHover={{ scale: 1.08, zIndex: 10, rotate: -2 }}
                  className="absolute top-full mt-8 -right-20 lg:mt-12 lg:-right-24 w-36 h-36 lg:w-44 lg:h-44 z-20"
                >
                  <div className="relative w-full h-full bg-gradient-to-br from-card/95 to-secondary/95 backdrop-blur-md rounded-2xl p-3 shadow-elevated border border-border/60 hover:border-primary/50 transition-all duration-300">
                    <div className="w-full h-full bg-gradient-to-br from-sage-light/60 to-cream/60 rounded-xl flex items-center justify-center overflow-hidden">
                      <div className="relative w-full h-full flex items-center justify-center">
                        <Box className="w-14 h-14 lg:w-18 lg:h-18 text-primary/70" />
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent" />
                      </div>
                    </div>
                    <div className="absolute -bottom-2 -right-2 bg-primary/25 backdrop-blur-sm rounded-lg px-2 py-1 border border-primary/40 shadow-sm">
                      <span className="text-[10px] lg:text-xs font-medium text-primary">3D Model</span>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Primary - Main glasses image (Center) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="relative bg-gradient-to-br from-card via-card to-secondary rounded-3xl p-8 shadow-elevated border border-border/50 backdrop-blur-sm z-30"
              >
                <img
                  src={smartGlassesImage}
                  alt="AccessWay Smart Glasses"
                  className="w-full max-w-md mx-auto drop-shadow-2xl"
                />

                {/* Floating feature badges */}
                <motion.div
                  animate={{ y: [-5, 5, -5] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-4 -left-4 bg-card rounded-xl px-4 py-2 shadow-lg border border-border/50"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-sm font-medium text-foreground">AI Active</span>
                  </div>
                </motion.div>

                <motion.div
                  animate={{ y: [5, -5, 5] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-2 -right-4 bg-card rounded-xl px-4 py-2 shadow-lg border border-border/50"
                >
                  <div className="flex items-center gap-2">
                    <Eye className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium text-foreground">360° Vision</span>
                  </div>
                </motion.div>

                <motion.div
                  animate={{ y: [-3, 3, -3] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-card rounded-xl px-4 py-2 shadow-lg border border-border/50"
                >
                  <div className="flex items-center gap-2">
                    <Vibrate className="w-4 h-4 text-accent-foreground" />
                    <span className="text-sm font-medium text-foreground">Haptic Feedback</span>
                  </div>
                </motion.div>

                {/* Specs bar */}
                <div className="mt-6 flex items-center justify-center gap-6 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <span className="font-semibold text-foreground">32g</span> Weight
                  </span>
                  <span className="w-px h-4 bg-border" />
                  <span className="flex items-center gap-1">
                    <span className="font-semibold text-foreground">12h</span> Battery
                  </span>
                  <span className="w-px h-4 bg-border" />
                  <span className="flex items-center gap-1">
                    <span className="font-semibold text-foreground">IP54</span> Rated
                  </span>
                </div>
              </motion.div>

              {/* Secondary Image 3 - Internal Circuit (Bottom Center, Below Specs) */}
              {false && (
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  animate={{ 
                    y: [0, -6, 0]
                  }}
                  transition={{
                    default: { duration: 0.6, delay: 0.4 },
                    y: { duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1.4 }
                  }}
                  whileHover={{ scale: 1.08, zIndex: 10 }}
                  className="absolute top-full mt-8 left-1/2 -translate-x-1/2 lg:mt-12 w-44 h-36 lg:w-52 lg:h-40 z-20"
                >
                  <div className="relative w-full h-full bg-gradient-to-br from-card/95 to-secondary/95 backdrop-blur-md rounded-2xl p-3 shadow-elevated border border-border/60 hover:border-primary/50 transition-all duration-300">
                    <div className="w-full h-full bg-gradient-to-br from-sage-light/60 to-cream/60 rounded-xl flex items-center justify-center overflow-hidden">
                      <div className="relative w-full h-full flex items-center justify-center">
                        <Cpu className="w-14 h-14 lg:w-18 lg:h-18 text-primary/70" />
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent" />
                        <div className="absolute inset-0 opacity-25">
                          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                            <path d="M20,50 L40,50 M60,50 L80,50 M50,20 L50,40 M50,60 L50,80" stroke="currentColor" strokeWidth="1.5" fill="none" className="text-primary" />
                            <circle cx="50" cy="50" r="4" fill="currentColor" className="text-primary" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-primary/25 backdrop-blur-sm rounded-lg px-2 py-1 border border-primary/40 shadow-sm">
                      <span className="text-[10px] lg:text-xs font-medium text-primary">Circuit Board</span>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GlassesSection;
