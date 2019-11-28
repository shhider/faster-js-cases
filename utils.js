exports.genGuid = prefix => {
  let len = 17;
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const results = [];
  while ((len -= 1)) {
    results.push(chars[parseInt(Math.random() * 62)]);
  }
  const guid = results.join("");

  if (prefix) {
    return `${prefix}-${guid}`;
  }
  return guid;
};

exports.run1wTimes = (name, fn, times = 10000) => {
  console.time(name);
  for (let i = 0; i < times; i++) {
    fn(i);
  }
  console.timeEnd(name);
};
