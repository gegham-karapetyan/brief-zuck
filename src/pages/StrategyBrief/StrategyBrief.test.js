import React from 'react';
import { render } from '@testing-library/react';
import StrategyBrief from '.';


describe("StrategyBrief", () => {
  it("should match snapshot", () => {
    const { getByText } = render(<StrategyBrief />);
    const linkElement = getByText(/StrategyBrief works!/i);
    expect(linkElement).toBeInTheDocument();
  });
});