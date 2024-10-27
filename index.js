// 1 ----------

// const arr = [1, 2, 2, 2, 3, 4, 4, 5];

// const t = new Set(arr);

// alert([...t]);

// 2 ----------

// const array = ["apple", "banana", "apple", "orange", "banana", "banana"];

// const m = new Map();

// array.forEach((item) => {
//   if (m.has(item)) {
//     const t = m.get(item);
//     m.set(item, t + 1);
//   } else {
//     m.set(item, 1);
//   }
// });

// console.log(m);

// 3 ----------

// const arr = [1, 2, 3, 4];
// const m = new Map();

// arr.forEach((item) => {
//   m.set(item, item ** 2);
// });

// console.log(m);

// 4 ----------

// const arr = [1, 2, 3, 2, 4, 1];

// const takror = [...new Set(arr)];

// console.log(takror);

// 5 ----------

// const array = [10, 15, 20, 25, 30];
// const threshold = 10;
// const qiymat = new Set();

// array.forEach((item) => {
//   if (item > threshold) {
//     qiymat.add(item);
//   }
// });

// console.log(qiymat);

// 7 ----------

// const arr = [1, 1, 2, 3, 3, 4, 5, 5];
// const qiymat = [...new Set(arr)];
// console.log(qiymat);

// 8 ----------

// const keys = ["name", "age", "city"];
// const values = ["John", 30, "New York"];

// const obj = {};

// keys.forEach((key, index) => {
//   obj[key] = values[index];
// });

// console.log(obj);
