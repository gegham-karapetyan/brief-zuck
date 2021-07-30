import React from 'react';
import { render } from '@testing-library/react';
import MediaTypes from '.';


describe("MediaTypes", () => {
  it("should match snapshot", () => {
    const { getByText } = render(<MediaTypes />);
    const linkElement = getByText(/MediaTypes works!/i);
    expect(linkElement).toBeInTheDocument();
  });
});