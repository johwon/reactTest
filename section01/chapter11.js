//20장 배열 메소드 요소조작
// 1. push 배열에 요소 첨가
let array1 = [1,2,3];
let count = array1.push(5);
// console.log(array1);
// console.log(count);

//2. pop 배열에서 가져옴 (뒤에서 뻄)
let array2 = [1,2,3];
let value = array2.pop();
// console.log(array2);
// console.log(value);

//3. shift (pop 기능 but 앞에서 뺌) : 문제점 있음음
let array3 = [1,2,3];
let value2 = array3.shift();
// console.log(array3);
// console.log(value2);

//4. unshift (push 기능과 같으나 위치 앞에서 넣음) : 문제점 있음
let array4 = [1,2,3];
let value4 = array4.unshift(5,6);
// console.log(array4);
// console.log(value4);

//5. tosorted() : 기존의 배열을 정렬을 하는 것이 아니라, 새로 정렬된 배열을 리턴
let array5 = ["c", "a", "b"];
const array6 = array5.toSorted();
console.log(array5);
console.log(array6);




