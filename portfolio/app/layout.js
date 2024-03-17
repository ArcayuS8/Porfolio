import React from "react";
import Head from "next/head";
import Link from "next/link";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio de Jose María",
  description: "Bienvenido al portfolio de Jose María, desarrollador web.",
};

const Layout = ({ children }) => {
  return (
    <html lang="es">
      <Head>
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        />
        <meta name="description" content={metadata.description} />
        <title>{metadata.title}</title>
        {/* Cualquier otra etiqueta meta que necesites */}
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap"
          rel="stylesheet"
        />
        {/* Cualquier otro enlace de hoja de estilo que necesites */}
      </Head>
      <body className={inter.className}>
        <div className="flex">
          <aside className="w-1/4 bg-gray-200 p-4">
            <nav>
              <ul>
                <li>
                  <Link href="//">
                    <p className="text-blue-600 hover:underline">Home</p>
                  </Link>
                </li>
                <li>
                  <Link href="/projects">
                    <p className="text-blue-600 hover:underline">Proyectos</p>
                  </Link>
                </li>
                <li>
                  <Link href="/about">
                    <p className="text-blue-600 hover:underline">Sobre Mí</p>
                  </Link>
                </li>
              </ul>
            </nav>
          </aside>
          <main className="w-3/4 p-4">{children}</main>
        </div>
        <footer className="p-4 mt-4 bg-gray-200 text-center">
          <div className="mb-4">
            <a href="https://www.instagram.com/josemariad_8/" className="text-blue-600 hover:underline mx-2">
              Instagram
            </a>
            <a href="https://www.linkedin.com/in/jose-mar%C3%ADa-%C3%A1spera-dormido-9b0896164/" className="text-blue-600 hover:underline mx-2">
              LinkedIn
            </a>
          </div>
          <p className="mb-0">Teléfono: +34 697603396</p>
          <p>Derechos de autor © 2024 Jose María.</p>
        </footer>
      </body>
    </html>
  );
};

export default Layout;
