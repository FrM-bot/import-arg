const { STRAPI_URL, STRAPI_TOKEN } = process.env

export function query(url:string) {
    return fetch(`${STRAPI_URL}/api/${url}`, {
        headers: {
            Authorization: `Bearer ${STRAPI_TOKEN}`,
        },
        method: 'GET'
    }).then(res => res.json())
}
