import React from 'react';
import { render } from '@testing-library/react';
import InputPicker from '.';


describe("InputPicker", () => {
  it("should match snapshot", () => {
    const { getByText } = render(<InputPicker />);
    const linkElement = getByText(/InputPicker works!/i);
    expect(linkElement).toBeInTheDocument();
  });
});