//1. Date 객체생성
let date1 = new Date();
// console.log(date1);

let date2 = new Date(1997, 1, 1, 23, 57, 58);
// console.log(date2);

//2. timeStamp : 시간을 숫자로 표현
let date3 = new Date();
let ts1 = date3.getTime();
// console.log(date3);
// console.log(ts1);
let date4 = new Date(ts1+10000);
// console.log(date4);

//3. 시간을 추출하는 방법
let date5 = new Date();
let year = date5.getFullYear();
let month = date5.getMonth()+1;
let date = date5.getDate();
let hour = date5.getHours();
let minute = date5.getMinutes();
let second = date5.getSeconds();
let day = date5.getDay();
//day: 0 일요일, 1 월요일 ~~
// console.log(date5);
// console.log(year,month,date,hour,minute,second,day);

//4. 시간을 설정할 수 있다.
let date6 = new Date();
date6.setFullYear(2023);
date6.setMonth(2);
// console.log(date6);

//5. 시간 빼고 날짜만 출력하기
console.log(date6.toDateString());
console.log(date6.toLocaleTimeString());

//6. 로컬시간출력하기
console.log(date6.toLocaleString());