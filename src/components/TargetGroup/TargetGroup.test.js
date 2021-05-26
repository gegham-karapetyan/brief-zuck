import React from 'react';
import { render } from '@testing-library/react';
import TargetGroup from '.';


describe("TargetGroup", () => {
  it("should match snapshot", () => {
    const { getByText } = render(<TargetGroup />);
    const linkElement = getByText(/TargetGroup works!/i);
    expect(linkElement).toBeInTheDocument();
  });
});