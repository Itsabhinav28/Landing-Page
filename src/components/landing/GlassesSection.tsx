import React, { useState } from "react";
import { motion, type Variants, AnimatePresence } from "framer-motion";
import { Eye, Headphones, Vibrate, ShieldAlert, Hand, Sparkles, Cpu, Box, Camera, Radio, Battery, Wifi, Layers, Info, RotateCw, Package, ChevronDown, Smartphone, WifiOff, Sliders, Navigation } from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import smartGlassesImage from "@/assets/smart-glasses.jpg";
import model1Image from "@/assets/3D mod 1.png";
import model2Image from "@/assets/3D mod 2.png";
import circuitImage from "@/assets/image.png";
// Hardware component images
import esp32s3Image from "@/assets/Hardware/ESP32s3 n16r8.png";
import esp32camImage from "@/assets/Hardware/ESP 32 CAM + ESP CAM MB.png";
import ov7670Image from "@/assets/Hardware/v07670.png";
import max98357aImage from "@/assets/Hardware/MAX98357A.png";
import speakerImage from "@/assets/Hardware/Speaker.png";
import speakerModuleImage from "@/assets/Hardware/Speaker Module.png";
import vibrationMotorImage from "@/assets/Hardware/INMP441.png";
import powerBankImage from "@/assets/Hardware/Power Bank.png";
import oledImage from "@/assets/Hardware/.96 oled.png";

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
  {
    icon: Smartphone,
    title: "Smart Glasses–App Sync",
    description: "Real-time synchronization with the AccessWay mobile app for navigation, alerts, and updates",
    color: "primary",
  },
  {
    icon: WifiOff,
    title: "Offline Safety Mode",
    description: "Core obstacle detection and alerts continue to work even without internet connectivity",
    color: "sage",
  },
  {
    icon: Sliders,
    title: "Adaptive Navigation Feedback",
    description: "Automatically adjusts audio and haptic intensity based on environment and user preferences",
    color: "accent",
  },
  {
    icon: Navigation,
    title: "Indoor–Outdoor Seamless Transition",
    description: "Smooth switching between indoor positioning and outdoor GPS-based navigation",
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

// Hardware Module Component - Expandable Card
const HardwareModule = ({ icon: Icon, title, subtitle, description, color = "primary" }: {
  icon: React.ElementType;
  title: string;
  subtitle: string;
  description: string;
  color?: "primary" | "accent" | "sage";
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const colorClasses = {
    primary: "bg-primary/10 text-primary border-primary/20",
    accent: "bg-accent/10 text-accent-foreground border-accent/20",
    sage: "bg-sage-light/30 text-sage-dark border-sage/20"
  };

  return (
    <motion.div
      className={`relative bg-card/80 backdrop-blur-sm rounded-xl border ${colorClasses[color]} hover:shadow-md transition-all duration-300 cursor-pointer overflow-hidden`}
      initial={false}
      animate={{ scale: isExpanded ? 1.02 : 1 }}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      {/* Main Content */}
      <div className="flex items-start gap-3 p-4">
        <div className={`p-2 rounded-lg ${colorClasses[color]} flex-shrink-0`}>
          <Icon className="w-5 h-5" />
        </div>
        <div className="flex-1 min-w-0">
          <h4 className="text-sm font-semibold text-foreground">{title}</h4>
          <p className="text-xs text-muted-foreground font-medium">{subtitle}</p>
        </div>
        <motion.div
          animate={{ rotate: isExpanded ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex-shrink-0 p-1 rounded-full hover:bg-primary/10 transition-colors"
        >
          <ChevronDown className="w-4 h-4 text-primary" />
        </motion.div>
      </div>

      {/* Expandable Details Section */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-4 pb-4 pt-0 border-t border-border/30 mt-2">
              <motion.p
                initial={{ y: -10 }}
                animate={{ y: 0 }}
                exit={{ y: -10 }}
                transition={{ delay: 0.1 }}
                className="text-sm text-muted-foreground leading-relaxed pt-3"
              >
                {description}
              </motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

// Sensor Module Component
const SensorModule = ({ icon: Icon, title, description }: {
  icon: React.ElementType;
  title: string;
  description: string;
}) => {
  return (
    <motion.div
      className="flex items-start gap-4 bg-card/60 backdrop-blur-sm rounded-xl p-4 border border-border/50 hover:border-primary/30 hover:shadow-sm transition-all duration-300"
      whileHover={{ x: 4 }}
    >
      <div className="p-2 rounded-lg bg-primary/10 text-primary">
        <Icon className="w-5 h-5" />
      </div>
      <div className="flex-1">
        <h4 className="text-sm font-semibold text-foreground mb-1">{title}</h4>
        <p className="text-xs text-muted-foreground">{description}</p>
      </div>
    </motion.div>
  );
};

// Component Scrollable Row Component
const ComponentScrollableRow = ({ components }: {
  components: Array<{
    name: string;
    label: string;
    image: string;
    connection: string;
    purpose: string;
    quantity?: number;
  }>;
}) => {
  const cardCount = components.length;
  
  // Determine grid columns based on component count
  const getGridCols = () => {
    if (cardCount === 1) return 'grid-cols-1';
    if (cardCount === 2) return 'grid-cols-2';
    if (cardCount === 3) return 'grid-cols-3';
    return 'grid-cols-2 sm:grid-cols-4';
  };
  
  return (
    <div className="relative w-full overflow-visible">
      <div className={`grid ${getGridCols()} gap-4 w-full overflow-visible`}>
        {components.map((component, index) => (
          <ComponentCard key={index} {...component} index={index} total={cardCount} />
        ))}
      </div>
    </div>
  );
};

// Component Card Component - Expandable Card
const ComponentCard = ({ name, label, image, connection, purpose, quantity, index, total }: {
  name: string;
  label: string;
  image: string;
  connection: string;
  purpose: string;
  quantity?: number;
  index?: number;
  total?: number;
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      className="relative bg-card/90 backdrop-blur-sm rounded-xl border border-border/50 hover:border-primary/30 hover:shadow-md transition-all duration-300 cursor-pointer overflow-hidden"
      initial={false}
      animate={{ scale: isExpanded ? 1.02 : 1 }}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      {/* Quantity Badge */}
      {quantity && quantity > 1 && (
        <div className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs font-semibold px-2 py-1 rounded-full shadow-md z-10">
          ×{quantity}
        </div>
      )}
      
      {/* Component Image */}
      <div className="relative w-full h-32 bg-gradient-to-br from-secondary/30 to-background rounded-lg mb-2 flex items-center justify-center overflow-hidden">
        <img 
          src={image} 
          alt={name}
          className="w-full h-full object-contain p-2"
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-transparent rounded-lg pointer-events-none" />
      </div>
      
      {/* Component Info */}
      <div className="px-3 pb-3 space-y-1">
        <div className="flex items-start justify-between gap-2">
          <div className="flex-1 min-w-0">
            <h5 className="text-xs sm:text-sm font-semibold text-foreground leading-tight">{name}</h5>
            <p className="text-[10px] sm:text-xs text-muted-foreground font-medium">{label}</p>
          </div>
          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className="flex-shrink-0 p-1 rounded-full hover:bg-primary/10 transition-colors"
          >
            <ChevronDown className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
          </motion.div>
        </div>
        <p className="text-[10px] sm:text-xs text-muted-foreground/80 flex items-center gap-1">
          <span className="w-1 h-1 rounded-full bg-primary/40" />
          {connection}
        </p>
      </div>

      {/* Expandable Details Section */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden border-t border-border/30"
          >
            <div className="px-3 pb-3 pt-3 space-y-2">
              <motion.div
                initial={{ y: -10 }}
                animate={{ y: 0 }}
                exit={{ y: -10 }}
                transition={{ delay: 0.1 }}
                className="space-y-1"
              >
                <p className="text-xs font-semibold text-foreground">Purpose</p>
                <p className="text-[11px] sm:text-xs text-muted-foreground leading-relaxed">
                  {purpose}
                </p>
              </motion.div>
              <motion.div
                initial={{ y: -10 }}
                animate={{ y: 0 }}
                exit={{ y: -10 }}
                transition={{ delay: 0.15 }}
                className="space-y-1"
              >
                <p className="text-xs font-semibold text-foreground">Connection</p>
                <p className="text-[11px] sm:text-xs text-muted-foreground">
                  {connection}
                </p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const GlassesSection = () => {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-b from-secondary to-background relative">
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
            <div className="relative w-full max-w-2xl">
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

              {/* Hardware Architecture Section - Below Main Glasses */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mt-8 w-full z-20"
              >
                <div className="bg-card/90 backdrop-blur-sm rounded-2xl p-6 shadow-elevated border border-border/50">
                  <div className="flex items-center gap-2 mb-2">
                    <Layers className="w-5 h-5 text-primary" />
                    <h3 className="text-lg font-semibold text-foreground">Hardware Architecture</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    Our hardware architecture is modular, enabling component upgrades without redesigning the entire system.
                  </p>
                  
                  <Tabs defaultValue="design" className="w-full">
                    <TabsList className="grid w-full grid-cols-4 bg-muted/50 mb-4">
                      <TabsTrigger value="design" className="text-xs sm:text-sm">Design</TabsTrigger>
                      <TabsTrigger value="electronics" className="text-xs sm:text-sm">Electronics</TabsTrigger>
                      <TabsTrigger value="sensors" className="text-xs sm:text-sm">Sensors</TabsTrigger>
                      <TabsTrigger value="components" className="text-xs sm:text-sm">Components</TabsTrigger>
                    </TabsList>
                    
                    {/* Design Tab - 3D Model */}
                    <TabsContent value="design" className="mt-0">
                      <div className="relative bg-gradient-to-br from-secondary/50 to-background rounded-xl p-4 min-h-[400px] flex flex-col items-center justify-center">
                        <div className="text-center space-y-4 relative z-10 w-full">
                          <motion.div
                            className="relative inline-block"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.3 }}
                          >
                            <motion.div
                animate={{ 
                                rotateY: [0, 360]
                }}
                transition={{
                                rotateY: { duration: 20, repeat: Infinity, ease: "linear" }
                              }}
                              style={{ transformStyle: "preserve-3d" }}
                              className="inline-block"
                            >
                              <div className="relative w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] lg:w-[380px] lg:h-[380px] bg-gradient-to-br from-card to-secondary rounded-2xl p-2 shadow-elevated border border-primary/20 overflow-hidden">
                                <img 
                                  src={model1Image} 
                                  alt="Smart Glasses 3D Model 1" 
                                  className="w-full h-full object-contain scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-transparent rounded-2xl pointer-events-none" />
                              </div>
                            </motion.div>
                          </motion.div>
                          <div className="mt-4">
                            <p className="text-sm font-medium text-foreground mb-1 flex items-center justify-center gap-2">
                              Smart Glasses – Physical Design
                              <RotateCw className="w-3 h-3 text-muted-foreground animate-spin" />
                            </p>
                            <p className="text-xs text-muted-foreground">3D model preview with auto-rotate</p>
                          </div>
                        </div>
                        {/* Subtle background pattern */}
                        <div className="absolute inset-0 opacity-5 pointer-events-none">
                          <div className="absolute inset-0" style={{
                            backgroundImage: `radial-gradient(circle at 2px 2px, hsl(var(--primary)) 1px, transparent 0)`,
                            backgroundSize: '24px 24px'
                          }} />
                        </div>
                      </div>
                    </TabsContent>
                    
                    {/* Electronics Tab - Circuit Architecture */}
                    <TabsContent value="electronics" className="mt-0 overflow-visible">
                      <div className="relative bg-gradient-to-br from-secondary/50 to-background rounded-xl p-6 min-h-[400px] overflow-visible">
                        {/* Circuit Diagram Image */}
                        <div className="mb-4 rounded-lg overflow-hidden bg-card/50 p-4">
                          <img 
                            src={circuitImage} 
                            alt="Embedded System Architecture" 
                            className="w-full h-auto max-h-[200px] object-contain mx-auto"
                          />
                          <p className="text-xs text-muted-foreground text-center mt-2 italic">
                            Diagram represents the current prototype integration used for smart glasses testing.
                          </p>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4 relative z-10 overflow-visible">
                          {/* Microcontroller */}
                          <div className="relative z-0 group overflow-visible">
                            <HardwareModule
                              icon={Cpu}
                              title="Microcontroller Unit"
                              subtitle="ESP32-S3"
                              description="Main processing unit handling all computations and system control"
                              color="primary"
                            />
                          </div>
                          
                          {/* Vision Module */}
                          <div className="relative z-0 group overflow-visible">
                            <HardwareModule
                              icon={Camera}
                              title="Vision Module"
                              subtitle="Camera"
                              description="Real-time obstacle detection and environment analysis"
                              color="primary"
                            />
                          </div>
                          
                          {/* Audio Output */}
                          <div className="relative z-0 group overflow-visible">
                            <HardwareModule
                              icon={Headphones}
                              title="Audio Output"
                              subtitle="Bone-Conduction"
                              description="Clear audio guidance without blocking ambient sounds"
                              color="accent"
                            />
                          </div>
                          
                          {/* Power Management */}
                          <div className="relative z-0 group overflow-visible">
                            <HardwareModule
                              icon={Battery}
                              title="Power Management"
                              subtitle="Battery"
                              description="12h battery life with efficient power management"
                              color="sage"
                            />
                          </div>
                        </div>
                        
                        <div className="mt-4 text-center">
                          <p className="text-xs font-medium text-foreground">Embedded System Architecture</p>
                          <p className="text-xs text-muted-foreground mt-1">All modules connected via I2C & SPI buses</p>
                        </div>
                      </div>
                    </TabsContent>
                    
                    {/* Sensors Tab */}
                    <TabsContent value="sensors" className="mt-0">
                      <div className="relative bg-gradient-to-br from-secondary/50 to-background rounded-xl p-6 min-h-[280px]">
                        <div className="space-y-3">
                          <SensorModule
                            icon={Eye}
                            title="Inertial Measurement Unit (IMU)"
                            description="Accelerometer, gyroscope, and magnetometer for motion tracking"
                          />
                          <SensorModule
                            icon={Vibrate}
                            title="Haptic Feedback Module"
                            description="Vibration alerts for navigation cues"
                          />
                          <SensorModule
                            icon={Radio}
                            title="Wireless Connectivity"
                            description="BLE & Wi-Fi for real-time data sync"
                          />
                    </div>
                  </div>
                    </TabsContent>
                    
                    {/* Components Tab */}
                    <TabsContent value="components" className="mt-0" style={{ overflow: 'visible' }}>
                      <div className="relative bg-gradient-to-br from-secondary/50 to-background rounded-xl p-4 sm:p-6 min-h-[400px] max-h-[600px] overflow-y-auto scrollbar-hide" style={{ overflowX: 'visible' }}>
                        <Accordion type="single" collapsible className="w-full space-y-2 overflow-visible" defaultValue="compute" style={{ overflow: 'visible' }}>
                          {/* Compute Section */}
                          <AccordionItem value="compute" className="border border-border/50 rounded-lg px-4 bg-card/50 overflow-visible" style={{ overflow: 'visible' }}>
                            <AccordionTrigger className="hover:no-underline py-4">
                              <div className="flex items-center gap-3">
                                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                                  <Cpu className="w-4 h-4" />
                                </div>
                                <div className="text-left">
                                  <h4 className="text-sm font-semibold text-foreground">Compute</h4>
                                  <p className="text-xs text-muted-foreground">2 components</p>
                                </div>
                              </div>
                            </AccordionTrigger>
                            <AccordionContent className="pb-4 !overflow-visible" style={{ overflow: 'visible !important' }}>
                              <ComponentScrollableRow components={[
                                {
                                  name: "ESP32-S3",
                                  label: "N16R8",
                                  image: esp32s3Image,
                                  connection: "GPIO, I2C, SPI",
                                  purpose: "Main microcontroller unit — low-power processing with edge AI support"
                                },
                                {
                                  name: "ESP32-CAM",
                                  label: "ESP-CAM-MB",
                                  image: esp32camImage,
                                  connection: "GPIO, I2C",
                                  purpose: "Camera processing board — lightweight vision sensing for real-time detection"
                                }
                              ]} />
                            </AccordionContent>
                          </AccordionItem>
                          
                          {/* Vision Section */}
                          <AccordionItem value="vision" className="border border-border/50 rounded-lg px-4 bg-card/50 overflow-visible" style={{ overflow: 'visible' }}>
                            <AccordionTrigger className="hover:no-underline py-4">
                              <div className="flex items-center gap-3">
                                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                                  <Camera className="w-4 h-4" />
                                </div>
                                <div className="text-left">
                                  <h4 className="text-sm font-semibold text-foreground">Vision</h4>
                                  <p className="text-xs text-muted-foreground">1 component</p>
                                </div>
                              </div>
                            </AccordionTrigger>
                            <AccordionContent className="pb-4 !overflow-visible" style={{ overflow: 'visible !important' }}>
                              <ComponentScrollableRow components={[
                                {
                                  name: "OV7670",
                                  label: "Camera Module",
                                  image: ov7670Image,
                                  connection: "I2C, GPIO",
                                  purpose: "Real-time vision capture — lightweight vision sensing for real-time detection"
                                }
                              ]} />
                            </AccordionContent>
                          </AccordionItem>
                          
                          {/* Audio Section */}
                          <AccordionItem value="audio" className="border border-border/50 rounded-lg px-4 bg-card/50 overflow-visible" style={{ overflow: 'visible' }}>
                            <AccordionTrigger className="hover:no-underline py-4">
                              <div className="flex items-center gap-3">
                                <div className="p-2 rounded-lg bg-accent/10 text-accent-foreground">
                                  <Headphones className="w-4 h-4" />
                                </div>
                                <div className="text-left">
                                  <h4 className="text-sm font-semibold text-foreground">Audio</h4>
                                  <p className="text-xs text-muted-foreground">2 components</p>
                                </div>
                              </div>
                            </AccordionTrigger>
                            <AccordionContent className="pb-4 !overflow-visible" style={{ overflow: 'visible !important' }}>
                              <ComponentScrollableRow components={[
                                {
                                  name: "MAX98357A",
                                  label: "Audio Amplifier",
                                  image: max98357aImage,
                                  connection: "I2S",
                                  purpose: "Audio signal amplification — efficient digital audio output for bone-conduction",
                                  quantity: 2
                                },
                                {
                                  name: "Speaker",
                                  label: "Bone-Conduction Driver",
                                  image: speakerImage,
                                  connection: "Analog",
                                  purpose: "Audio output — bone-conduction driver for hands-free guidance"
                                }
                              ]} />
                            </AccordionContent>
                          </AccordionItem>
                          
                          {/* Feedback Section */}
                          <AccordionItem value="feedback" className="border border-border/50 rounded-lg px-4 bg-card/50 overflow-visible" style={{ overflow: 'visible' }}>
                            <AccordionTrigger className="hover:no-underline py-4">
                              <div className="flex items-center gap-3">
                                <div className="p-2 rounded-lg bg-sage-light/30 text-sage-dark">
                                  <Vibrate className="w-4 h-4" />
                                </div>
                                <div className="text-left">
                                  <h4 className="text-sm font-semibold text-foreground">Feedback</h4>
                                  <p className="text-xs text-muted-foreground">1 component</p>
                                </div>
                              </div>
                            </AccordionTrigger>
                            <AccordionContent className="pb-4 !overflow-visible" style={{ overflow: 'visible !important' }}>
                              <ComponentScrollableRow components={[
                                {
                                  name: "Vibration Motor",
                                  label: "Haptic Module",
                                  image: speakerModuleImage,
                                  connection: "GPIO",
                                  purpose: "Tactile feedback and navigation alerts — haptic module for motion cues"
                                }
                              ]} />
                            </AccordionContent>
                          </AccordionItem>
                          
                          {/* Power & Display Section */}
                          <AccordionItem value="power" className="border border-border/50 rounded-lg px-4 bg-card/50 overflow-visible" style={{ overflow: 'visible' }}>
                            <AccordionTrigger className="hover:no-underline py-4">
                              <div className="flex items-center gap-3">
                                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                                  <Battery className="w-4 h-4" />
                                </div>
                                <div className="text-left">
                                  <h4 className="text-sm font-semibold text-foreground">Power & Display</h4>
                                  <p className="text-xs text-muted-foreground">2 components</p>
                                </div>
                              </div>
                            </AccordionTrigger>
                            <AccordionContent className="pb-4 !overflow-visible" style={{ overflow: 'visible !important' }}>
                              <ComponentScrollableRow components={[
                                {
                                  name: "Power Bank",
                                  label: "Battery Pack",
                                  image: powerBankImage,
                                  connection: "USB-C",
                                  purpose: "12h power supply — portable battery for extended use"
                                },
                                {
                                  name: "0.96\" OLED",
                                  label: "Display Module",
                                  image: oledImage,
                                  connection: "I2C",
                                  purpose: "Status display — system feedback and debugging interface",
                                  quantity: 2
                                }
                              ]} />
                            </AccordionContent>
                          </AccordionItem>
                        </Accordion>
                      </div>
                    </TabsContent>
                  </Tabs>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GlassesSection;
