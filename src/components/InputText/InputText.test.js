import React from 'react';
import { render } from '@testing-library/react';
import InputText from '.';


describe("InputText", () => {
  it("should match snapshot", () => {
    const { getByText } = render(<InputText />);
    const linkElement = getByText(/InputText works!/i);
    expect(linkElement).toBeInTheDocument();
  });
});