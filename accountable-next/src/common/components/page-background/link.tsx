import { Route } from "next"
import { default as NextLink } from "next/link"
import { ComponentPropsWithoutRef, PropsWithChildren } from "react"
import usePageTransition from "./usePageTransition"

type LinkProps<T extends string> = {
  href: Route<T>
} & ComponentPropsWithoutRef<typeof NextLink>

const Link = <T extends string>({
  children,
  href,
  ...rest
}: PropsWithChildren<LinkProps<T>>) => {
  const { pushRoute } = usePageTransition()

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
    pushRoute(href)
  }

  return (
    <NextLink href={href} onClick={handleClick} {...rest}>
      {children}
    </NextLink>
  )
}
