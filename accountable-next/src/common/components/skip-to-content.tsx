import { cx } from "class-variance-authority"
import { buttonCVA } from "./button"

const SkipToContent = () => (
  <a
    tabIndex={0}
    href="#main"
    className={cx(
      "sr-only focus:not-sr-only focus:fixed focus:top-1 focus:left-1 focus:py-2 focus:px-4",
      buttonCVA({
        intent: "secondary",
        size: "md",
      })
    )}
  >
    Skip to content
  </a>
)

export default SkipToContent
