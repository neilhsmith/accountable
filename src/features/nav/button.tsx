import Button from "@/common/components/button"
import { motion } from "framer-motion"
import Link from "next/link"
import { HiPlus } from "react-icons/hi"

const NavButton = () => {
  return (
    <motion.div
      initial={{ y: 56 }}
      animate={{ y: 0 }}
      exit={{ y: 56 }}
      transition={{ type: "spring", bounce: 0.3 }}
      className="-z-10"
    >
      <Link href="/dashboard#create" passHref legacyBehavior>
        <Button
          as="a"
          rounded
          size="lg"
          className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2"
        >
          <HiPlus />
          <span className="sr-only">Create today&apos;s list</span>
        </Button>
      </Link>
    </motion.div>
  )
}

export default NavButton
