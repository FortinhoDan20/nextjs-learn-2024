import { Metadata } from "next"
import Link from "next/link";

export const metadata: Metadata = {
    title: "Blog"
}

export default function Blog(){
    return (
        <>
            <Link href="/">Home</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/products">Products</Link>
            <Link href="/about">About-me</Link>

            <h1>Blog Page</h1>
          </>
    )
}