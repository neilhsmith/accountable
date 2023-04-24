import type { NextPage as NextNextPage } from "next"
import type { AppProps as NextAppProps } from "next/app"

export type NextPage<P = {}, IP = P> = NextNextPage<P, IP> & {
  // a tailwind bg class name
  bgColor: string
}

export type AppProps = NextAppProps & {
  Component: NextPage
}
