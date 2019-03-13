import actionCreators from './action-creators'
import { GetTunebook } from '../services/get-tunebook'
import { TuneCollection } from '../abc-integration/tune-collection'

export const loadTunebook = (props, url) => {
    return dispatch => {
        return GetTunebook(url)
            .then(all => {
                props.history.push('/view')
                const tc = TuneCollection(all)
                dispatch(actionCreators.updateCollection(tc, url))
            })
            .catch(message => {
                alert(message)
            })
    }
}
