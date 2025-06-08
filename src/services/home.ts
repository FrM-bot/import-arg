import { query } from "@/lib/strapi";
// const { STRAPI_URL } = process.env

export const getHomeInfo = () => query("home?fields[0]=title&fields[1]=description&populate[cover][fields][0]=url").then(res => {
    const { title, description, cover } = res.data
    // const image = `${STRAPI_URL}${cover.url}`
    return { title, description, image: cover.url }
})