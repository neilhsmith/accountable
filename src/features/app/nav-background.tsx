import { motion } from "framer-motion"

const paths = {
  square:
    "M0 0.999996C0 0.999996 10.782 0.999996 25 0.999996C39.218 0.999996 39.8146 0.950708 49.8815 1C60.08 1.04994 60.4265 0.999996 74.8815 0.999996C89.3365 0.999996 100 0.999996 100 0.999996V32H0V0.999996Z",
  notched:
    "M0 3.96651e-06C0 3.96651e-06 45.5 2.28504e-06 105.5 3.96651e-06C165.5 5.64797e-06 168.018 34.814 210.5 35C253.538 35.1885 255 3.96651e-06 316 3.96651e-06C377 3.96651e-06 422 3.96651e-06 422 3.96651e-06V117H0V3.96651e-06Z",
}

const NavBackground = () => {
  return (
    <svg
      fill="#ffffff"
      width="422"
      height="117"
      viewBox="0 0 422 117"
      className="absolute inset-0"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g>
        <motion.path d={paths.notched} />
      </g>
    </svg>
  )
}

export default NavBackground

// import { getIndex, useFlubber } from "@/common/hooks/useFlubber"
// import { animate, motion, useMotionValue, useTransform } from "framer-motion"
// import { useEffect, useState } from "react"

// // const paths = [
// //   "M0 1.00001C0 1.00001 45.5 1.00001 105.5 1.00001C165.5 1.00001 168.018 0.813965 210.5 1C253.538 1.18847 255 1.00001 316 1.00001C377 1.00001 422 1.00001 422 1.00001V118H0V1.00001Z",
// //   "M0 3.96651e-06C0 3.96651e-06 45.5 2.28504e-06 105.5 3.96651e-06C165.5 5.64797e-06 168.018 34.814 210.5 35C253.538 35.1885 255 3.96651e-06 316 3.96651e-06C377 3.96651e-06 422 3.96651e-06 422 3.96651e-06V117H0V3.96651e-06Z",
// // ]

// // const NavBackground = () => {
// //   const [pathIndex, setPathIndex] = useState(0)
// //   const progress = useMotionValue(pathIndex)
// //   const path = useFlubber(progress, paths)

// //   useEffect(() => {
// //     const animation = animate(progress, pathIndex, {
// //       duration: 0.8,
// //       ease: "easeInOut",
// //       onComplete: () => {
// //         if (pathIndex === paths.length - 1) {
// //           progress.set(0)
// //           setPathIndex(1)
// //         } else {
// //           setPathIndex(pathIndex + 1)
// //         }
// //       },
// //     })

// //     return () => animation.stop()
// //   }, [pathIndex])

// //   return (
// //     <svg
// //       viewBox="0 0 422 117"
// //       xmlns="http://www.w3.org/2000/svg"
// //       fill="#ffffff"
// //     >
// //       <motion.path d={path} />
// //     </svg>
// //   )
// // }

// // export default NavBackground

// // const paths = [
// //   "M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z",
// //   "M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z",
// // ]
// const paths = [
//   "M0 1.00001C0 1.00001 45.5 1.00001 105.5 1.00001C165.5 1.00001 168.018 0.813965 210.5 1C253.538 1.18847 255 1.00001 316 1.00001C377 1.00001 422 1.00001 422 1.00001V118H0V1.00001Z",
//   "M0 3.96651e-06C0 3.96651e-06 45.5 2.28504e-06 105.5 3.96651e-06C165.5 5.64797e-06 168.018 34.814 210.5 35C253.538 35.1885 255 3.96651e-06 316 3.96651e-06C377 3.96651e-06 422 3.96651e-06 422 3.96651e-06V117H0V3.96651e-06Z",
// ]

// export default function NavBackground() {
//   const [pathIndex, setPathIndex] = useState(0)
//   const progress = useMotionValue(pathIndex)
//   const path = useFlubber(progress, paths)

//   useEffect(() => {
//     const animation = animate(progress, pathIndex, {
//       duration: 0.8,
//       ease: "easeInOut",
//       // onComplete: () => {
//       //   if (pathIndex === paths.length - 1) {
//       //     progress.set(0)
//       //     setPathIndex(1)
//       //   } else {
//       //     setPathIndex(pathIndex + 1)
//       //   }
//       // },
//     })

//     return () => animation.stop()
//   }, [pathIndex])

//   return (
//     <svg
//       viewBox="0 0 422 117"
//       fill="#FFFFFF"
//       className="rounded drop-shadow-xl transform-gpu"
//     >
//       {/* <g transform="translate(10 10) scale(17 17)"> */}
//       <motion.path d={path} />
//       {/* </g> */}
//     </svg>
//   )
// }
