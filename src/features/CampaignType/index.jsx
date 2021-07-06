import CheckboxesGroup from "../CheckboxesGroup";

function isValidCheckboxes(obj) {
  return Object.values(obj).some((i) => i);
}
const CampaignType = (props) => {
  return <CheckboxesGroup {...props} isValidCheckboxes={isValidCheckboxes} />;
};

export default CampaignType;
