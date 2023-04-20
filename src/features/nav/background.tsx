import { motion } from "framer-motion"

const paths = {
  square:
    "M0 0 L200 0 C300 0 300 0 400 0 C500 0 500 0 600 0 L 800 0 L 800 221 L 0 221 Z",
  notched:
    "M0 0 L200 0 C300 0 300 56 400 56 C500 56 500 0 600 0 L 800 0 L 800 221 L 0 221 Z",
}

const NavBackground = ({ notched }: { notched?: boolean }) => {
  return (
    <svg
      viewBox="0 0 800 221"
      className="fill-white drop-shadow-xl pointer-events-none rounded md:rounded-lg"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.path
        animate={{
          d: notched ? paths.notched : paths.square,
        }}
        transition={{
          type: "spring",
          bounce: 0.42,
        }}
      />
    </svg>
  )
}

export default NavBackground
