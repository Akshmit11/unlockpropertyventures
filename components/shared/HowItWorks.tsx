"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Building2, MapPin, Users } from "lucide-react";
import { motion } from "framer-motion";
import { fadeIn, stagger } from "@/lib/animations";

export default function HowItWorks() {
  const steps = [
    {
      icon: MapPin,
      title: "For Landowners",
      description: "List your land for free and find the right builder.",
    },
    {
      icon: Building2,
      title: "For Builders",
      description: "Search through available land and contact the owner.",
    },
    {
      icon: Users,
      title: "Joint Venture",
      description: "Collaborate on profitable projects with expert support.",
    },
  ];

  return (
    <motion.section
      id="how-it-works"
      className="bg-gray-100 py-12 sm:py-16 min-h-screen flex justify-center items-center"
      variants={stagger}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-4">
        <motion.h2
          variants={fadeIn}
          className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-center text-gray-900"
        >
          How It Works
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {steps.map((item, index) => (
            <motion.div 
              key={index} 
              className="text-center bg-white p-6 rounded-lg shadow-sm"
              variants={fadeIn}
              whileHover={{ 
                scale: 1.03, 
                transition: { duration: 0.2 } 
              }}
            >
              <motion.div
                className="inline-block p-4 rounded-full bg-gray-100 mb-4"
                whileHover={{ 
                  scale: 1.1,
                  backgroundColor: "#ffffff",
                  transition: { duration: 0.2 } 
                }}
              >
                <item.icon className="h-8 w-8 text-gray-900" />
              </motion.div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">{item.title}</h3>
              <p className="text-sm text-gray-600 mb-4">
                {item.description}
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button variant="link" className="text-gray-900 hover:text-gray-700">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}