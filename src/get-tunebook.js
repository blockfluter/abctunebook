// request.js
import request from './fetch-request'

export function GetTunebook(url) {
    return request(url)
        .then(abcText => abcText.replace(/^%%.*$/gm, ''))
}
