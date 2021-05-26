import React from 'react';
import { render } from '@testing-library/react';
import SubGroupWoman from '.';


describe("SubGroupWoman", () => {
  it("should match snapshot", () => {
    const { getByText } = render(<SubGroupWoman />);
    const linkElement = getByText(/SubGroupWoman works!/i);
    expect(linkElement).toBeInTheDocument();
  });
});