// let area1 = getArea(10,20);
// console.log(area1);

//1. 함수 선언식 - 함수 호이스팅 발생:자동으로 끌어올려진다
// function getArea(width, height){
//     return width*height;
// }

//2. 함수 표현식 - 호이스팅 발생이 안된다.
// let getArea = function(width, height){
//     return width*height;
// }

//3. 화살표 함수 - 호이스팅 발생이 안된다.
// let getArea = (width, height)=>{
// return width*height;
// };

//중첩함수
function getArea(width, height){
    function anotherFunction(){
        console.log(width);
    }
    return width*height;
}

let area1 = getArea(10,20);
console.log(area1);
