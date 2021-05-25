import React from 'react';
import { render } from '@testing-library/react';
import InputCheckbox from '.';


describe("InputCheckbox", () => {
  it("should match snapshot", () => {
    const { getByText } = render(<InputCheckbox />);
    const linkElement = getByText(/InputCheckbox works!/i);
    expect(linkElement).toBeInTheDocument();
  });
});