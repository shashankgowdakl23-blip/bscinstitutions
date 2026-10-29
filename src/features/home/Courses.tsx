import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Clock, Users, MessageCircle, Phone, ChevronDown } from "lucide-react";
import { scrollToContactForm, handleWhatsAppCourseDetails, handleCall } from "@/utils/contact";
import { motion, AnimatePresence } from "framer-motion";

const Courses = () => {
    const [showAll, setShowAll] = useState(false);

    const courses = [
        {
            title: "Basic Plan",
            price: "₹6,999",
            duration: "3 days workshop",
            sessionLength: "15 days practicals",
            description: "Ideal foundation for beginners starting their investment journey",
            features: [
                "Lifetime assistance",
                "Fundamental analysis",
                "Technical analysis",
                "Candlestick",
                "Basic scalping strategies",
                "Basic hedging strategies",
                "Best value for money",
                "Basics of future and options"
            ],
            popular: false
        },
        {
            title: "Cash Market",
            price: "₹19,999",
            duration: "Flexible",
            sessionLength: "Customized timing",
            description: "Master the cash market with advanced technicals and fundamentals",
            features: [
                "Customized timing",
                "Beginner revision",
                "Advance technicals",
                "Advance fundamentals",
                "Market analysis setups",
                "Complete equity market knowledge",
                "Highest success ratio",
                "Online and offline available"
            ],
            popular: true
        },
        {
            title: "Mentorship",
            price: "₹29,999",
            duration: "Flexible",
            sessionLength: "Time slab suitable for lifestyle",
            description: "Mentorship — Personalized coaching with small batch sizes and market analysis",
            features: [
                "Time slab suitable for your lifestyle",
                "Get personalized coach",
                "Small batch",
                "Previous course revision",
                "Advance fundamental",
                "Advance technical",
                "Market analysis with mentor",
                "Online and offline available",
                "Personalized software for market analysis",
                "Advance f & o"
            ],
            popular: false,
            bestValue: true
        },
        {
            title: "Premium Mentorship",
            price: "₹44,999",
            duration: "Extended",
            sessionLength: "Unlimited revisions",
            description: "Elite programme with capital management and live market support",
            features: [
                "Capital above 5 lakh",
                "All courses of BSC Institutions included",
                "Unlimited revisions",
                "Asset allocation",
                "Liability management",
                "Live market support",
                "Investment advisory"
            ],
            popular: false,
            bestValue: false
        }
    ];

    // Hick's Law: Show 3 courses initially to reduce decision paralysis
    const visibleCourses = showAll ? courses : courses.slice(0, 3);

    return (
        <section className="py-16 sm:py-24 bg-background">
            <div className="container mx-auto px-4">
                <div className="text-center mb-14 sm:mb-20">
                    <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-3 block">Programs</span>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-5">Our Course Offerings</h2>
                    <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
                        Choose the perfect course that fits your learning goals. All courses include flexible timing for working professionals.
                    </p>
                    {/* Miller's Law: Anchor with recommendation */}
                    <p className="text-sm text-primary font-medium mt-3">
                        💡 Most students start with the Cash Market course
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 max-w-6xl mx-auto">
                    <AnimatePresence mode="popLayout">
                        {visibleCourses.map((course, index) => (
                            <motion.div
                                key={course.title}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.3, delay: index * 0.1 }}
                            >
                                <Card
                                    className={`relative ${course.popular ? 'border-primary shadow-elegant ring-2 ring-primary/20 lg:scale-105' : 'border-border/60'} transition-all duration-500 hover:shadow-xl hover:-translate-y-1 flex flex-col rounded-2xl h-full`}
                                >
                                    {course.popular && (
                                        <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground z-10">
                                            Most Popular
                                        </Badge>
                                    )}
                                    {course.bestValue && (
                                        <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-success text-success-foreground z-10">
                                            Best Value
                                        </Badge>
                                    )}

                                    <CardHeader className="text-center pb-4">
                                        <CardTitle className="text-2xl">{course.title}</CardTitle>
                                        {/* Pricing hidden as per requirement
                                        <div className="flex items-baseline justify-center gap-2">
                                            <span className="text-3xl font-bold text-primary">{course.price}</span>
                                            <span className="text-sm text-muted-foreground">+GST</span>
                                        </div>
                                        */}
                                        <CardDescription className="text-base">{course.description}</CardDescription>
                                    </CardHeader>

                                    <CardContent className="space-y-6 flex-1 flex flex-col">
                                        <div className="flex justify-between items-center text-sm">
                                            <div className="flex items-center gap-2">
                                                <Clock className="h-4 w-4 text-muted-foreground" />
                                                <span>{course.duration}</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <Users className="h-4 w-4 text-muted-foreground" />
                                                <span>{course.sessionLength}</span>
                                            </div>
                                        </div>

                                        {/* Miller's Law: Show top 5 features, rest on expand */}
                                        <div className="space-y-3 flex-1">
                                            <h4 className="font-semibold">What you'll learn:</h4>
                                            <ul className="space-y-2">
                                                {course.features.slice(0, 5).map((feature, featureIndex) => (
                                                    <li key={featureIndex} className="flex items-start gap-2">
                                                        <CheckCircle className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />
                                                        <span className="text-sm">{feature}</span>
                                                    </li>
                                                ))}
                                                {course.features.length > 5 && (
                                                    <li className="text-xs text-primary font-medium pt-1">
                                                        +{course.features.length - 5} more included
                                                    </li>
                                                )}
                                            </ul>
                                        </div>

                                        {/* Fitts's Law: Large, prominent CTA */}
                                        <div className="space-y-3 pt-4 mt-auto">
                                            <Button
                                                variant={course.popular ? "whatsapp" : "default"}
                                                className="w-full min-h-[48px]"
                                                onClick={scrollToContactForm}
                                                aria-label={`Book free demo for ${course.title}`}
                                            >
                                                <MessageCircle className="mr-2 h-4 w-4" />
                                                Book Free Demo
                                            </Button>
                                            <Button
                                                variant="outline"
                                                className="w-full min-h-[44px]"
                                                onClick={() => handleCall()}
                                                aria-label={`Call for ${course.title} details`}
                                            >
                                                <Phone className="mr-2 h-4 w-4" />
                                                Call for Details
                                            </Button>
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                {/* Progressive Disclosure: Show more courses */}
                {!showAll && courses.length > 3 && (
                    <div className="text-center">
                        <Button
                            variant="outline"
                            size="lg"
                            onClick={() => setShowAll(true)}
                            className="min-h-[48px] gap-2 rounded-xl"
                        >
                            View All {courses.length} Courses
                            <ChevronDown className="h-4 w-4" />
                        </Button>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Courses;
