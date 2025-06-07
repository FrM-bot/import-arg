export const routes = {
    home: '/',
    products: {
        profile: (id: string) => `/product/${id}`,
        list: '/products',
    },
    about: '/about',
    contact: '/contact',
    priceList: '/price-list',
} as const