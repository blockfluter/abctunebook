jest.mock('../fetch-request')
import 'react-testing-library/cleanup-after-each'
import { GetTunebook } from '../get-tunebook'

describe('promise resolve and reject', () => {
    it('resolves on success', () => {
        expect.assertions(1)
        return expect(
            GetTunebook('fake-url')
        ).resolves.toBeTruthy()
    })

    // Testing promise can be done using `.resolves`.
    it('rejects on error', () => {
        expect.assertions(1)
        return expect(GetTunebook(null)).rejects.toBeTruthy()
    })
});
