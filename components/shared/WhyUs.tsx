"use client";

import { UserCheck, Compass, Handshake } from "lucide-react";
import { motion } from "framer-motion";
import { fadeIn, stagger } from "@/lib/animations";
import { Card, CardContent } from "@/components/ui/card";

const benefits = [
  {
    icon: UserCheck,
    title: "Exclusive Access",
    description: "Connect directly with verified landowners",
  },
  {
    icon: Compass,
    title: "Expert Guidance",
    description: "Personalized support from land acquisition specialists",
  },
  {
    icon: Handshake,
    title: "Profitable Ventures",
    description: "High potential for lucrative joint ventures",
  },
];

export default function WhyUs() {
  return (
    <motion.section
      className="container mx-auto px-4 py-16 min-h-screen flex flex-col justify-center bg-gray-100"
      variants={stagger}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
    >
      <motion.h2
        variants={fadeIn}
        className="text-3xl font-bold text-center mb-12"
      >
        Why Choose Us
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {benefits.map((benefit, index) => (
          <motion.div
            key={index}
            variants={fadeIn}
            whileHover={{
              scale: 1.03,
              transition: { duration: 0.2 },
            }}
          >
            <Card>
              <CardContent className="p-6 text-center">
                <benefit.icon className="text-4xl mb-4 mx-auto text-black" />
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
