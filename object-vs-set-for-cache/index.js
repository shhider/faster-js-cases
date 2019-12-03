const { run1wTimes, genGuid } = require("../utils");

const dataToCache = [];
for (let i = 0; i < 1000; i++) {
  dataToCache.push({
    id: genGuid(),
    value: "balabala"
  });
}

const again = () => {
  const objCache = {};
  const setCache = new Set();
  let temp;

  run1wTimes("cache by Object - add item", () => {
    for (let i = 0; i < dataToCache.length; i++) {
      const data = dataToCache[i];
      objCache[data.id] = data;
    }
  });

  run1wTimes("cache by Set - add item", () => {
    for (let i = 0; i < dataToCache.length; i++) {
      const data = dataToCache[i];
      setCache.add(data);
    }
  });

  // run1wTimes("cache by Object - values", () => {
  //   temp = Object.keys(objCache).map(key => objCache[key]);
  // });

  // run1wTimes("cache by Set - values", () => {
  //   temp = setCache.values();
  // });

  // run1wTimes("cache by Object - delete item", () => {
  //   const index = Math.floor(Math.random() * dataToCache.length);
  //   const data = dataToCache[index];
  //   delete objCache[data.id];
  // });

  // run1wTimes("cache by Set - delete item", () => {
  //   const index = Math.floor(Math.random() * dataToCache.length);
  //   const data = dataToCache[index];
  //   setCache.delete(data);
  // });
};

again();
