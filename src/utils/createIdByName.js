const createIdByName = (name) => name.replace(/[\s*.,/\\()]+/g, "-");
export default createIdByName;
