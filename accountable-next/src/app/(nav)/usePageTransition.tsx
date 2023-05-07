"use client"

import { PropsWithChildren, ReactNode, createContext, useContext } from "react"

type PageTransition = {
  component: ReactNode
  duration: number
}

type PageTransitionContextProps = {
  pushRoute: (href: string) => void
}

type PageTransitionProviderProps = {
  pageTransitions: Record<string, PageTransition> | PageTransition
  fallbackPageTransition?: PageTransition
}

const PageTransitionContext = createContext<PageTransitionContextProps>({
  pushRoute: (_: string) => null,
})

export const PageTransitionProvider = ({
  children,
  pageTransitions,
  fallbackPageTransition,
}: PropsWithChildren<PageTransitionProviderProps>) => {
  // also, move this to a folder in common/components cause its reusable
  // also, add the body-background component which takes a map or urls and the bgcolor to add to body

  const pushRoute = (href: string) => {
    // find the transition component or fallback or nothing, mount it, do timeout, unmount, then do navigation
  }

  return (
    <PageTransitionContext.Provider value={{ pushRoute }}>
      {children}
    </PageTransitionContext.Provider>
  )
}

const usePageTransition = () => useContext(PageTransitionContext)

export default usePageTransition
