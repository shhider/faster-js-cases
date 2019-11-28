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
  run1wTimes("cache by Object - add item", () => {
    for (let i = 0; i < dataToCache.length; i++) {
      const data = dataToCache[i];
      objCache[data.id] = data;
    }
  });

  const setCache = new Set();
  run1wTimes("cache by Set - add item", () => {
    for (let i = 0; i < dataToCache.length; i++) {
      const data = dataToCache[i];
      setCache.add(data);
    }
  });

  // const mapCache = new Map();
  // run1wTimes("cache by Map - add item", () => {
  // for (let i = 0; i < dataToCache.length; i++) {
  //   const data = dataToCache[i];
  //   mapCache.set(data.id, data);
  // }
  // });

  // let temp;
  // run1wTimes("cache by Object - forEach", () => {
  //   for (const key in objCache) {
  //     if (objCache.hasOwnProperty(key)) {
  //       temp = objCache[key];
  //     }
  //   }
  // });

  // run1wTimes("cache by Set - forEach", () => {
  //   setCache.forEach(item => {
  //     temp = item;
  //   });
  // });

  // run1wTimes("cache by Map - forEach", () => {
  //   mapCache.forEach(item => {
  //     temp = item;
  //   });
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
