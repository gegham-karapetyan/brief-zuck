import React from 'react';
import { render } from '@testing-library/react';
import Input2 from '.';


describe("Input2", () => {
  it("should match snapshot", () => {
    const { getByText } = render(<Input2 />);
    const linkElement = getByText(/Input2 works!/i);
    expect(linkElement).toBeInTheDocument();
  });
});