import React from 'react';
import { render } from '@testing-library/react';
import InputSubmit from '.';


describe("InputSubmit", () => {
  it("should match snapshot", () => {
    const { getByText } = render(<InputSubmit />);
    const linkElement = getByText(/InputSubmit works!/i);
    expect(linkElement).toBeInTheDocument();
  });
});