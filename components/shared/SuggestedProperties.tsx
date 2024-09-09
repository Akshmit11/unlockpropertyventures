'use client'

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SuggestedProperty } from '@/types';
import { fadeIn, stagger } from "@/lib/animations";

interface SuggestedPropertiesProps {
  properties: SuggestedProperty[];
}

const buttonVariants = {
  rest: { scale: 1 },
  hover: { scale: 1.05 },
  tap: { scale: 0.95 }
};

const arrowVariants = {
  rest: { x: 0 },
  hover: { x: 5 }
};

export const SuggestedProperties: React.FC<SuggestedPropertiesProps> = ({ properties }) => {
  return (
    <motion.section
      className="container mx-auto px-4 py-12"
      variants={stagger}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
    >
      <motion.h2 variants={fadeIn} className="text-3xl text-center font-bold mb-6">Similar Properties</motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {properties.map((property) => (
          <motion.div key={property.id} variants={fadeIn}>
            <Card>
              <CardContent className="p-0">
                <div className="relative aspect-video">
                  <Image
                    src={property.image}
                    alt={property.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold mb-2">{property.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{property.price}</p>
                  <motion.div 
                    initial="rest"
                    whileHover="hover"
                    whileTap="tap"
                  >
                    <motion.div variants={buttonVariants}>
                      <Button variant="outline" size="sm" className="group" asChild>
                        <Link href={`/land/${property.id}`}>
                          <span>View Details</span>
                          <motion.div
                            className="inline-block ml-2"
                            variants={arrowVariants}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                          >
                            <ArrowRight className="h-4 w-4" />
                          </motion.div>
                        </Link>
                      </Button>
                    </motion.div>
                  </motion.div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};