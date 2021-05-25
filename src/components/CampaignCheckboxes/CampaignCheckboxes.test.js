import React from 'react';
import { render } from '@testing-library/react';
import CampaignCheckboxes from '.';


describe("CampaignCheckboxes", () => {
  it("should match snapshot", () => {
    const { getByText } = render(<CampaignCheckboxes />);
    const linkElement = getByText(/CampaignCheckboxes works!/i);
    expect(linkElement).toBeInTheDocument();
  });
});