jest.mock('../abc-integration/makeDomEditor')
import 'react-testing-library/cleanup-after-each'
import { TuneCollection } from '../abc-integration/tune-collection';

test('can instantiate', () => {
	const tunes = TuneCollection('X:1');

	expect(tunes.tuneCount()).toBe(1);
})