import React from "react";
import Link from "next/link";
import Image from "next/image";

import styles from "./homePage.module.css";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header className={styles.header}>
          <div className={`${styles.container} ${styles.header__container}`}>
            <Link href="./" className={styles.imageLink}>
              <Image
                src="./next.svg"
                alt="Next.js logo"
                fill
                className={styles.image}
              />
            </Link>

            <nav>
              <ul className={styles.ul}>
                <li>
                  <Link href="./about-us" className={styles.link}>
                    About Us
                  </Link>
                </li>

                <li>
                  <Link href="./contact-us" className={styles.link}>
                    Contact Us
                  </Link>
                </li>

                <li>
                  <Link href="./our-projects" className={styles.link}>
                    Our projects
                  </Link>
                </li>
              </ul>
            </nav>

            <div>Profile</div>
          </div>
        </header>

        <main>
          <div className={styles.container}>{children}</div>
        </main>

        <footer>
          <div className={styles.container}></div>
        </footer>
      </body>
    </html>
  );
}
