import React from "react";
import Header from "./components/Header/Header";

import "./globals.css";
import styles from "./homePage.module.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />

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
