import React from 'react';
import { render } from '@testing-library/react';
import Paragraph from '.';


describe("Paragraph", () => {
  it("should match snapshot", () => {
    const { getByText } = render(<Paragraph />);
    const linkElement = getByText(/Paragraph works!/i);
    expect(linkElement).toBeInTheDocument();
  });
});