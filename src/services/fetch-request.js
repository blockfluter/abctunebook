export default async function request(url) {
    const response = await fetch(url);
    const text = await response.text();
    return response.ok ? text : Promise.reject(`${response.status}:${text}`);
}
