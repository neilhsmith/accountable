import { PropsWithChildren } from "react"
import { cva, type VariantProps } from "class-variance-authority"

type ContainerVariant = VariantProps<typeof containerCVA>
const containerCVA = cva("container mx-auto", {
  variants: {
    fixed: {
      bottom: "fixed bottom-0 inset-x-0",
      top: "fixed top-0 inset-x-0",
    },
  },
})

type ContainerProps = ContainerVariant

const Container = ({ children, fixed }: PropsWithChildren<ContainerProps>) => (
  <div className={containerCVA({ fixed })}>{children}</div>
)

export default Container
