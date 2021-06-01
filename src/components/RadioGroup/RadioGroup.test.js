import React from 'react';
import { render } from '@testing-library/react';
import RadioGroup from '.';


describe("RadioGroup", () => {
  it("should match snapshot", () => {
    const { getByText } = render(<RadioGroup />);
    const linkElement = getByText(/RadioGroup works!/i);
    expect(linkElement).toBeInTheDocument();
  });
});