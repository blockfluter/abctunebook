import 'react-testing-library/cleanup-after-each'
import React from 'react'
import { render, fireEvent } from 'react-testing-library'
import { TuneDisplay } from '../components/tune-display';

describe('run a test or two', () => {
	it('renders elements with assigned ids', () => {
		const { container, getByTestId } = render(<TuneDisplay midiId="testm1" warningsId="testw1" canvasId="testc1" textId="testt1" />);
		
		expect(getByTestId('testt1').id).toBe('testt1');
		expect(getByTestId('testm1').id).toBe('testm1');
		expect(getByTestId('testw1').id).toBe('testw1');
		expect(getByTestId('testc1').id).toBe('testc1');
	});
});

