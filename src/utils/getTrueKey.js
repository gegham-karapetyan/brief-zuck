const getTrueKey = (obj) => {
  for (let currency in obj) {
    if (obj[currency]) return currency;
  }
};
export default getTrueKey;
