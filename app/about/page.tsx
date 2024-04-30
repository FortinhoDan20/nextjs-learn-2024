import { Metadata } from "next"
import Link from "next/link";

export const metadata: Metadata = {
    title: {
      absolute: "About"
    }
}

export default function About(){
    return (
      <>
      <Link href="/">Home</Link>
      <Link href="/blog">Blog</Link>
      <Link href="/products">Products</Link>
      <Link href="/about">About-me</Link>

      <h1>About me</h1>
    </>
      );
}