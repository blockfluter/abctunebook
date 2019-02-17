jest.mock('../makeDomEditor')
import 'react-testing-library/cleanup-after-each'
import { TuneEditor } from '../tune-collection';

test('can instantiate', () => {
	const tunes = TuneEditor('X:1');

	expect(tunes.tuneCount()).toBe(1);
})