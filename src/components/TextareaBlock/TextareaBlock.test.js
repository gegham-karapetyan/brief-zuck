import React from 'react';
import { render } from '@testing-library/react';
import TextareaBlock from '.';


describe("TextareaBlock", () => {
  it("should match snapshot", () => {
    const { getByText } = render(<TextareaBlock />);
    const linkElement = getByText(/TextareaBlock works!/i);
    expect(linkElement).toBeInTheDocument();
  });
});