// request.js
import request from './fetch-request'

export function GetTunebook(url) {
    return request(`http://localhost/blendr/proxy.php?url=${url}`)
        .then(abcText => abcText.replace(/^%%.*$/gm, ''))
}
