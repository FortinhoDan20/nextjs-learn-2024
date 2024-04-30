import { Metadata } from "next"
import Link from "next/link";

export const metadata: Metadata = {
    title: "Profile"
}


export default function Profile(){
    return (

            <>
            <Link href="/">Home</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/products">Products</Link>
            <Link href="/about">About-me</Link>
            <h1>Profile</h1>
          </>
      );
}