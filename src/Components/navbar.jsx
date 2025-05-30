
// import "./globals.css";
import { bokorFont } from "@/src/fonts";
import Link from "next/link";

export default function Navbar() {
  return (
        <nav> 
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/proyects">Proyects</Link></li>
          </ul>
        </nav>
  );
}
