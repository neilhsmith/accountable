import { motion } from "framer-motion"

const paths = {
  square:
    "M0 0 L 25 0 C38 0 38 0 50 0 C63 0 62 0 75 0 L 100 0 L 100 27 L 0 27 Z",
  notched:
    "M0 0 L 25 0 C38 0 38 8 50 8 C63 8 62 0 75 0 L 100 0 L 100 27 L 0 27 Z",
}

const NavBackground = ({ type = "square" }: { type?: keyof typeof paths }) => {
  console.log("type", type)
  return (
    <svg
      viewBox="0 0 100 27"
      className="fill-white rounded md:rounded-lg lg:rounded-xl drop-shadow transform-gpu"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g>
        <motion.path
          animate={{
            d: paths[type],
          }}
          transition={{
            type: "spring",
            bounce: 0.75,
          }}
        />
      </g>
    </svg>
  )
}

export default NavBackground
