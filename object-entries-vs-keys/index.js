const { run1wTimes, genGuid } = require("../utils");

const testObj = {};
for (let i = 0; i < 100; i++) {
  const str = genGuid();
  testObj[str] = str;
}

const again = () => {
  let key, value;

  run1wTimes("Object.entries", () => {
    Object.entries(testObj).forEach(([k, v]) => {
      key = k;
      value = v;
    });
  });

  run1wTimes("Object.keys", () => {
    Object.keys(testObj).forEach(k => {
      key = k;
      value = testObj[k];
    });
  });
};

again();
