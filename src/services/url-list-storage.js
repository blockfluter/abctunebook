const key = 'urlList';

export const setUrlList = list => {
	console.log('setting:', list);
	window.localStorage.setItem(key, JSON.stringify(list));
}

export const getUrlList = () => {
	return JSON.parse(window.localStorage.getItem(key));
}