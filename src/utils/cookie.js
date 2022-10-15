
const setCookie = (name, value, days) => {
    const expires = new Date(Date.now() + days * 864e5).toUTCString()
    document.cookie = name + '=' + encodeURIComponent(value) + '; expires=' + expires;
    return true;
}

const getCookie = (name) => {
    const cookie = document.cookie.split(';').some((item) => item.trim().startsWith(name + '='));
    if (cookie) {
        return true;
    }
    return false;
}

const deleteCookie = (name) => {
    document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;'
}

export { setCookie, getCookie, deleteCookie }