import React from 'react';
import { render } from '@testing-library/react';
import Hero from '.';


describe("Hero", () => {
  it("should match snapshot", () => {
    const { getByText } = render(<Hero />);
    const linkElement = getByText(/Hero works!/i);
    expect(linkElement).toBeInTheDocument();
  });
});