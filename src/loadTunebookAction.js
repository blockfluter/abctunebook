import actionCreators from './action-creators';
import { GetTunebook } from './get-tunebook';
import { TuneCollection } from './tune-collection';

export const loadTunebookAction = url => {
	console.log(url)
	return dispatch => {
	    return GetTunebook(
		  `http://localhost/blendr/proxy.php?url=${url}`
	    ).then(all => {
		    const tc = TuneCollection(all);				    
		    dispatch(actionCreators.updateCollection(tc))
	    })
	}
  }
  