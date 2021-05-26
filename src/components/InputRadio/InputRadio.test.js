import React from 'react';
import { render } from '@testing-library/react';
import InputRadio from '.';


describe("InputRadio", () => {
  it("should match snapshot", () => {
    const { getByText } = render(<InputRadio />);
    const linkElement = getByText(/InputRadio works!/i);
    expect(linkElement).toBeInTheDocument();
  });
});