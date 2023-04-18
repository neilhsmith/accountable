import { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react"
import classNames from "classnames"

type ButtonElementType = "a" | "button"

type ButtonProps<T extends ButtonElementType = "button"> = {
  as?: T
  rounded?: boolean
  size?: "sm" | "md" | "lg"
  theme?: "primary" | "secondary"
} & (T extends undefined | "button"
  ? ButtonHTMLAttributes<HTMLButtonElement>
  : AnchorHTMLAttributes<HTMLAnchorElement>)

export default function Button<T extends ButtonElementType = "button">({
  as,
  children,
  className,
  rounded,
  size = "md",
  theme = "primary",
  ...rest
}: ButtonProps<T>) {
  const colors = {
    primary: "bg-black-0 text-white border-2 border-black-0",
    secondary: "bg-white text-black-0 border-2 border-gray-10",
  }
  const sizes = {
    sm: rounded
      ? "w-6 h-6 text-sm sm:w-10 sm:h-10 sm:text-sm md:w-12 md:h-12"
      : "text-xs font-medium px-2 py-1 sm:px-3 sm:py-1 md:px-5 md:py-2",
    md: rounded
      ? "w-10 h-10 text-sm sm:w-14 sm:h-14 sm:text-base md:w-16 md:h-16"
      : "text-sm font-medium px-3 py-1 sm:px-5 sm:py-2 md:px-7 md:py-3",
    lg: rounded
      ? "w-16 h-16 text-lg sm:w-20 sm:h-20 sm:text-xl md:w-24 md:h-24"
      : "text-sm font-medium px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-4",
  }

  const classes = classNames(
    "inline-flex justify-center items-center rounded-full cursor-pointer",
    colors[theme],
    sizes[size],
    className
  )

  if (as === "a") {
    return (
      <a
        className={classes}
        {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {children}
      </a>
    )
  }

  return (
    <button
      className={classes}
      {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {children}
    </button>
  )
}
