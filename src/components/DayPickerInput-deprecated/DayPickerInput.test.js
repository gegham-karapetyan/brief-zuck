import React from 'react';
import { render } from '@testing-library/react';
import DayPickerInput from '.';


describe("DayPickerInput", () => {
  it("should match snapshot", () => {
    const { getByText } = render(<DayPickerInput />);
    const linkElement = getByText(/DayPickerInput works!/i);
    expect(linkElement).toBeInTheDocument();
  });
});