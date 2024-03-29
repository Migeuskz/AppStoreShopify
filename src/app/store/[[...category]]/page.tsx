import { ProductsWrapper } from "app/components/Store/ProductsWrapper"
import { getCollections, getCollectionProducts } from "app/services/shopify/collections"
import { getProducts } from "app/services/shopify/products"

interface CategoriesProps {
    params: {
        categories: string[]
        searchParams: string
    }
}

export default async function Categories(props: CategoriesProps){
    

    const { categories } = props.params
    let products = []
    const collections = await getCollections()
    if(categories?.length > 0) {
        const selectedCollectionId = collections.find((collection:any) => collection.handle === categories[0]).id
        products = await getCollectionProducts(selectedCollectionId)
    }else{
        products = await getProducts()
    }
    console.log(products)
    return(
        <ProductsWrapper products={products}/>
    );
    }