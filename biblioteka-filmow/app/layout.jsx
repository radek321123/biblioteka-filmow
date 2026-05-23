"use client"
import "./globals.css"
import {usePathname} from 'next/navigation'
import Link from 'next/link'

export default function RootLayout({children}) {

    let currentPathname = usePathname();


    return (
        <html lang="pl">
        <body>
        <nav>
            <Link href={"/"} className={currentPathname === "/" ? "selected" : ""}>home</Link>
            <Link href={"/filmy"} className={currentPathname === "/filmy" ? "selected" : ""}>filmy</Link>
            <Link href={"/filmy/dodaj"} className={currentPathname === "/filmy/dodaj" ? "selected" : ""}>dodaj</Link>
        </nav>
        {children}
        </body>
        </html>

    );
}