import { query } from "@/lib/strapi";
// const { STRAPI_URL } = process.env

export const getHomeInfo = async () => {
    try {
        const res = await query("home?fields[0]=title&fields[1]=description&populate[cover][fields][0]=url")
        
        // Check if data is null or undefined
        if (!res.data) {
            console.warn('Home data is null or undefined')
            return { title: 'Default Title', description: 'Default Description', image: '/default-image.jpg' }
        }
        
        const { title, description, cover } = res.data
        // const image = `${STRAPI_URL}${cover.url}`
        return { 
            title: title || 'Default Title', 
            description: description || 'Default Description', 
            image: cover?.url || '/default-image.jpg' 
        }
    } catch (error) {
        console.error('Error fetching home info:', error)
        return { title: 'Default Title', description: 'Default Description', image: '/default-image.jpg' }
    }
}