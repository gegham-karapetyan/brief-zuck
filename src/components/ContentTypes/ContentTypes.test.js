import React from 'react';
import { render } from '@testing-library/react';
import ContentTypes from '.';


describe("ContentTypes", () => {
  it("should match snapshot", () => {
    const { getByText } = render(<ContentTypes />);
    const linkElement = getByText(/ContentTypes works!/i);
    expect(linkElement).toBeInTheDocument();
  });
});