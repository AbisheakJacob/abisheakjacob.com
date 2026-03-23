import Link from "next/link";

export default function Navbar() {
  return (
    <div className="flex justify-center mx-auto max-w-7xl pt-6">
      <nav>
        <ul className="flex rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur">
        <li>
          <Link className="block px-3 py-2 transition hover:text-teal-500" href="/">About Me</Link>
        </li>

        <li>
            <Link className="block px-3 py-2 transition hover:text-teal-500" href="/projects">Projects</Link>
        </li>

        <li>
            <Link className="block px-3 py-2 transition hover:text-teal-500" href="/essays">Essays</Link>
        </li>

        </ul>
      </nav>
    </div>
  )
}
