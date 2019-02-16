export default function request(url) {
    return fetch(url)
        .then(response => {
            if (response.status !== 200) {
                Promise.reject(
                  `{response.status}:{response.text}`
                )
            }
            return response.text()
        })
}
