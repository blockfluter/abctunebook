jest.mock('../makeDomEditor')
import 'react-testing-library/cleanup-after-each'
import { TuneCollection } from '../tune-collection';

test('can instantiate', () => {
	const tunes = TuneCollection('X:1');

	expect(tunes.tuneCount()).toBe(1);
})