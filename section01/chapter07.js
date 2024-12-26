//1. 배열생성, 배열리터럴럴
let arrayA = new Array();
let arrayB = [];

//2. 배열 들어올 수 있는 멤버 - 기본타입 5가지, 객체타입 1(3종류 객체,배열,함수) 다 가능
let arrayC = [
    1,
    1.5,
    true,
    "hello",
    undefined,
    null,
    {},
    [],
    ()=>{
        console.log("나는 함수다.")
    }
];

console.log(arrayC[8]());
