import Link from "next/link"

export default function JumpToContent() {
  return (
    <Link href="#" prefetch={false} className="sr-only focus:not-sr-only">
      Skip to main content
    </Link>
  )
}
