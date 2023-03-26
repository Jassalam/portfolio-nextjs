import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from "next/link";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <h1>Home page</h1>

      <Link href="/blog">Blog</Link>
    </div>
  )
}
