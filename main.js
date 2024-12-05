// Boshlang‘ich darajadagi masalalar

// =====================
// 1-misol:
// Berilgan massivdagi barcha elementlarni konsolga chiqaring.

// const example1 = () => {
//   let arr = ["olma", 12, 79, "nok", "banan", 7];

//   return arr;
// };
// console.log(example1());

// =====================
// 2-misol:
// Massiv elementlarining yig‘indisini hisoblang.

// const example2 = () => {
//   let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   return sum;
// };

// console.log(example2());

// =====================
// 3-misol:
// Massivdagi eng katta elementni toping.

// const example3 = () => {
//   let arr = [1, 95, 62, 75, 3, 5];
//   let max = arr[0];
//   for (let i = 0; i < arr.length; i++) {
//     if (max < arr[i]) {
//       max = arr[i];
//     }
//   }
//   return max;
// };

// console.log(example3());

// =====================
// 4-misol:
// Massivdagi eng kichik elementni toping.

// const example4 = () => {
//   let arr = [1, 95, 62, 75, 3, 5];
//   let min = arr[0];
//   for (let i = 0; i < arr.length; i++) {
//     if (min > arr[i]) {
//       min = arr[i];
//     }
//   }
//   return min;
// };

// console.log(example4());

// =====================
// 5-misol:
// Massivdagi barcha juft sonlarni konsolga chiqaring.

// const example5 = () => {
//   let arr = [6, 59, 4, 2, 67, 9, 1, 68];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 == 0) {
//       console.log(arr[i]);
//     }
//   }
// };

// example5();

// =====================
// 6-misol:
// Massivdagi barcha toq sonlarni konsolga chiqaring.

// const example6 = () => {
//   let arr = [6, 59, 4, 2, 67, 9, 1, 68];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 == 1) {
//       console.log(arr[i]);
//     }
//   }
// };

// example6();

// =====================
// 7-misol:
// Massivdagi manfiy sonlar sonini hisoblang.

// const example7 = () => {
//   let arr = [-8, 9, 6, -1, -5, 9, 6];
//   let count = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < 0) {
//       count++;
//     }
//   }
//   return count;
// };

// console.log(example7());

// =====================
// 8-misol:
// Massivdagi musbat sonlar sonini hisoblang.

// const example8 = () => {
//   let arr = [-8, 9, 6, -1, -5, 9, 6];
//   let count = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > 0) {
//       count++;
//     }
//   }
//   return count;
// };

// console.log(example8());

// =====================
// 9-misol:
// Massivdagi elementlarning o‘rtacha qiymatini toping.

// const example9 = () => {
//   let arr = [6, 59, 4, 2, 67, 9, 1, 68];
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   return sum / arr.length;
// };

// console.log(example9());

// =====================
// 10-misol:
// Massivdagi barcha elementlarni teskari tartibda joylashtiring (massivni o‘zgartirmasdan).

// const example10 = () => {
//   let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//   for (let i = arr.length - 1; i >= 1; i--) {
//     arr.push(i);
//   }
//   return arr;
// };

// console.log(example10());

// =====================
// 11-misol:
// Massivning teskari nusxasini yarating.

// const example11 = () => {
//   let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//   return arr.reverse();
// };
// console.log(example11());

// =====================
// 12-misol:
// Massivning har bir elementini 2 ga ko‘paytiring va natijani yangi massivga saqlang.

// const example12 = () => {
//   let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//   let arr2 = [];
//   for (let i = 0; i < arr.length; i++) {
//     arr2.push(arr[i] * 2);
//   }
//   return arr2;
// };
// console.log(example12());

// =====================
// 13-misol:
// Massiv elementlari orasidan 0 qiymatlari sonini hisoblang.

// const example13 = () => {
//   let arr = [0, 9, 42, 64, 0, 27, 0, 8, 82, 8, 6, 0];
//   let count = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === 0) {
//       count++;
//     }
//   }
//   return count;
// };

// console.log(example13());

// =====================
// 14-misol:
// Massiv elementlari ichida 5 ga karrali bo‘lgan sonlarni konsolga chiqaring.

// const example14 = () => {
//   let arr = [9, 42, 60, 130, 27, 5, 9, 25];

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 5 == 0) {
//       console.log(arr[i]);
//     }
//   }
// };

// example14();

// =====================
// 15-misol:
// Massivni tartiblang (o‘sish bo‘yicha).

// const example15 = () => {
//   let arr = [6, 59, 4, 2, 67, 9, 1, 68];
//   arr.sort((a, b) => a - b);
//   return arr;
// };

// console.log(example15());

// =====================
// 16-misol:
// Massivni tartiblang (kamayish bo‘yicha).

// const example16 = () => {
//   let arr = [6, 59, 4, 2, 67, 9, 1, 68];
//   arr.sort((a, b) => b - a);
//   return arr;
// };

// console.log(example16());

// =====================
// 17-misol:
// Massivning har bir elementiga 3 qo‘shing va natijani yangi massivga saqlang.

// const example17 = () => {
//   let arr = [6, 59, 4, 2, 67, 9, 1, 68];
//   let arr2 = [];
//   for (let i = 0; i < arr.length; i++) {
// arr2.push(arr[i] + 3);
//   }
//   return arr2;
// };

// console.log(example17());

// =====================
// 18-misol:
// Massivdagi barcha musbat sonlarni alohida massivga ajrating.

// const example18 = () => {
//   let arr = [-8, 9, 6, -1, -5, 9, 6];
//   let arr2 = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > 0) {
//       arr2.push(arr[i]);
//     }
//   }
//   return arr2;
// };

// console.log(example18());

// =====================
// 19-misol:
// Massivdagi barcha manfiy sonlarni alohida massivga ajrating.

// const example19 = () => {
//   let arr = [-8, 9, 6, -1, -5, 9, 6];
//   let arr2 = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < 0) {
//       arr2.push(arr[i]);
//     }
//   }
//   return arr2;
// };

// console.log(example19());

// =====================
// 20-misol:
// Massivning faqat toq indeksdagi elementlarini konsolga chiqaring.

// const example20 = () => {
//   let arr = [-8, 9, 6, -1, -5, 9, 6];
//   let arr2 = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < 0) {
//       arr2.push(arr[i]);
//     }
//   }
//   return arr2;
// };

// console.log(example20());

// O‘rta darajadagi masalalar

// =====================
// 21-misol:
// Massivni ikkiga bo‘ling: birinchi va ikkinchi yarmalarini alohida massivlarga ajrating.

// const example21 = () => {
//   let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//   let middle = Math.ceil(arr.length / 2);
//   console.log(arr.slice(0, middle));
//   console.log(arr.slice(middle));
// };
// example21();

// =====================
// 22-misol:
// Massivda nechta element 10 dan katta ekanini aniqlang.

// const example22 = () => {
//   let arr = [6, 59, 4, 2, 67, 9, 1, 68];
//   let count = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > 10) {
//       count++;
//     }
//   }
//   return count;
// };

// console.log(example22());

// =====================
// 23-misol:
// Massivdagi barcha elementlarni 0 ga almashtiring.

// const example23 = () => {
//   let arr = [6, 59, 4, 2, 67, 9, 1, 68];
//   for (let i = 0; i < arr.length; i++) {
//     arr[i] = 0;
//   }
//   return arr;
// };
// console.log(example23());

// =====================
// 24-misol:
// Massivning birinchi elementini oxiriga o‘tkazing.

// const example24 = () => {
//   let arr = [6, 59, 4, 2, 67, 9, 1, 68];
//   let firstNum = arr.shift();
//   arr.push(firstNum);
//   return arr;
// };

// console.log(example24());

// =====================
// 25-misol:
// Massivning oxirgi elementini boshiga o‘tkazing.

// const example25 = () => {
//   let arr = [6, 59, 4, 2, 67, 9, 1, 68];
//   let firstNum = arr.pop();
//   arr.unshift(firstNum);
//   return arr;
// };

// console.log(example25());

// =====================
// 26-misol:
// Massivdan har ikkinchi elementni o‘chiring.

// const example26 = () => {
//   let arr = [6, 59, 4, 2, 67, 9, 1, 68];
//   for (let i = 1; i < arr.length; i += 2) {
//     arr.splice(i, 1);
//   }
//   return arr;
// };

// console.log(example26());

// =====================
// 27-misol:
// Massivdagi faqat manfiy elementlarni 0 bilan almashtiring.

// const example27 = () => {
//   let arr = [-8, 9, 18, -1, -5, 56, 6, -5, 13];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < 0) {
//       arr[i] = 0;
//     }
//   }
//   return arr;
// };
// console.log(example27());

// =====================
// 28-misol:
// Massivdagi har bir elementni uning indeksiga ko‘paytiring va natijani yangi massivga saqlang.

// const example28 = () => {
//   let arr = [6, 59, 4, 2, 67, 9, 1, 68];
//   let arr2 = [];
//   for (let i = 0; i < arr.length; i++) {
//     arr2.push(arr[i] * i);
//   }
//   return arr2;
// };
// console.log(example28());

// =====================
// 29-misol:
// Massivdan 3 ga bo‘linmaydigan barcha elementlarni o‘chiring.

// const example29 = () => {
//   let arr = [6, 59, 4, 2, 67, 9, 1, 68];
//   for (let i = arr.length - 1; i >= 0; i--) {
//     if (arr[i] % 3 !== 0) {
//       arr.splice(i, 1);
//     }
//   }
//   return arr;
// };

// console.log(example29());

// =====================
// 30-misol:
// Massivdagi barcha bir xil elementlarni o‘chiring (bir marta qolishi kerak).
// const example30 = () => {
//   let arr = [6, 59, 4, 2, 67, 9, 1, 68, 6, 1, 9];
//   return [...new Set(arr)];
// };
// console.log(example30());

// =====================
// 31-misol:
// Massiv elementlari orasidan faqat juft indeksdagi sonlarni yangi massivga saqlang.

// const example31 = () => {
//   let arr = [6, 59, 4, 2, 67, 9, 1, 68, 6, 1, 9];
//   let arr2 = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (i % 2 == 0) {
//       arr2.push(arr[i]);
//     }
//   }
//   return arr2;
// };
// console.log(example31());

// =====================
// 32-misol:
// Massivdan 2 ga karrali sonlarni olib tashlang.

// const example32 = () => {
//   let arr = [6, 59, 4, 2, 67, 9, 1, 68, 6, 1, 9];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 == 0) {
//       arr.splice(i, 1);
//       i--;
//     }
//   }
//   return arr;
// };

// console.log(example32());

// =====================
// 33-misol:
// Massivning faqat o‘rtadagi elementlarini olib tashlang (elementlar soni juft bo‘lsa, o‘rtadagi ikkitasini olib tashlang).
// const example33 = () => {
//   let arr = [6, 59, 4, 2, 67, 9, 1, 68];
//   let len = arr.length;

//   if (len % 2 === 0) {
//     let middle1 = len / 2 - 1;
//     arr.splice(middle1, 2);
//   } else {
//     let middle = Math.floor(len / 2);
//     arr.splice(middle, 1);
//   }

//   return arr;
// };

// console.log(example33());

// =====================
// 34-misol:
// Massivning birinchi va oxirgi elementlarini almashtiring.

// const example34 = () => {
//   let arr = [6, 59, 4, 2, 67, 9, 1, 68];
//   let temp = arr[0];
//   arr[0] = arr[arr.length - 1];
//   arr[arr.length - 1] = temp;

//   return arr;
// };

// console.log(example34());

// =====================
// 35-misol:
// Massivni boshqa massiv bilan birlashtiring.

// const example35 = () => {
//   let arr = [6, 59, 4, 2, 67, 9, 1, 68];
//   let arr2 = [1, 2, 3, 4, 5, 6, 7, 8];

//   return arr.concat(arr2);
// };
// console.log(example35());

// =====================
// 36-misol:
// Massivdagi barcha elementlarni 3 ga bo‘lingan holatda yangi massivga saqlang.

// const example36 = () => {
//   let arr = [6, 59, 4, 2, 67, 9, 1, 68];
//   let arr2 = [];
//   for (let i = 0; i < arr.length; i++) {
//     arr2.push(arr[i] / 3);
//   }
//   return arr2;
// };

// console.log(example36());

// =====================
// 37-misol:
// Massivdan manfiy sonlarni olib tashlang.

// const example37 = () => {
//   let arr = [-8, 9, 18, -1, -5, 56, 6, -5, 13];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < 0) {
//       arr.splice(i, 1);
//       i--;
//     }
//   }
//   return arr;
// };
// console.log(example37());

// =====================
// 38-misol:

// const example38 = () => {
//   let arr = [6, 59, 4, 2, 67, 9, 1, 68, 6, 1, 9];
//   for (let i = 0; i < arr.length; i++) {
//     if (i % 2 == 0) {
//       arr[i] = 0;
//     }
//   }
//   return arr;
// };
// console.log(example38());

// =====================
// 39-misol:
// const example39 = () => {
//   let arr = [6, 59, 4, 2, 67, 9, 1, 68, 6, 1, 9];
//   return [...new Set(arr)];
// };
// console.log(example39());

// =====================
// 40-misol:
// Massivning o‘rta indeksiga yangi element qo‘shing.
// const example33 = () => {
//   let arr = [6, 59, 4, 2, 67, 9, 1, 68, 9];

//   let middle = Math.floor(arr.length / 2);
//   arr.splice(middle, 0, 76);

//   return arr;
// };

// console.log(example33());

// Qiyinroq masalalar

// =====================
// 41-misol:
// Massivni ikkiga ajratib, ikkala yarmni teskari tartibda saqlang.

// const example41 = () => {
//   let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//   let middle = Math.ceil(arr.length / 2);
//   console.log(arr.slice(0, middle).reverse());
//   console.log(arr.slice(middle).reverse());
// };
// example41();

// =====================
// 42-misol:
// Massivni aylantiring (so‘nggi elementni boshiga qo‘ying).

// const example42 = () => {
//   let arr = [6, 59, 4, 2, 67, 9, 1, 68, 9];
//   let lastNum = arr.pop();
//   arr.unshift(lastNum);

//   return arr;
// };

// console.log(example42());

// =====================
// 43-misol:
// Massivni aylantiring (birinchi elementni oxiriga qo‘ying).

// const example43 = () => {
//   let arr = [6, 59, 4, 2, 67, 9, 1, 68, 9];
//   let lastNum = arr.shift();
//   arr.push(lastNum);

//   return arr;
// };

// console.log(example43());

// =====================
// 45-misol:
// Massivning eng kichik elementini o‘chiring.
// const example45 = () => {
//   let arr = [6, 59, 4, 2, 67, 9, 1, 68, 9];
//   let min = Math.min(...arr);
//   arr.splice(arr.indexOf(min), 1);

//   return arr;
// };

// console.log(example45());

// =====================
// 46-misol:
// Massivning eng katta elementini o‘chiring.

// const example46 = () => {
//   let arr = [6, 59, 4, 2, 67, 9, 1, 68, 9];
//   let max = Math.max(...arr);
//   arr.splice(arr.indexOf(max), 1);

//   return arr;
// };

// console.log(example46());

// =====================
// 50-misol:
// Massivni aylantirish (rotation) orqali 3 marta oldinga suring.
// const example50 = () => {
//   let arr = [1, 2, 3, 4, 5];
//   for (let i = 0; i < 3; i++) {
//     let lastNum = arr.pop();
//     arr.unshift(lastNum);
//   }
//   return arr;
// };

// console.log(example50());

// Qo'shimcha
// 1-misol

// const example51 = () => {
//   let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//   for (let i = 1; i < arr.length; i++) {
//     arr[i] += arr[i - 1];
//   }
//   return arr;
// };

// console.log(example51());

// 2-misol
// const example52 = () => {
//   let arr = [1, 2, 3, 4, 5, 6, 7, 8];
//   let musbat = [];
//   let manfiy = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//       musbat.push(arr[i]);
//     } else {
//       manfiy.push(arr[i]);
//     }
//   }
//   return {musbat, manfiy}
// };

// console.log(example52());
