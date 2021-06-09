import React from 'react';
import { render } from '@testing-library/react';
import CampaignBudget from '.';


describe("CampaignBudget", () => {
  it("should match snapshot", () => {
    const { getByText } = render(<CampaignBudget />);
    const linkElement = getByText(/CampaignBudget works!/i);
    expect(linkElement).toBeInTheDocument();
  });
});