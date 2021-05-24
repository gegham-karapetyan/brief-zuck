import React from 'react';
import { render } from '@testing-library/react';
import InputSocial from '.';


describe("InputSocial", () => {
  it("should match snapshot", () => {
    const { getByText } = render(<InputSocial />);
    const linkElement = getByText(/InputSocial works!/i);
    expect(linkElement).toBeInTheDocument();
  });
});