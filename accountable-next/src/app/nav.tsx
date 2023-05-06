import Link from "next/link"

const Nav = () => {
  return (
    <nav aria-label="Main nav" role="navigation">
      <ul className="flex justify-around">
        <li>
          <Link href="/">home</Link>
        </li>
        <li>
          <Link href="/login">login</Link>
        </li>
        <li>
          <Link href="/register">register</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
