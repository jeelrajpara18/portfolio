/* eslint-disable no-unused-vars */
"use client"

import { motion } from "framer-motion"
import {FlipWords} from "./FlipWords"

export default function HeroText() {
  const words = ["Scalable", "Modern", "Interactive", "Responsive", "Creative"]

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <div className="text-white mt-5">
      {/* Desktop View */}
      <div className="hidden lg:block space-y-2">
        <motion.h1
          className="text-5xl font-medium"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Hi I'm Jeel Rajpara
        </motion.h1>

        <div className="space-y-2">
          <div className="flex items-center gap-4">
            <motion.span
              className="text-5xl font-medium text-neutral-300"
              variants={variants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              I build
            </motion.span>
            <motion.div
              variants={variants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <FlipWords words={words} className="font-black text-white text-5xl" />
            </motion.div>
          </div>

          <motion.p
            className="text-5xl font-medium text-neutral-300"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            Web Experiences
          </motion.p>
        </div>
      </div>

      {/* Mobile View */}
      <div className="lg:hidden text-center">
        <motion.h1
          className="text-4xl font-medium"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Hi, I'm Jeel Rajpara
        </motion.h1>

        <div className="space-y-4">
          <motion.p
            className="text-5xl font-black text-neutral-300"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Building
          </motion.p>

          <motion.div variants={variants} initial="hidden" animate="visible" transition={{ delay: 0.6, duration: 0.8 }}>
            <FlipWords words={words} className="font-bold text-white text-5xl" />
          </motion.div>

          <motion.p
            className="text-4xl font-black text-neutral-300"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            Web Experiences
          </motion.p>
        </div>
      </div>
    </div>
  )
}
