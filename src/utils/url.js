export const convertQueryURLToObject = (queryString = window.location.search) => {
    try {
        var search = queryString.substring(1);
        return JSON.parse('{"' + decodeURI(search).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') + '"}')
    } catch (error) {
        return {}
    }
}