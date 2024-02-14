const arre = ["random", "text", "string", "hello", "world"];
const arr = [22, 41, 55, 31, 2, 54];
const arr2D = [
  [1, 2],
  [3, 4],
  [5, 6],
];

// 1. forEach()
// arre.forEach((item,index) => arre[index] =item.toUpperCase());
// console.log(arre)

// 2. map()
// const newArre = arre.map((element) => element.toUpperCase());
// console.log(newArre);

// 3. flatMap();
// const newArr2d = arr2D.flatMap((subArr) => subArr.map((e) => e * 2));
// console.log(newArr2d);

// 4. filter();
// const newArr = arre.filter((element) => element.length > 5);
// console.log(newArr);

// 5. reduce();
// const findMax= arr.reduce((acc,curr) => {
//   return acc + curr;

// },0);
// console.log(findMax);

// 6. every();
//  It checks if all the elements in the array pass the test.

// let over18 = arr.every((element) => element > 18);
// console.log(over18)

// 7. some();
// It checks if some of the value in the array pass the test.

// let over18 = arr.some(ele => ele > 18);
// console.log(over18);
