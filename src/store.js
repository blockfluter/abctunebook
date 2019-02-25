import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { reducer } from './reducers/reducer';
import { setUrlList, getUrlList } from './services/url-list-storage'


const initialState = {
	abcText: '',
	copies: [],
	url: 'https://tunebook.randallwiggins.com/pgh_session.abc',
	collectionUrls: getUrlList(),
};

export const store = createStore(reducer, initialState, applyMiddleware(thunk));
