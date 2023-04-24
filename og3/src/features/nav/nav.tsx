import Link from "next/link"

const Nav = () => {
  return (
    <nav className="bg-white rounded-lg drop-shadow transform-gpu py-10">
      <ul className="flex justify-evenly">
        <li>
          <NavLink href="/" label="Home" />
        </li>
        <li>
          <NavLink href="/auth/login" label="Login" />
        </li>
        <li>
          <NavLink href="/auth/register" label="Register" />
        </li>
      </ul>
    </nav>
  )
}

export default Nav

function NavLink({ href, label }: { href: string; label: string }) {
  return (
    <Link href={href} className="cursor-pointer">
      <div className="text-lg font-medium text-gray">{label}</div>
    </Link>
  )
}
