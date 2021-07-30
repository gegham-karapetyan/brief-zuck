import React from 'react';
import { render } from '@testing-library/react';
import test from '.';


describe("test", () => {
  it("should match snapshot", () => {
    const { getByText } = render(<test />);
    const linkElement = getByText(/test works!/i);
    expect(linkElement).toBeInTheDocument();
  });
});