import React from 'react';
import { render } from '@testing-library/react';
import Textarea from '.';


describe("Textarea", () => {
  it("should match snapshot", () => {
    const { getByText } = render(<Textarea />);
    const linkElement = getByText(/Textarea works!/i);
    expect(linkElement).toBeInTheDocument();
  });
});