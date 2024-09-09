"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { fadeIn, stagger } from "@/lib/animations";

export default function SuccessStories() {
  return (
    <motion.section
      className="container mx-auto px-4 py-8 sm:py-12 min-h-screen flex flex-col justify-center items-center"
      variants={stagger}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
    >
      <motion.h2
        variants={fadeIn}
        initial="initial"
        animate="animate"
        className="text-2xl sm:text-3xl font-bold mb-6 text-center"
      >
        Success Stories
      </motion.h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {[3, 5, 9].map((i) => (
          <motion.div
            key={i}
            variants={fadeIn}
            whileHover={{
              scale: 1.03,
              transition: { duration: 0.2 },
            }}
          >
            <Card>
              <CardContent className="p-6 text-center">
                <img
                  src={`/images/profile${i}.jpeg`}
                  alt={`User ${i}`}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <p className="italic mb-4">
                  "Unlock Property Ventures helped me find the perfect builder for my land.
                  The process was smooth and profitable!"
                </p>
                <p className="font-semibold">John Doe, Landowner</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
