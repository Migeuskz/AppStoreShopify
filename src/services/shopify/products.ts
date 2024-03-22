import { env } from "app/config/env"
import { shopifyurls } from "./urls"

export const getProducts = async () => {
    try {
      const response = await fetch(shopifyurls.products.all, {
        headers: new Headers({
          'X-Shopify-Access-Token': env.SHOPIFY_TOKEN
        })
      })
      // throw new Error('Error getting products')
      const { products } = await response.json()
      return products
    } catch (error) {
      console.log(error)
    }
  }