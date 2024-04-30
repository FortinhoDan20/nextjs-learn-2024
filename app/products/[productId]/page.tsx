import { Metadata } from "next"
import Link from "next/link"

type Props = {
    params: {
        productId: string
    }
}


export const generateMetadata =   async ({ params}: Props): Promise<Metadata> =>{
    const title = await  new  Promise((resolve) => {
        setTimeout(() => { 
            resolve(`iPhone ${params.productId}`)
        }, 100)
    })
    return  {
        title: `Product ${params.productId}`
    }

}


export default function ProductDetails({ params, }: Props){
    return (
        <>
            <Link href="/">Home</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/products">Products</Link>
            <Link href="/about">About-me</Link>
            
        <h1>Details  about product {params.productId} </h1>
        </>
    )
}