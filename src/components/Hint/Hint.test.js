import React from 'react';
import { render } from '@testing-library/react';
import Hint from '.';


describe("Hint", () => {
  it("should match snapshot", () => {
    const { getByText } = render(<Hint />);
    const linkElement = getByText(/Hint works!/i);
    expect(linkElement).toBeInTheDocument();
  });
});