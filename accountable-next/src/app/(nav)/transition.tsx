"use client"

import { motion } from "framer-motion"

const Transition = () => {
  return (
    <motion.div className="absolute top-0 left-0 w-screen h-screen overflow-hidden">
      <motion.div
        initial={{
          left: "100%",
        }}
        animate={{
          left: 0,
        }}
        className="absolute bg-[orange] w-full h-full top-0 left-0"
      />
    </motion.div>
  )
}

export default Transition
