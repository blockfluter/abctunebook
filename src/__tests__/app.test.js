jest.mock('../makeDomEditor')

import React from "react";
import 'react-testing-library/cleanup-after-each'
import { render } from "react-testing-library";
import App from "../app";
import { Provider } from 'react-redux';
import { store } from '../store';

it("can render a div", () => {
    const { container } = render(<Provider store={store}><App /></Provider>);
    const div = container.querySelector("div");
    expect(div).toBeDefined();
});
