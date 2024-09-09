"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { fadeIn, stagger } from "@/lib/animations";
import { Check, Info, Lock, Shield } from "lucide-react";

export default function LandOwnerInfoPricing() {
  return (
    <motion.section
      id="pricing"
      className="bg-gray-100 py-12 sm:py-16 min-h-screen flex flex-col justify-center items-center"
      variants={stagger}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-4">
        <motion.h2
          variants={fadeIn}
          className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6 text-center text-black"
        >
          Land Owner Information Subscriptions
        </motion.h2>
        <motion.p
          variants={fadeIn}
          className="text-lg sm:text-xl text-center text-gray-600 mb-8 sm:mb-12"
        >
          Choose a plan that fits your needs
        </motion.p>
        <motion.div variants={fadeIn} className="flex flex-col md:flex-row justify-center gap-8">
          <PricingCard
            title="Basic Plan"
            price="₹5,000"
            features={[
              "Access to 5 land owner details",
              "Monthly subscription",
              "Verified information"
            ]}
          />
          <PricingCard
            title="Premium Plan"
            price="₹10,000"
            features={[
              "Access to 12 land owner details",
              "Monthly subscription",
              "Verified information",
              "Priority support"
            ]}
          />
        </motion.div>
      </div>
    </motion.section>
  );
}

function PricingCard({ title, price, features }: { title: string; price: string; features: string[] }) {
  return (
    <Card className="w-full md:w-96 overflow-hidden shadow-lg mb-8 md:mb-0">
      <CardContent className="p-8">
        <div className="flex flex-col items-center mb-6">
          <h3 className="text-2xl font-semibold text-black mb-2">{title}</h3>
          <span className="text-4xl font-bold text-black">{price}</span>
          <span className="text-gray-600">per month</span>
        </div>
        <ul className="space-y-4 mb-8">
          {features.map((feature, index) => (
            <ListItem key={index} icon={<Check />} text={feature} />
          ))}
        </ul>
        <motion.div
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
        >
          <Button className="w-full bg-black hover:bg-gray-800 text-white py-3 text-lg">
            Subscribe Now
          </Button>
        </motion.div>
      </CardContent>
    </Card>
  );
}

function ListItem({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <li className="flex items-center space-x-3 text-gray-700">
      <span className="text-black text-xl">{icon}</span>
      <span>{text}</span>
    </li>
  );
}
