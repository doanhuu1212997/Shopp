export const TOKEN_KEY = 'token'
export const setToken = (data) => {
    localStorage.setItem(TOKEN_KEY, JSON.stringify(data))
}
export const getToken = (data) => {
    let token = localStorage.getItem(TOKEN_KEY)
    if (token) {
        token = JSON.parse(token)
    }
    return token
}
export const clearToken = () => {
    localStorage.removeItem(TOKEN_KEY)
}