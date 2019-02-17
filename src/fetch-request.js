export default function request(url) {
    console.log('fetching...', url);
    return fetch(url)
        .then(response => {
            console.log(response);
            if (response.status !== 200) {
                Promise.reject(
                  `{response.status}:{response.text}`
                )
            }
            return response.text()
        })
}
