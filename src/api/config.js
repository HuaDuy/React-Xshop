export const headers = () => {
    const info = JSON.parse(localStorage.getItem('user') || '{}')
    return {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + info.token
        }
    }
}