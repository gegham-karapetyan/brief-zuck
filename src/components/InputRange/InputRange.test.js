import React from 'react';
import { render } from '@testing-library/react';
import InputRange from '.';


describe("InputRange", () => {
  it("should match snapshot", () => {
    const { getByText } = render(<InputRange />);
    const linkElement = getByText(/InputRange works!/i);
    expect(linkElement).toBeInTheDocument();
  });
});