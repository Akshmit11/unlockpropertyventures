'use client'

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { motion } from "framer-motion"

export default function Footer() {
  return (
    <motion.footer 
      className="border-t-[1px] border-muted-foreground/20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div className="mb-6 sm:mb-0">
            <h3 className="font-semibold mb-4">Unlock Property Ventures</h3>
            <p className="text-sm text-muted-foreground">
              Connecting landowners and builders for profitable joint ventures.
            </p>
          </div>
          <div className="mb-6 sm:mb-0">
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-sm hover:underline">About Us</Link></li>
              <li><Link href="#" className="text-sm hover:underline">How It Works</Link></li>
              <li><Link href="#" className="text-sm hover:underline">Pricing</Link></li>
              <li><Link href="#" className="text-sm hover:underline">Contact</Link></li>
            </ul>
          </div>
          <div className="mb-6 sm:mb-0">
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-sm hover:underline">Privacy Policy</Link></li>
              <li><Link href="#" className="text-sm hover:underline">Terms of Service</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Newsletter</h3>
            <form className="space-y-2">
              <Input placeholder="Your email" type="email" />
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button type="submit" className="w-full">Subscribe</Button>
              </motion.div>
            </form>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-muted-foreground/20 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Unlock Property Ventures. All rights reserved.
        </div>
      </div>
    </motion.footer>
  )
}