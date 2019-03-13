// request.js
import request from './fetch-request'

export function GetTunebook(url) {
    return request(url?`/proxy?url=${url}`:null)
        .then(abcText => abcText.replace(/^%%.*$/gm, ''))
}
