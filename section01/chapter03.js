//1.숫자 양수 무한대값과 음수무한대값
let infinityValue = Infinity;
let minInfinityValue = -Infinity;
let notANumber = NaN; //not a number

//연산식결과가 나올수 있도록 형변환
let nan = 1+"10";

//덧셈으로 문자열 만들기
let name = "김" + "길동";

//템플릿리터럴 기능
let name2 = "김길동";
let myLocation = "강남";
let introduceText = "저는 "+myLocation+"에 사는"+name2+"입니다.";
let introduceText2 =`저는 ${myLocation}에 사는 ${name2}입니다.`;

//형변환 Number, parseInt(숫자 앞에 있을때만) => number타입으로 형변환됨
let str2 = "10개";
//console.log(Number(str2)+10);
//console.log(parseInt(str2)+10);

//산술연산자에서 주의할점
let num1 = 1;
let num2 = 2;
//console.log(num1/num2);

//비교연산자 (==) (!=) /(===) (!==) (타입과 값을 같이 비교)
let compA = "1";
//console.log(1===compA);

//typeof 연산자
let num3 = null;
//console.log(typeof num3);

//병합연산자 (??)
let num5 = null;
num5 = num5 ?? 10; //변수가 undefined이거나 null이면 다른값을 준다.
//console.log(num5);
