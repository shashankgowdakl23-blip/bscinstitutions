"use client"

import React, { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { TrendingUp, BarChart3, PieChart, LineChart, DollarSign, Target, BookOpen, Award, CheckCircle, Play, Users, Clock, Star } from "lucide-react"
import { cn } from "@/lib/utils"
import { handleWhatsAppHowWeWork, handleCall } from "@/utils/contact"

interface Step {
  id: string
  title: string
  description: string
  icon: React.ReactNode
  details: string[]
  color: string
  gradient: string
}

interface HowItWorksProps {
  steps?: Step[]
  className?: string
  title?: string
  subtitle?: string
  autoPlayInterval?: number
}

const defaultSteps: Step[] = [
  {
    id: "step-1",
    title: "Learn Market Fundamentals",
    description: "Master the basics of financial market analysis, investment principles, and financial instruments.",
    icon: <BookOpen className="w-8 h-8" />,
    color: "from-blue-500 to-cyan-500",
    gradient: "bg-gradient-to-br from-blue-500/20 to-cyan-500/10",
    details: [
      "Technical analysis basics",
      "Fundamental analysis principles",
      "Risk management strategies",
      "Market psychology understanding"
    ]
  },
  {
    id: "step-2",
    title: "Practice with Simulations",
    description: "Apply your knowledge in risk-free virtual investment environments.",
    icon: <BarChart3 className="w-8 h-8" />,
    color: "from-green-500 to-emerald-500",
    gradient: "bg-gradient-to-br from-green-500/20 to-emerald-500/10",
    details: [
      "Virtual portfolio management",
      "Real-time market simulations",
      "Strategy backtesting tools",
      "Performance tracking"
    ]
  },
  {
    id: "step-3",
    title: "Analyze Market Trends",
    description: "Develop advanced analytical skills using professional-grade tools and real-world case studies.",
    icon: <TrendingUp className="w-8 h-8" />,
    color: "from-purple-500 to-pink-500",
    gradient: "bg-gradient-to-br from-purple-500/20 to-pink-500/10",
    details: [
      "Chart pattern recognition",
      "Technical indicator mastery",
      "Market sentiment analysis",
      "Economic data interpretation"
    ]
  },
  {
    id: "step-4",
    title: "Build Your Strategy",
    description: "Build personalized investment strategies based on your risk tolerance.",
    icon: <Target className="w-8 h-8" />,
    color: "from-orange-500 to-red-500",
    gradient: "bg-gradient-to-br from-orange-500/20 to-red-500/10",
    details: [
      "Custom strategy development",
      "Portfolio diversification",
      "Risk assessment tools",
      "Goal-based planning"
    ]
  }
]

const Counter = ({ end, duration = 2000, isVisible = false }: { end: number; duration?: number; isVisible?: boolean }) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isVisible) {
      setCount(0)
      return
    }

    setCount(0)

    let startTime: number
    let animationFrame: number

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)

      setCount(Math.floor(progress * end))

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationFrame)
  }, [end, duration, isVisible])

  return <span>{count}</span>
}

export function TradingAcademyHowItWorks({
  steps = defaultSteps,
  className,
  title = "How Our Financial Academy Works",
  subtitle = "Master the markets through our proven 4-step learning methodology",
  autoPlayInterval = 6000
}: HowItWorksProps) {
  const [activeStep, setActiveStep] = useState(0)
  const [progress, setProgress] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)

  // Unified Intersection Observer with consistent threshold
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          setIsPlaying(true)
        }
      },
      {
        threshold: 0.2,
        rootMargin: '-10% 0px -10% 0px'
      }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  // Unified CTA observer with consistent threshold
  useEffect(() => {
    const ctaObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsPlaying(false)
        }
      },
      {
        threshold: 0.2,
        rootMargin: '-10% 0px -10% 0px'
      }
    )

    if (ctaRef.current) {
      ctaObserver.observe(ctaRef.current)
    }

    return () => ctaObserver.disconnect()
  }, [])

  // Auto-play timer
  useEffect(() => {
    if (!isPlaying) return

    const timer = setInterval(() => {
      if (progress < 100) {
        setProgress(prev => prev + 100 / (autoPlayInterval / 100))
      } else {
        setActiveStep(prev => (prev + 1) % steps.length)
        setProgress(0)
      }
    }, 100)

    return () => clearInterval(timer)
  }, [progress, steps.length, autoPlayInterval, isPlaying])

  const handleActionClick = () => {
    handleWhatsAppHowWeWork();
  }

  const stats = [
    { label: "Students Trained", value: 1000, icon: <Users className="w-6 h-6" />, color: "text-blue-500" },
    { label: "Success Rate", value: 95, suffix: "%", icon: <TrendingUp className="w-6 h-6" />, color: "text-green-500" },
    { label: "Course Modules", value: 50, icon: <BookOpen className="w-6 h-6" />, color: "text-purple-500" },
    { label: "Investment Strategies", value: 25, icon: <Target className="w-6 h-6" />, color: "text-orange-500" }
  ]

  return (
    <div ref={sectionRef} className={cn("py-12 lg:py-20 px-4 sm:px-6 bg-gradient-to-br from-background via-background to-primary/5", className)}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div 
          className="text-center mb-12 lg:mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
            <Target className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Step-by-Step Learning</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            {title}
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        </motion.div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12 lg:mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: index * 0.15, duration: 0.6, ease: "easeOut" }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="text-center p-4 lg:p-6 rounded-2xl bg-gradient-to-br from-card to-card/80 border border-border/50 shadow-lg hover:shadow-xl transition-all duration-300 backdrop-blur-sm"
            >
              <div className="flex justify-center mb-4">
                <div className={cn("p-3 rounded-xl", stat.color.replace('text-', 'bg-').replace('500', '500/10'))}>
                  <div className={stat.color}>
                    {stat.icon}
                  </div>
                </div>
              </div>
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
                <Counter end={stat.value} isVisible={isVisible} />
                {stat.suffix}
              </div>
              <div className="text-xs sm:text-sm font-medium text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-start">
          {/* Steps List */}
          <div className="space-y-4 lg:space-y-6">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                className={cn(
                  "group flex items-start gap-4 lg:gap-6 p-4 lg:p-8 rounded-2xl border-2 transition-all duration-500 cursor-pointer relative overflow-hidden",
                  index === activeStep
                    ? "bg-gradient-to-r from-primary/10 to-primary/5 border-primary shadow-2xl shadow-primary/20 scale-105"
                    : "bg-gradient-to-r from-card to-card/80 border-border/50 hover:border-primary/30 hover:shadow-xl hover:scale-[1.02]"
                )}
                onClick={() => {
                  setActiveStep(index)
                  setIsPlaying(false)
                }}
                initial={{ opacity: 0, x: -30, scale: 0.95 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ delay: index * 0.2, duration: 0.6, ease: "easeOut" }}
                whileHover={{ scale: index === activeStep ? 1.05 : 1.02 }}
              >
                <div className={cn(
                  "flex-shrink-0 w-16 h-16 lg:w-20 lg:h-20 rounded-2xl flex items-center justify-center border-2 transition-all duration-500 relative",
                  index === activeStep
                    ? "bg-gradient-to-br from-primary to-primary/80 border-primary text-primary-foreground shadow-lg shadow-primary/30"
                    : "bg-gradient-to-br from-background to-background/80 border-border/50 text-muted-foreground group-hover:border-primary/50"
                )}>
                  {index <= activeStep ? (
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ type: "spring", stiffness: 300, damping: 15 }}
                    >
                      {step.icon}
                    </motion.div>
                  ) : (
                    <motion.span
                      className="text-xl font-bold"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3 }}
                    >
                      {index + 1}
                    </motion.span>
                  )}
                </div>

                <div className="flex-1">
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2 lg:mb-3 text-foreground bg-gradient-to-r from-foreground to-primary bg-clip-text">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 lg:mb-6 leading-relaxed text-sm sm:text-base lg:text-lg">
                    {step.description}
                  </p>

                  {index === activeStep && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="space-y-3"
                    >
                      {step.details.map((detail, detailIndex) => (
                        <motion.div
                          key={detailIndex}
                          initial={{ opacity: 0, x: -15 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: detailIndex * 0.15, duration: 0.4 }}
                          className="flex items-center gap-2 lg:gap-3 p-2 lg:p-3 bg-background/50 rounded-lg border border-border/30"
                        >
                          <CheckCircle className="w-3 h-3 lg:w-4 lg:h-4 text-green-500 flex-shrink-0" />
                          <span className="text-xs sm:text-sm font-medium text-foreground">{detail}</span>
                        </motion.div>
                      ))}
                    </motion.div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Enhanced Right Side Section - Adaptive Height */}
          <div className="relative lg:sticky lg:top-24">
            <div
              className={cn(
                "relative rounded-2xl lg:rounded-3xl p-4 sm:p-6 lg:p-10 border-2 shadow-2xl backdrop-blur-sm overflow-hidden",
                "min-h-[300px] max-h-[400px] sm:min-h-[350px] sm:max-h-[450px] lg:h-[600px]",
                steps[activeStep].gradient,
                "border-primary/20 shadow-primary/10 transition-all duration-300"
              )}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStep}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2, ease: "easeInOut" }}
                  className="h-full flex flex-col"
                >
                  {/* Header - Responsive */}
                  <div className="flex items-center gap-2 sm:gap-3 lg:gap-4 mb-3 sm:mb-4 lg:mb-6 flex-shrink-0">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                      <div className="scale-75 sm:scale-100">
                        {steps[activeStep].icon}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-sm sm:text-base lg:text-lg font-semibold text-foreground">
                        Step {activeStep + 1}
                      </h4>
                      <p className="text-xs sm:text-sm text-muted-foreground truncate">{steps[activeStep].title}</p>
                    </div>
                  </div>

                  {/* Step Content - Compact on Mobile */}
                  <div className="flex-1 flex flex-col justify-start lg:justify-center min-h-0 overflow-y-auto">
                    {activeStep === 0 && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="space-y-2 sm:space-y-3 lg:space-y-4"
                      >
                        <div className="flex justify-between items-center">
                          <span className="text-xs text-muted-foreground">Learning Progress</span>
                          <span className="text-sm sm:text-base font-bold text-blue-500">Module 1/4</span>
                        </div>

                        <div className="grid grid-cols-2 gap-2 sm:gap-3 lg:gap-4">
                          <motion.div
                            className="p-2 sm:p-3 lg:p-4 bg-background/50 rounded-lg text-center cursor-pointer hover:bg-background/70 transition-colors"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <BookOpen className="w-4 h-4 sm:w-6 sm:h-6 lg:w-8 lg:h-8 mx-auto mb-1 sm:mb-2 text-primary" />
                            <div className="text-xs text-muted-foreground">Theory</div>
                          </motion.div>
                          <motion.div
                            className="p-2 sm:p-3 lg:p-4 bg-background/50 rounded-lg text-center cursor-pointer hover:bg-background/70 transition-colors"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <Award className="w-4 h-4 sm:w-6 sm:h-6 lg:w-8 lg:h-8 mx-auto mb-1 sm:mb-2 text-yellow-500" />
                            <div className="text-xs text-muted-foreground">Certification</div>
                          </motion.div>
                        </div>

                        <div className="space-y-1 sm:space-y-2 lg:space-y-3">
                          {["Technical Analysis", "Risk Management", "Market Psychology"].map((topic, i) => (
                            <motion.div
                              key={topic}
                              className="flex items-center gap-2 p-2 sm:p-2 lg:p-3 bg-background/30 rounded-lg cursor-pointer hover:bg-background/50 transition-colors"
                              whileHover={{ x: 5 }}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: i * 0.2 }}
                            >
                              <motion.div
                                className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-green-500 flex-shrink-0"
                                animate={{ scale: [1, 1.2, 1] }}
                                transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
                              />
                              <span className="text-xs font-medium text-foreground truncate">{topic}</span>
                              <div className="ml-auto text-xs text-muted-foreground">
                                {i === 0 ? "100%" : i === 1 ? "85%" : "60%"}
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    )}

                    {activeStep === 1 && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="space-y-3 lg:space-y-4"
                      >
                        <div className="flex justify-between items-center">
                          <span className="text-xs sm:text-sm text-muted-foreground">Simulation Status</span>
                          <span className="text-base sm:text-lg font-bold text-green-500">Active</span>
                        </div>

                        <div className="grid grid-cols-3 gap-2 lg:gap-3">
                          <motion.div
                            className="p-2 lg:p-3 bg-background/50 rounded-lg text-center cursor-pointer hover:bg-background/70 transition-colors"
                            whileHover={{ scale: 1.05 }}
                          >
                            <DollarSign className="w-4 h-4 lg:w-6 lg:h-6 mx-auto mb-1 text-green-500" />
                            <div className="text-xs text-muted-foreground">Profit</div>
                          </motion.div>
                          <motion.div
                            className="p-2 lg:p-3 bg-background/50 rounded-lg text-center cursor-pointer hover:bg-background/70 transition-colors"
                            whileHover={{ scale: 1.05 }}
                          >
                            <BarChart3 className="w-4 h-4 lg:w-6 lg:h-6 mx-auto mb-1 text-blue-500" />
                            <div className="text-xs text-muted-foreground">Analytics</div>
                          </motion.div>
                          <motion.div
                            className="p-2 lg:p-3 bg-background/50 rounded-lg text-center cursor-pointer hover:bg-background/70 transition-colors"
                            whileHover={{ scale: 1.05 }}
                          >
                            <Clock className="w-4 h-4 lg:w-6 lg:h-6 mx-auto mb-1 text-orange-500" />
                            <div className="text-xs text-muted-foreground">Real-time</div>
                          </motion.div>
                        </div>

                        <div className="space-y-2 lg:space-y-3">
                          {[
                            { label: "Portfolio Value", value: "$105,450", change: "+5.45%" },
                            { label: "Active Trades", value: "12", change: "+2" },
                            { label: "Success Rate", value: "78%", change: "+12%" }
                          ].map((metric, i) => (
                            <motion.div
                              key={metric.label}
                              className="flex items-center justify-between p-2 lg:p-3 bg-background/30 rounded-lg"
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: i * 0.15 }}
                            >
                              <span className="text-xs sm:text-sm font-medium text-foreground">{metric.label}</span>
                              <div className="flex items-center gap-2">
                                <span className="text-xs sm:text-sm font-bold text-foreground">{metric.value}</span>
                                <span className="text-xs text-green-500">{metric.change}</span>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    )}

                    {activeStep === 2 && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="space-y-3 lg:space-y-4"
                      >
                        <div className="flex justify-between items-center">
                          <span className="text-xs sm:text-sm text-muted-foreground">Market Analysis</span>
                          <span className="text-base sm:text-lg font-bold text-purple-500">Live</span>
                        </div>

                        <div className="grid grid-cols-2 gap-3 lg:gap-4">
                          <motion.div
                            className="p-3 lg:p-4 bg-background/50 rounded-lg text-center cursor-pointer hover:bg-background/70 transition-colors"
                            whileHover={{ scale: 1.05 }}
                          >
                            <LineChart className="w-6 h-6 lg:w-8 lg:h-8 mx-auto mb-2 text-purple-500" />
                            <div className="text-xs sm:text-sm text-muted-foreground">Trends</div>
                          </motion.div>
                          <motion.div
                            className="p-3 lg:p-4 bg-background/50 rounded-lg text-center cursor-pointer hover:bg-background/70 transition-colors"
                            whileHover={{ scale: 1.05 }}
                          >
                            <TrendingUp className="w-6 h-6 lg:w-8 lg:h-8 mx-auto mb-2 text-green-500" />
                            <div className="text-xs sm:text-sm text-muted-foreground">Signals</div>
                          </motion.div>
                        </div>

                        <div className="space-y-2 lg:space-y-3">
                          {[
                            { pattern: "Bull Flag", confidence: "85%" },
                            { pattern: "Support Level", confidence: "92%" },
                            { pattern: "Volume Spike", confidence: "78%" }
                          ].map((pattern, i) => (
                            <motion.div
                              key={pattern.pattern}
                              className="flex items-center justify-between p-2 lg:p-3 bg-background/30 rounded-lg cursor-pointer hover:bg-background/50 transition-colors"
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: i * 0.2 }}
                              whileHover={{ x: 5 }}
                            >
                              <span className="text-xs sm:text-sm font-medium text-foreground">{pattern.pattern}</span>
                              <span className="text-xs font-bold text-purple-500">{pattern.confidence}</span>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    )}

                    {activeStep === 3 && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="space-y-3 lg:space-y-4"
                      >
                        <div className="flex justify-between items-center">
                          <span className="text-xs sm:text-sm text-muted-foreground">Strategy Builder</span>
                          <span className="text-base sm:text-lg font-bold text-orange-500">Custom</span>
                        </div>

                        <div className="grid grid-cols-2 gap-3 lg:gap-4">
                          <motion.div
                            className="p-2 lg:p-3 bg-background/50 rounded-lg text-center cursor-pointer hover:bg-background/70 transition-colors"
                            whileHover={{ scale: 1.05 }}
                          >
                            <Target className="w-5 h-5 lg:w-6 lg:h-6 mx-auto mb-1 text-primary" />
                            <div className="text-xs sm:text-sm text-muted-foreground">Goal-Based</div>
                          </motion.div>
                          <motion.div
                            className="p-2 lg:p-3 bg-background/50 rounded-lg text-center cursor-pointer hover:bg-background/70 transition-colors"
                            whileHover={{ scale: 1.05 }}
                          >
                            <PieChart className="w-5 h-5 lg:w-6 lg:h-6 mx-auto mb-1 text-green-500" />
                            <div className="text-xs sm:text-sm text-muted-foreground">Diversified</div>
                          </motion.div>
                        </div>
                      </motion.div>
                    )}
                  </div>

                  {/* Progress Indicator - Compact on Mobile */}
                  <div className="mt-2 sm:mt-3 lg:mt-auto pt-2 sm:pt-3 lg:pt-4 flex-shrink-0">
                    <div className="flex justify-between items-center mb-1 sm:mb-2">
                      <span className="text-xs text-muted-foreground">Progress</span>
                      <span className="text-xs text-primary font-medium">
                        {Math.round(progress)}%
                      </span>
                    </div>
                    <div className="w-full bg-background/30 rounded-full h-1 overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-primary to-primary/80 rounded-full"
                        initial={{ width: "0%" }}
                        animate={{ width: `${progress}%` }}
                        transition={{ duration: 0.1, ease: "linear" }}
                      />
                    </div>

                    {/* Step Navigation */}
                    <div className="flex justify-center gap-1 sm:gap-1.5 lg:gap-2 mt-2 sm:mt-3 lg:mt-4">
                      {steps.map((_, index) => (
                        <motion.button
                          key={index}
                          className={cn(
                            "w-1.5 h-1.5 sm:w-2 sm:h-2 lg:w-3 lg:h-3 rounded-full transition-all duration-300",
                            index === activeStep
                              ? "bg-primary scale-125"
                              : "bg-background/50 hover:bg-background/70"
                          )}
                          onClick={() => {
                            setActiveStep(index)
                            setProgress(0)
                            setIsPlaying(false)
                          }}
                          whileHover={{ scale: 1.2 }}
                          whileTap={{ scale: 0.9 }}
                        />
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Enhanced Bottom CTA */}
        <motion.div
          ref={ctaRef}
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
          className="text-center mt-16 lg:mt-24"
        >
          <div className="bg-card border border-border rounded-2xl p-6 lg:p-8 max-w-2xl mx-auto shadow-lg">
            <div className="flex items-center justify-center gap-2 lg:gap-3 mb-4 lg:mb-6">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Award className="w-4 h-4 lg:w-5 lg:h-5 text-primary" />
              </div>
              <span className="text-xs sm:text-sm font-medium text-primary">
                Join 1000+ Students
              </span>
            </div>
            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-foreground mb-3 lg:mb-4">
              Ready to Master the Markets?
            </h3>
            <p className="text-sm sm:text-base lg:text-lg text-muted-foreground mb-4 lg:mb-6 max-w-xl mx-auto">
              Get access to our complete curriculum, trading simulator, and expert mentorship
            </p>
            <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 justify-center">
              <button
                onClick={handleActionClick}
                className="inline-flex items-center justify-center px-4 lg:px-6 py-2 lg:py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors text-sm lg:text-base"
              >
                <Target className="w-3 h-3 lg:w-4 lg:h-4 mr-2" />
                Start Learning
              </button>
              <button
                onClick={() => handleWhatsAppHowWeWork()}
                className="inline-flex items-center justify-center px-4 lg:px-6 py-2 lg:py-3 border border-border rounded-lg font-medium hover:bg-accent transition-colors text-sm lg:text-base"
              >
                <BookOpen className="w-3 h-3 lg:w-4 lg:h-4 mr-2" />
                View Curriculum
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default function HowItWorks() {
  return <TradingAcademyHowItWorks />
}