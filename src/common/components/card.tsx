import classNames from "classnames"
import { PropsWithChildren } from "react"

const Card = ({
  className,
  children,
}: PropsWithChildren<{ className?: string }>) => {
  return (
    <div
      className={classNames(
        "bg-white rounded-lg shadow-xl py-10 md:py-14 lg:py-20 flex flex-col items-center",
        className
      )}
    >
      {children}
    </div>
  )
}

export default Card
