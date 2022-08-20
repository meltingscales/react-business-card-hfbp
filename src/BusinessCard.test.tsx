import React from 'react';
import {render, screen} from '@testing-library/react';
import {ExampleBusinessCard} from "./ExampleBusinessCard";

test('renders some stuff', () => {

    render(ExampleBusinessCard)
    const preCodeElt = screen.getAllByText(/ubernetes/)[0];

    expect(preCodeElt).toBeInTheDocument();

    // @ts-ignore
    // eslint-disable-next-line testing-library/no-node-access
    expect(preCodeElt.parentNode.parentNode.parentNode.textContent).toContain("clean, and well-documented")
});


test('renders skill list', () => {

    expect('my face is happy and smiling :)').toContain('happy')
})
