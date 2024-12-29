//비동기 처리 작업진행
function task(){
    setTimeout(()=>{
        console.log("hello");
    },3000); 
}
// task();

//=============================
function task2(callback){
    setTimeout(callback,3000); 
}
//함수선언, 표현식(익명함수), 화살표함수 다 똑같음
let callback = ()=>{
    console.log("hello2")
};

//콜백함수 직접 줌
task2(()=>{
    console.log("hello2");
});
// task2(callback);

//============================================
//비동기 처리 작업진행(매개변수 주는 경우)
function add(a,b){
    setTimeout(()=>{
        const sum = a + b;
        console.log(sum);
    },3000); 
}
// add(10,20);

//문제점1
function add2(a,b, callback2){
    setTimeout(callback2,3000); 
}
//안됨 NaN (a,b 매개변수를 넣을 수 없음
add2(10,20,(a,b)=>{
    const sum = a+b;
    console.log("add2="+sum);
})
//문제점2. 
function add21(a,b, callback2){
    setTimeout(callback2(a,b),3000); 
}
//안됨 (값은 나오나 set timeout이 적용 안됨)
add21(20,20,(a,b)=>{
    const sum = a+b;
    console.log("add21="+sum);
})
//해결하려면
function add22(a,b, callback2){
    setTimeout(()=>{
        callback2(a,b)
    },3000); 
}
add22(10,20,(a,b)=>{
    const sum = a+b;
    console.log("add22="+sum);
})


function add3(a,b, callback3){
    setTimeout(()=>{
        const sum = a + b;
        callback3(sum);
    },3000); 
}

add3(100,200,(sum)=>{
    console.log(sum);
})