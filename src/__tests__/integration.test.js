import 'react-testing-library/cleanup-after-each'
import { GetTunebook } from '../services/get-tunebook';

it('can GET contents of remote URL', () => {
	GetTunebook('http://localhost/blendr/proxy.php?url=http://www.pghardy.net/concertina/tunebooks/pgh_session_tunebook.abc')
		.then(abc => {
			console.log('--->',abc);
		});
})