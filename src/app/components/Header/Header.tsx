import Image from "next/image";
import Link from "next/link";

import homePage from "../../homePage.module.css";
import header from "./header.module.css";

export default function Header() {
  const navItems = [
    { href: "/about-us", label: "About Us" },
    { href: "/contact-us", label: "Contact Us" },
    { href: "/our-projects", label: "Our projects" },
  ];

  return (
    <header className={header.header}>
      <div className={`${homePage.container} ${header.header__container}`}>
        <Link href="/" className={header.imageLink}>
          <Image
            className={header.image}
            src="../next.svg"
            alt="Next.js logo"
            fill
          />
        </Link>

        <nav>
          <ul className={header.ul}>
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className={header.link}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <Link className={header.profile} href="/profile">
          Profile
        </Link>
      </div>
    </header>
  );
}
