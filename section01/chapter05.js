//콜백함수
//1. 함수 선언식
function checkMood(mood, type){
    if(mood === "good"){
        if(type === 1){
            sing();
        }else{
            dance();
        }
    }else{
        if(type === 1){
            cry();
        }else{
            angry();
        }
    }
}

//콜백처리
function checkMood2(mood, goodCallback, badCallback){
    if(mood === "good"){
        goodCallback();
    }else{
        badCallback();
    }
}

// checkMood("good", 2);
/*
checkMood2("good",()=>{
    console.log("ACTION :: dance2");
}, ()=>{
    console.log("ACTION :: angry1");
});
*/

// function sing(){
//     console.log("ACTION :: sing");
// }
// function cry(){
//     console.log("ACTION :: cry");
// }
// function angry(){
//     console.log("ACTION :: angry");
// }
// function dance(){
//     console.log("ACTION :: dance");
// }


//콜백처리2
/*
function repeat(){
    for(let i=1;i<=10;i++){
        console.log(i+"");
    }
}
    */

function repeat(callback){
    for(let i=1;i<=10;i++){
        callback(i);
    }
}

repeat(calculate);

function calculate(i){
    console.log(i*2);
} //함수호이스팅
