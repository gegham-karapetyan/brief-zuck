import React from 'react';
import { render } from '@testing-library/react';
import Footer from '.';


describe("Footer", () => {
  it("should match snapshot", () => {
    const { getByText } = render(<Footer />);
    const linkElement = getByText(/Footer works!/i);
    expect(linkElement).toBeInTheDocument();
  });
});