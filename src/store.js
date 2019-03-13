import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { reducer } from './reducers/reducer';
import { getUrlList } from './services/url-list-storage'


const initialState = {
	abcText: '',
	copies: [],
	url: '',
	collectionUrls: getUrlList(),
};

export const store = createStore(reducer, initialState, applyMiddleware(thunk));
