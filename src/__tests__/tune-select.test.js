import 'react-testing-library/cleanup-after-each'
import React from 'react'
import { render, fireEvent } from 'react-testing-library'
import { TuneSelect } from '../components/tune-select';

describe('<TuneSelect/>', () => {
	it('renders without crashinc', () => {
		const { container, getByTestId } = render(<TuneSelect />);
		
	});
});

