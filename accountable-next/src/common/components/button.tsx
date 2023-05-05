import { ComponentPropsWithoutRef, ElementType, ReactNode } from "react"
import { cva, type VariantProps } from "class-variance-authority"

export type ButtonVariant = VariantProps<typeof buttonCVA>
export const buttonCVA = cva(
  [
    "border",
    "focus:outline outline-offset-2 outline-1 outline-black",
    "transition-colors",
  ],
  {
    variants: {
      intent: {
        primary: [
          "bg-black text-white border-black",
          "hover:bg-white hover:text-black",
        ],
        secondary: [
          "bg-white text-black border-black",
          "hover:bg-black hover:text-white",
        ],
        tertiary: [
          "bg-gray-50 text-gray-200 border-gray-50",
          "hover:bg-gray-100 hover:text-gray-300 hover:border-gray-100",
        ],
      },
      fullWidth: {
        true: "w-full",
      },
      round: {
        true: "aspect-square rounded-full",
        false: "rounded-lg",
      },
      size: {
        sm: "px-6 py-2 text-sm",
        md: "px-8 py-3 text-base",
        lg: "px-10 py-4 text-lg",
      },
    },
    defaultVariants: {
      intent: "primary",
      round: false,
      size: "md",
    },
  }
)

/**
 * FIXME:
 *
 * the polymorphic typing here is working okay but could be improved:
 * - `type` should be required when setting `as` to 'button'
 * - `href` should be required when setting `as` to 'a'
 */

type ButtonProps<T extends ElementType = "a" | "button"> = {
  as?: T
  children: ReactNode
} & ButtonVariant &
  ComponentPropsWithoutRef<T>

const Button = <T extends ElementType = "button">({
  as,
  children,
  fullWidth,
  intent,
  round,
  size,
  ...rest
}: ButtonProps<T>) => {
  const Component = as || "button"

  return (
    <Component
      className={buttonCVA({ fullWidth, intent, round, size })}
      {...rest}
    >
      {children}
    </Component>
  )
}

export default Button
