jest.mock('../abc-integration/make-dom-editor')

import React from "react";
import { MemoryRouter } from 'react-router';
import 'react-testing-library/cleanup-after-each'
import { render } from "react-testing-library";
import App from "../app";
import { Provider } from 'react-redux';
import { store } from '../store';

it("can render a div", () => {
    const { container } = render(<MemoryRouter initialEntries={[ '/view' ]}><Provider store={store}><App /></Provider></MemoryRouter>);
    const div = container.querySelector("div");
    expect(div).toBeDefined();
});
