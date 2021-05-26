import React from 'react';
import { render } from '@testing-library/react';
import HyperactiveBuyers from '.';


describe("HyperactiveBuyers", () => {
  it("should match snapshot", () => {
    const { getByText } = render(<HyperactiveBuyers />);
    const linkElement = getByText(/HyperactiveBuyers works!/i);
    expect(linkElement).toBeInTheDocument();
  });
});