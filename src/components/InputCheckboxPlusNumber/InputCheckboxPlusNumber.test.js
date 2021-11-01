import React from 'react';
import { render } from '@testing-library/react';
import InputCheckboxPlusNumber from '.';


describe("InputCheckboxPlusNumber", () => {
  it("should match snapshot", () => {
    const { getByText } = render(<InputCheckboxPlusNumber />);
    const linkElement = getByText(/InputCheckboxPlusNumber works!/i);
    expect(linkElement).toBeInTheDocument();
  });
});