'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, LandPlot } from "lucide-react"
import { motion } from "framer-motion"
import { fadeIn, stagger } from "@/lib/animations"

const buttonVariants = {
  rest: { scale: 1 },
  hover: { scale: 1.05 },
  tap: { scale: 0.95 }
}

const arrowVariants = {
  rest: { x: 0 },
  hover: { x: 5 }
}

export default function FeaturedListings() {
  return (
    <motion.section 
      className="container mx-auto px-4 py-8 sm:py-12 min-h-screen flex flex-col justify-center"
      variants={stagger}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
    >
      <motion.h2 variants={fadeIn} className="text-2xl sm:text-3xl text-center font-bold mb-6">Featured Listings</motion.h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8">
        {[1, 2, 3].map((i) => (
          <motion.div key={i} variants={fadeIn}>
            <Card>
              <CardContent className="p-0">
                <img
                  src={`/images/land${i}.jpg`}
                  alt={`Featured Land ${i}`}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-semibold mb-2">Beautiful Land in City {i}</h3>
                  <p className="text-sm text-muted-foreground mb-4 flex items-center">
                    <LandPlot className="h-4 w-4 mr-1" /> {10 * i} acres
                  </p>
                  <motion.div 
                    initial="rest"
                    whileHover="hover"
                    whileTap="tap"
                  >
                    <motion.div variants={buttonVariants}>
                      <Button variant="outline" size="sm" className="group">
                        <span>View Details</span>
                        <motion.div
                          className="inline-block ml-2"
                          variants={arrowVariants}
                          transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        >
                          <ArrowRight className="h-4 w-4" />
                        </motion.div>
                      </Button>
                    </motion.div>
                  </motion.div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
      <motion.div 
        className="flex justify-center"
        variants={fadeIn}
      >
        <motion.div
          initial="rest"
          whileHover="hover"
          whileTap="tap"
        >
          <motion.div variants={buttonVariants}>
            <Button size="lg" className="group w-full sm:w-auto">
              <span>More Listings</span>
              <motion.div
                className="inline-block ml-2"
                variants={arrowVariants}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <ArrowRight className="h-5 w-5" />
              </motion.div>
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  )
}