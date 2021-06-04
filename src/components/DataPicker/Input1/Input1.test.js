import React from 'react';
import { render } from '@testing-library/react';
import Input1 from '.';


describe("Input1", () => {
  it("should match snapshot", () => {
    const { getByText } = render(<Input1 />);
    const linkElement = getByText(/Input1 works!/i);
    expect(linkElement).toBeInTheDocument();
  });
});