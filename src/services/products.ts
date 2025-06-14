import { query } from "@/lib/strapi";
// const { STRAPI_URL } = process.env
import type ProductResponse from "@/response/product.json"
import type ProductsResponse from "@/response/products.json"

export const getProducts = ({
    page = 1,
    pageSize = 10
} = {}) => query(`products?fields[0]=name&fields[1]=slug&fields[2]=price&populate[images][fields][0]=url&pagination[page]=${page}&pagination[pageSize]=${pageSize}`).then((res: typeof ProductsResponse) => {
    const { data, meta } = res

    const products = data?.map((product) => ({
        id: product.documentId,
        name: product.name,
        slug: product.slug,
        price: product.price,
        image: product.images[0].url
        // image: `${STRAPI_URL}${product.images[0].url}`
    }))

    return { products, pagination: meta.pagination }
})

export const getProduct = (id: string) => query(`products/${id}?populate[images][fields][0]=url`).then((res: typeof ProductResponse) => {
    const product = res.data

    return {
        id: product.documentId,
        name: product.name,
        slug: product.slug,
        price: product.price,
        // images: product.images.map((image) => `${STRAPI_URL}${image.url}`),
        images: product.images.map((image) => image.url),
        description: product.description
    }
})