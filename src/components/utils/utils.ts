export const addNodeElem = (obj: any, key: string) => {
  let newObj = obj;
  Object.keys(newObj).forEach((e, i) => {
    if (e === key) {
      newObj[e] = { ...newObj[e], [`${key}-${Object.keys(newObj[e]).length}`]: {} };
    } else {
      addNodeElem(newObj[e], key);
    }
  });
  return newObj;
};

export const keyToArrayOfKeys = (name: string) => {
  const result: any = [];
  name.split("-").forEach((_, i) => {
    result.push(
      name
        .split("-")
        .slice(0, i + 1)
        .join("-")
    );
  });
  return result;
};
