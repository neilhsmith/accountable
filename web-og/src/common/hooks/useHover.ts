import { RefObject, useCallback, useEffect, useState } from "react"

export function useHover<T extends HTMLElement>(ref: RefObject<T>) {
  const [value, setValue] = useState(false)

  const handleMouseOver = useCallback(() => setValue(true), [])
  const handleMouseOut = useCallback(() => setValue(false), [])

  useEffect(() => {
    const node = ref.current
    if (!node) return

    node.addEventListener("mouseover", handleMouseOver)
    node.addEventListener("mouseout", handleMouseOut)

    return () => {
      node.removeEventListener("mouseover", handleMouseOver)
      node.removeEventListener("mouseout", handleMouseOut)
    }
  }, [ref.current])

  return value
}
