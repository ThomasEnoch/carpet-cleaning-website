import Link from "next/link"
import { usePathname } from "next/navigation"

export default function ServicesLayoutNav() {
  const pathname = usePathname()

  const links = [
    { href: "/services", label: "Layout 1" },
    { href: "/services/layout-2", label: "Layout 2" },
    { href: "/services/layout-3", label: "Layout 3" },
  ]

  return (
    <nav className="bg-white shadow-md py-2 px-4 mb-8">
      <ul className="flex justify-center space-x-4">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className={`text-sm font-medium ${
                pathname === link.href ? "text-primary underline" : "text-gray-600 hover:text-primary"
              }`}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

