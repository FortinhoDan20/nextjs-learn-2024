import { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
    title: "Product"
}


export default function ProductList(){
    return (
        <>
            <Link href="/">Home</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/products">Products</Link>
            <Link href="/about">About-me</Link>
        <h1>Products List</h1>
        <h2><Link href="products/1" > Products 1</Link> </h2>
        <h2><Link href="products/2" >Products 2</Link> </h2>
        <h2><Link href="products/3" replace > Products 3</Link> </h2>
        </>
    )
}