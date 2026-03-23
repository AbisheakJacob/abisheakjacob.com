import Link from "next/link";

// Props type
type NavItemProps = {
  title: string;
  url: string;
}

// Reusable NavItem
function NavItem({title, url}: NavItemProps) {
  return (
    <li>
      <Link href={url} className="block px-3 py-2 transition hover:text-teal-500">{title}</Link>
    </li>
  )
}

// Navbar Component
export default function Navbar() {
  return (
    <div className="flex justify-center mx-auto max-w-7xl h-16 pt-6">
      <nav>
        <ul className="flex rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zind-900/5 backdrop-blur">
          <NavItem title={"About"} url={"/"} />
          <NavItem title={"Projects"} url={"/projects"} />
          <NavItem title={"Essays"} url={"/essays"} />
        </ul>
      </nav>
    </div>
  );
}
