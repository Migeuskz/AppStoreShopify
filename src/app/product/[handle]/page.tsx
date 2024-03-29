"use client"
import { useParams, useSearchParams } from "next/navigation"



export default function ProductPage() {
    const  params = useParams();
    const searchParams = useSearchParams();
    const id = searchParams.get("id") || params.id;
    // console.log(params)
    console.log('searchParams', id)
    return(
        <div>
            <h1>Producto</h1>
        </div>
    )
}