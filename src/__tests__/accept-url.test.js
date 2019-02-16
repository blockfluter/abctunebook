import React from 'react'
import { render, fireEvent } from 'react-testing-library'
import 'react-testing-library/cleanup-after-each'

import { AcceptUrl } from '../accept-url'

it('contains an input element that accepts keystrokes', () => {
    const onKeyDown = jest.fn();
    const { container, debug } = render(<AcceptUrl onKeyDown={onKeyDown} />);
    const input = container.getElementsByTagName('input')[0];
    ;['a', 'b', 'c', 'd', 'e'].forEach(a => {
        fireEvent.keyDown(input, {
            key: a,
            keyCode: a,
            which: a,
        })
    })
    expect(onKeyDown.mock.calls.length).toBe(5)
})

it('has an ok button and function prop', () => {
    const fn = jest.fn()
    const label = '--text--'
    const { container, getByText } = render(<AcceptUrl ok={fn} okLabel={label} />)

    fireEvent.click(getByText(label))

    expect(fn.mock.calls.length).toBe(1)
})

it('has a cancel button and function prop', () => {
    const fn = jest.fn()
    const label = '--text--'
    const { container, getByText } = render(<AcceptUrl cancel={fn} cancelLabel={label} />)

    fireEvent.click(getByText(label))

    expect(fn.mock.calls.length).toBe(1)
})

it('can accept a default input value', () => {
    const theValue = '--some-value--'
    const { container, getByText } = render(<AcceptUrl value={theValue} />)
    const input = container.querySelector('input')

    expect(input.value).toBe(theValue)
})
