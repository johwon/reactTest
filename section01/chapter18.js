//1단계 음식을 주문하고 만들어주는 상황
function orderFood(food, callback){
    console.log(food+"음식 주문");
    setTimeout(() => {
        callback(food);
    }, 3000);
}
/*
orderFood("떡볶이",(food)=>{
    console.log(food+"음식 3초후 완성")
})
    */

//1단계 음식을 차게 주문하는 상황
function coolFood(food, callback){
    console.log(food+"음식 차게 주문");
    setTimeout(() => {
        callback(food);
    }, 2000);
}
/*
coolFood("떡볶이",(food)=>{
    console.log(food+"음식 차게 2초후 완성")
})
*/

//1단계 음식을 냉동 주문하는 상황
function freezeFood(food, callback){
    console.log(food+"음식 냉동 주문");
    setTimeout(() => {
        callback(food);
    }, 3000);
}
/*
freezeFood("떡볶이",(food)=>{
    console.log(food+"음식 냉동 2초후 완성");
})
*/

//2단계 음식을 주문하고 받은뒤 차갑게 재요청한 상황
orderFood("떡볶이",(food)=>{
    console.log(food+"음식 3초후 완성");
    let food2 = `뜨거운 ${food}`;
    coolFood(food2,(food2)=>{
        console.log(food2+"음식 차게 2초후 완성")
    })
});

//3단계 음식주문=>차게 재요청=>냉동 재요청
orderFood("떡볶이",(food)=>{
    console.log(food+"음식 3초후 완성");
    let food2 = `뜨거운 ${food}`;
    coolFood(food2,(food2)=>{
        console.log(food2+"음식 차게 2초후 완성")
        let food3 = `차가운 ${food}`;
        freezeFood(food3,(food3)=>{
            console.log(food3+"음식 냉동 2초후 완성");
        })
    })
});