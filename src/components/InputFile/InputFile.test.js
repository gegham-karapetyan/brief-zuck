import React from 'react';
import { render } from '@testing-library/react';
import InputFile from '.';


describe("InputFile", () => {
  it("should match snapshot", () => {
    const { getByText } = render(<InputFile />);
    const linkElement = getByText(/InputFile works!/i);
    expect(linkElement).toBeInTheDocument();
  });
});