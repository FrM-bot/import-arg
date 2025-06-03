export const {
    NEXT_PUBLIC_PHONE_NUMBER,
    CLIENT_BASE_URL = 'http://localhost:3000'
} = process.env

export const env = {
    PHONE_NUMBER: NEXT_PUBLIC_PHONE_NUMBER,
    CLIENT_BASE_URL: CLIENT_BASE_URL
}