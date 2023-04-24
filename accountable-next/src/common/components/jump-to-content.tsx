export default function JumpToContentLink({
  href = "#main",
  label = "Jump to main content",
}: {
  href?: string
  label?: string
}) {
  return (
    <a href={href} className="sr-only focus:not-sr-only">
      {label}
    </a>
  )
}
