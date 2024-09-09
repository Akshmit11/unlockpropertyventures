'use client'

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center text-white">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/bg-hero.png')" }}
      />
      <div className="absolute inset-0 bg-black bg-opacity-50" />
      <motion.div 
        className="relative z-10 text-center space-y-4 sm:space-y-6 px-4 sm:px-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold">
          Connect Landowners with Builders for Profitable Joint Ventures
        </h1>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button size="lg" variant="default" className="w-full sm:w-auto">
              Post Your Property
            </Button>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link href="/home">
              <Button size="lg" variant="outline" className="w-full sm:w-auto text-black">
                Browse Properties
              </Button>
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}