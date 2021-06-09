import React from 'react';
import { render } from '@testing-library/react';
import DataPicker from '.';


describe("DataPicker", () => {
  it("should match snapshot", () => {
    const { getByText } = render(<DataPicker />);
    const linkElement = getByText(/DataPicker works!/i);
    expect(linkElement).toBeInTheDocument();
  });
});