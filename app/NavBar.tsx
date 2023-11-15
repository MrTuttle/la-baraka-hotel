// app/NavBar.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { SiForestry } from "react-icons/si";

// import { HiMiniCpuChip } from "react-icons/hi2";
import classnames from "classnames";

const NavBar = () => {
  const currentPath = usePathname();
  // console.log(currentPath);

  const links = [
    { label: "Dashboard", href: "/dashboard" },
    { label: "Chambres", href: "/chambres" },
  ];
  return (
    <nav className="flex space-x-6 border-b mb-5 px-5 h-14 items-center">
      <Link href="/">
        <div className="flex">
          <SiForestry />{" "}
          <h1 className="mx-3 tracking-widest font-medium ">LA BARAKA</h1>
        </div>
      </Link>
      <ul className="flex space-x-6">
        {links.map((link) => (
          <li key={link.label} className="ml-10">
            <Link
              href={link.href}
              className={classnames({
                "text-zinc-900": link.href === currentPath,
                "text-zinc-500": link.href !== currentPath,
                "hover:text-zinc-800 transition-colors": true,
              })}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
