import React from 'react';
import { render } from '@testing-library/react';
import Buttons from '.';


describe("Buttons", () => {
  it("should match snapshot", () => {
    const { getByText } = render(<Buttons />);
    const linkElement = getByText(/Buttons works!/i);
    expect(linkElement).toBeInTheDocument();
  });
});