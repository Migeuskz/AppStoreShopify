import { ProductsWrapper } from "app/components/Store/ProductsWrapper"
import { getProducts } from "app/services/shopify/products"

//todos los props en ts agregalos por interfaz
interface CategoryProps {
  params: {
    category: string[],
    searchParams: string,
  }
}

export default async function Category(props: CategoryProps) {
  const products = await getProducts()
  
  // console.log(collections);
  const { category } = props.params
  return (
    <ProductsWrapper products={products}/>
  )
}
