import { query } from "@/lib/strapi";
const { STRAPI_URL } = process.env

export const getCategories = () => query("brands?fields[0]=name&fields[1]=slug&fields[2]=id").then(res => {
    const { title, description, cover } = res.data
    // const image = `${STRAPI_URL}${cover.url}`
    return { title, description, image: cover.url }
})