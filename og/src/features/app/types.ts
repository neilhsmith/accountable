import { NextPage } from "next"
import { AppProps as NextAppProps } from "next/app"
import { ReactElement, ReactNode } from "react"

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

export type AppPropsWithLayout<T = {}> = NextAppProps<T> & {
  Component: NextPageWithLayout<T>
}
