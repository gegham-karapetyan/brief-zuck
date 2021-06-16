const isPhone = (value) => {
  const re = /^[\d+\-()\s]+$/;
  return re.test(value);
};
export default isPhone;
