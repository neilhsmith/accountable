"use client"

import { useRouter } from "next/navigation"
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
  const router = useRouter()

  // FIXME: think this fn should get more data from the underlying Link (link NextLink's scroll prop) cause there could be some work to do after the animation. or omit those props in my Link's prop type
  const pushRoute = (href: string) => {
    // get the transition component, mount it, and start a timeout to unmount it/do the navigation

    let pageTransition: PageTransition | undefined
    if ("duration" in pageTransitions) {
      pageTransition = pageTransitions as PageTransition
    } else {
      pageTransition = pageTransitions[href] || fallbackPageTransition
    }

    if (!pageTransition) {
      // FIXME:
      router.push(href)
      return
    }

    // TODO: render the pageTransition.component
    // look into not using it's duration and instead just knowing when the animation unmounts
    //   maybe a callback or something which the animation component fires on unmount, idk
    // but if not possible start a timeout and redirect when the pageTransition.duration is done
  }

  return (
    <PageTransitionContext.Provider value={{ pushRoute }}>
      {children}
    </PageTransitionContext.Provider>
  )
}

const usePageTransition = () => useContext(PageTransitionContext)

export default usePageTransition
