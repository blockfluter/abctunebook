import actions from './actions';

const reducerFunctions = {
	[actions.LOAD_TUNEBOOK]: (state, action)=> {
		console.log(action);
		return state;
	}
}


export const reducer = (state, action) => {
	if (reducerFunctions[action.type]) {
		return reducerFunctions[action.type](state, action);
	}
	return state;	
};

