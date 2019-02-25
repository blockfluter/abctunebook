// request.js
import request from './fetch-request'

export function GetTunebook(url) {
    return request(url?`http://localhost/blendr/proxy.php?url=${url}`:null)
        .then(abcText => abcText.replace(/^%%.*$/gm, ''))
}
