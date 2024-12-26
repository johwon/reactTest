//객체 순회 방법
const person = {
    name:"kim",
    age:25,
    tall:180
};

console.log(person.name);
console.log(person["name"]);

//객체에서 멤버변수이름을 배열로 가져오기
const personKey = Object.keys(person);
console.log(personKey); //객체니까 toString으로 찍어지는것
//반복문을 이용해 객체값에 모든 원소값을 출력한다.
for(let i=0;i<personKey.length;i++){
    let key = personKey[i];
    console.log(person[key]);
};


//멤버변수 value를 배열로 가져오기
const personValue = Object.values(person);
console.log(personValue); //객체니까 toString으로 찍어지는것
