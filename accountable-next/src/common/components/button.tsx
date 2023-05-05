import { PropsWithChildren } from "react"
import { cva, type VariantProps } from "class-variance-authority"

type ButtonVariantProps = VariantProps<typeof buttonVariants>
const buttonVariants = cva(
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

type ButtonProps = ButtonVariantProps &
  React.ButtonHTMLAttributes<HTMLButtonElement>

const Button = ({
  children,
  fullWidth,
  intent,
  round,
  size,
  ...rest
}: PropsWithChildren<ButtonProps>) => (
  <button
    className={buttonVariants({ fullWidth, intent, round, size })}
    {...rest}
  >
    {children}
  </button>
)

export default Button
