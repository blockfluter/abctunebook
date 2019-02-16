import actions from './actions';

function makeActionCreator(type, ...argNames) {
    return function(...args) {
        const action = { type }
        argNames.forEach((arg, index) => {
            action[argNames[index]] = args[index]
        })
        return action
    }
}

export default {
	loadTunebook: makeActionCreator(
		actions.LOAD_TUNEBOOK,
		'url'
	)
};
