import React from 'react';
import { render } from '@testing-library/react';
import InputLink from '.';


describe("InputLink", () => {
  it("should match snapshot", () => {
    const { getByText } = render(<InputLink />);
    const linkElement = getByText(/InputLink works!/i);
    expect(linkElement).toBeInTheDocument();
  });
});