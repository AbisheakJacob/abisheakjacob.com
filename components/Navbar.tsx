// Tells Next.js that this component runs in the client (browser), not the server
"use client";

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
    <div className="fixed inset-x-0 bottom-0 z-50 flex justify-center px-4 pb-2 md:pb-4 pb-safe backdrop-blur-md bg-white/70 shadow-lg">
      <nav >
        <ul className="flex border border-gray-300 rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 backdrop-blur-md">
          <NavItem title={"Home"} url={"/"} />
          <NavItem title={"Projects"} url={"/projects"} />
          <NavItem title={"Essays"} url={"/essays"} />
        </ul>
      </nav>
    </div>
  );
}

/* NOTES

insert-x-0  : stretches the navbar across the full width (replaces left-0 right-0)

*/
