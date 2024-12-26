//1.forEach(함수(value,index,객체배열)) 리턴 없음 : 향상된 포문 for( 객체 : 객체배열)
const array = [1,2,3,4];
const array2 = [];

//일반포문
for(let i=0;i<array.length;i++){
    //console.log(array[i]);
}

//foreach
array.forEach((v)=>array2.push(v*2));
//console.log(array2);
   

//2.foreach
// array.forEach((v, i, a)=>{
//     console.log(v);
//     console.log(i);
//     console.log(a);
//     console.log("======");
// });


let array3 = [ 
    { name: "구길동", age:10 }, 
    { name: "홍길동", age:10 }, 
    { name: "저길동", age:10 }, 
    { name: "말길동", age:10 }, 
    { name: "홍길동", age:20 }, 
]; 
//3.find
const findValue = array3.find((v)=>{
    return v.name === "홍길동";
});

//console.log(findValue);

//4.filter
const findArray = array3.filter((v)=>{
    return v.name === "홍길동";
});
//console.log(findArray);

//5.Map 내가 요청하는 정보를 배열로 포함시켜서 리턴
const nameArray = array3.map((v)=>{
    return v.name;
});

//console.log(nameArray);

//6.findIndex 해당된 객체의 인덱스를 리턴한다.
const findIdx = array3.findIndex((v)=>{
    return v.name=== "말길동";
});

// console.log(findIdx);

//7.includes
const flag = array.includes(5);
// console.log(flag);

//8.indexof 값의 인덱스를 찾아줌. 같은 값이면 제일 처음값
const array6 = [1,2,2,2,4]
const value = array6.indexOf(2);
// console.log(value);

//9.slice 
const array7 = [1,2,3,4,5,6,7];
const sliceArray = array7.slice(2,5); //2부터 5이전까지
// console.log(sliceArray);

let array8 = [
    { name: "구길동", age:10 }, 
    { name: "홍길동", age:10 }, 
    { name: "저길동", age:10 }, 
    { name: "말길동", age:10 }, 
    { name: "홍길동", age:20 }
]

const sliceArray2 = array8.slice(2,4); 
// console.log(sliceArray2);

//10.concat
let array9 = [
    { name: "구길동", age:10 }, 
    { name: "홍길동", age:10 }, 
];
let array10 = [
    { name: "저길동", age:10, tall:180}, 
    { name: "말길동", age:10 }, 
];
const returnArray = array9.concat(array10);
// console.log(returnArray);

//11.sort
const array11 = [1,10,2,20,3,30];
array11.sort();
// console.log(array11);

array11.sort((a,b)=>{return a-b});
// console.log(array11);

//12.join 합치기
const array12 = ["김동진","님","안녕하세요","반가워요"];
// console.log(array12.join("="));

//13.for of (자바의 향상된 for문)
let array13 = [1, 2, 3]; 
for (let item of array13) { 
//   console.log(item); 
}

//14.for in
const person = {
    name:"kim",
    age:25,
    tall:180
};
for (let key in person) { 
    const value = person[key]; 
    console.log(key, value); 
  }