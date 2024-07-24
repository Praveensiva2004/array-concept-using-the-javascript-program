//1.removing array items by index
let arr=["apple","orange","mango","pomegranate","grapes"];
let index1=2;
arr.splice(index1,1);
console.log(arr);


// 2.index of first occerence
let myString = "hello world";
let index = myString.indexOf("o");
console.log("The index of first occurence is "+index);

//3.array with given length

let length = 5;
let newArray = Array.from({ length: length }, (v, i) => i + 1);
console.log(newArray);

let len = 5;
let array = [];
for (let i = 0; i < len; i++) {
array.push(i * 2);
}
console.log(array);

//4.array spreading

const numbers = [1, 2, 3];
console.log(...numbers);
const solution= [...numbers, 4, 5, 6];
console.log(solution);

//5.checking element

const ser = [1, 2, 3, 4, 5];
console.log(ser.includes(3)); // true
console.log(ser.includes(6));




