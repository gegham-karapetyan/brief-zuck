import React from 'react';
import { render } from '@testing-library/react';
import Loader from '.';


describe("Loader", () => {
  it("should match snapshot", () => {
    const { getByText } = render(<Loader />);
    const linkElement = getByText(/Loader works!/i);
    expect(linkElement).toBeInTheDocument();
  });
});