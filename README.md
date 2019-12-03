# JavaScript 不同写法的性能对比

## Object

### 遍历键名和键值

-   ✅ `Object.keys`
-   🚫 `Object.entries`
-   [测试代码](./object-entries-vs-keys/index.js)

## 页面数据缓存

### 数据去重缓存

-   ✅ `new Set()`
-   🚫 `{}`
-   [测试代码](./object-vs-set-for-cache/index.js)

### 数据键值对缓存

-   ✅ `new Map()`
-   🚫 `{}`
