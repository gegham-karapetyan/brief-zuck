import React from 'react';
import { render } from '@testing-library/react';
import Gratitude from '.';


describe("Gratitude", () => {
  it("should match snapshot", () => {
    const { getByText } = render(<Gratitude />);
    const linkElement = getByText(/Gratitude works!/i);
    expect(linkElement).toBeInTheDocument();
  });
});