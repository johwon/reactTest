//단락평가 - &&일때 앞문장에 false면 뒷문장 실행 안함함
let a = false;
let b = true;

let funca = ()=>{
  console.log("funca");
  return false;  
};

let funcb = ()=>{
  console.log("funcb");
  return true;  
}; 

//console.log(funca() || funcb());

//실제 사용 방법
//함수선언, 표현식, 화살표함수
function printName(person){
    const name = person && person.name; //person이 비어있으면 false이므로 person.name이 실행x 그러므로 false값이 대입됨됨
    console.log(name||"person값이 없음");   //name이 false이므로 or연산자에 의해 "person값이 없음" 까지 출력됨
};
printName();
printName({name:"kdj"});

function printName2(person){
    if(typeof person === 'object'){
        console.log(person.name);
    }else{
        console.log("객체아님");
    }
};
printName2();
printName2({name:"kdj"});

