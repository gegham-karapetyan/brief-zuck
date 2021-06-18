import React from 'react';
import { render } from '@testing-library/react';
import InputDownload from '.';


describe("InputDownload", () => {
  it("should match snapshot", () => {
    const { getByText } = render(<InputDownload />);
    const linkElement = getByText(/InputDownload works!/i);
    expect(linkElement).toBeInTheDocument();
  });
});