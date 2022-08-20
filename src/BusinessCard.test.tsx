import React from 'react';
import {render, screen} from '@testing-library/react';
import {ExampleBusinessCard} from "./index";

test('renders some stuff', () => {
    render(ExampleBusinessCard)
    const preCodeElt = screen.getByText(/ubernetes/i);
    expect(preCodeElt).toBeInTheDocument();
    // @ts-ignore
    // eslint-disable-next-line testing-library/no-node-access
    expect(preCodeElt.parentNode.parentNode.parentNode).toContain("clean, and well-documented")
});


test('renders skill list', () => {

    expect('my face is happy and smiling :)').toContain('happy')
})
