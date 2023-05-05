import HomeLink from "./links/home"

export default function Nav() {
  return (
    <nav className="fixed container bottom-2 inset-x-0 rounded bg-white drop-shadow transform-gpu">
      <ul className="flex justify-around py-6">
        {[...Array.from(Array(4))].map((_, idx) => (
          <li key={idx} className="flex justify-center">
            <HomeLink />
          </li>
        ))}
      </ul>
    </nav>
  )
}
