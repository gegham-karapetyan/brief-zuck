import React from 'react';
import { render } from '@testing-library/react';
import SubGroupMan from '.';


describe("SubGroupMan", () => {
  it("should match snapshot", () => {
    const { getByText } = render(<SubGroupMan />);
    const linkElement = getByText(/SubGroupMan works!/i);
    expect(linkElement).toBeInTheDocument();
  });
});