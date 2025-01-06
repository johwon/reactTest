//1. promise pending 상태
/*
const promise = new Promise(()=>{
    //2초동안 작업처리한것임
    setTimeout(() => {
        console.log("Hello");
    }, 2000);
});
*/
//2초후에 부르는게 아니라 바로 리턴된 promise 콜한것이다.
// console.log(promise);

//2. promise fulfilled상태
/*
const promise2 = new Promise((resolve, reject)=>{
    //2초동안 작업처리한것임
    setTimeout(() => {
        console.log("Hello");
        resolve("hello");
    }, 2000);
});
setTimeout(() => {
    console.log(promise2);
}, 3000);
*/

//3. promise reject상태
/*
const promise3 = new Promise((resolve, reject)=>{
    //2초동안 작업처리한것임
    setTimeout(() => {
        console.log("Hello");
        reject("실패");
    }, 2000);
});

setTimeout(() => {
    console.log(promise3);
}, 3000);
*/


//4. promise 실제 적용
/*
const promise4 = new Promise((resolve, reject)=>{
    //2초동안 작업처리한것임
    //executor처리문
    //숫자값을 주면 타입을 점검해서 number타입이면 resolve, 아니면 reject
    setTimeout(() => {
        const num = "십";
        if(typeof num === 'number'){
            resolve(num+10);
        }else{
            reject(`${num}은 숫자가 아닙니다.`)
        }
    }, 2000);
});
setTimeout(() => {
    console.log(promise4);
}, 3000);
*/

//5. promise 실제적용 성공했을때와 실패했을때를 처리한다.
const promise5 = new Promise((resolve, reject)=>{
    //2초동안 작업처리한것임
    //executor처리문
    //숫자값을 주면 타입을 점검해서 number타입이면 resolve, 아니면 reject
    setTimeout(() => {
        const num = 10;
        if(typeof num === 'number'){
            resolve(num+10);
        }else{
            reject(`${num}은 숫자가 아닙니다.`)
        }
    }, 2000);
});
/*
//성공했을때 실행하는 함수로 결과를 화면에 출력
promise5.then((value)=>{
    console.log(value);
});
//실패했을때 
promise5.catch((value)=>{
    console.log(value);
});
*/
//6. promise 실제적용 성공했을때와 실패했을때를 처리한다. => 더 편리하게 처리
//promise 체인
/*
promise5.then((value)=>{
    console.log(value);
}).catch((value)=>{
    console.log(value);
});
*/
//7. 함수를 통해서 promise실행하기
/*
function add(num){
    const promise = new Promise((resolve, reject)=>{
        setTimeout(() => {
            //const num = 10;
            if(typeof num === 'number'){
                resolve(num+10);
            }else{
                reject(`${num}은 숫자가 아닙니다.`)
            }
        }, 2000);
    });
    return promise;
}
const promise6 = add(null);

promise6.then((value)=>{
    console.log(value);
}).catch((value)=>{
    console.log(value);
});
*/
//8. 함수를 통해서 promise실행하기 두번 콜백처리한다.
function add(num){
    const promise = new Promise((resolve, reject)=>{
        setTimeout(() => {
            //const num = 10;
            if(typeof num === 'number'){
                resolve(num+10);
            }else{
                reject(`${num}은 숫자가 아닙니다.`)
            }
        }, 2000);
    });
    return promise;
};
/*
const promise7 = add(10);
promise7.then((value)=>{
    console.log("promise7="+value);
    const promise8 = add(20);
    promise8.then((result)=>{
        console.log("promise8="+result);
    }).catch((result)=>{
        console.log("promise8="+result);
    })
}).catch((value)=>{
    console.log("promise7="+value);
});
*/
//콜백지옥 해결
/*
const promise7 = add(1);
promise7.then((value)=>{
    console.log("promise7="+value);
    return add(2);
}).then((result)=>{
    console.log("promise8="+result);
    return add(null);
}).then((data)=>{
    console.log("promise9="+data);
}).catch((error)=>{
    console.log("promise7~9="+error);
});
*/

//음식을 주문하는 상황 promise chain
//1단계 음식을 주문하고 만들어주는 상황
function orderFood(food, callback){
    console.log(food+"음식 주문");
    setTimeout(() => {
        callback(food);
    }, 3000);
};

function orderFood2(food){
    const promise = new Promise((resolve, reject)=>{
        console.log(food+"음식 주문");
        setTimeout(() => {
            let flag = true;
            if(flag===true){
                resolve(food+" 완성");
            }else{
                reject(food+" 만들기 실패")
            }
        }, 3000);
    });
    return promise;
};

/*
orderFood2(false,"떡볶이").then((value)=>{
    console.log("promise10="+value);
}).catch((value)=>{
    console.log("promise10="+value);
});
*/

//1단계 음식을 차게 주문하는 상황
function coolFood(food, callback){
    console.log(food+"음식 차게 주문");
    setTimeout(() => {
        callback(food);
    }, 2000);
}

function coolFood2( food){
    const promise = new Promise((resolve, reject)=>{
        console.log(food+"음식 차게 주문");
        setTimeout(() => {
            let flag=true;
            if(flag===true){
                resolve(food+" 차갑게 완성");
            }else{
                reject(food+" 차갑게 실패")
            }
        }, 3000);
    }
    );
    return promise;
};
/*
coolFood2(true,"떡볶이").then((value)=>{
    console.log("promise10="+value);
}).catch((value)=>{
    console.log("promise10="+value);
});
*/

//1단계 음식을 냉동 주문하는 상황
function freezeFood(food, callback){
    console.log(food+"음식 냉동 주문");
    setTimeout(() => {
        callback(food);
    }, 3000);
}
function freezeFood2(food) { 
    const promise = new Promise((resolve, reject) => { 
      console.log(food + '냉동주문'); 
      setTimeout(() => { 
        let flag = true; 
        if (flag === true) { 
          resolve(food + '냉동완료'); 
        } else { 
          reject(food + '냉동미완료'); 
        } 
      }, 3000); 
    }); 
    return promise; 
  } 
/*
freezeFood2('떡볶이') 
.then((value) => { 
    console.log(value); 
}) 
.catch((error) => { 
    console.log(error); 
});
*/

//2단계 음식주문 => 차게 음식주문
/*
orderFood2("떡볶이").then((value)=>{
    console.log(value);
    return coolFood2("떡볶이")
}).then((value)=>{
    console.log(value);
})
.catch((error)=>{
    console.log(error);
});
*/
//3단계 음식주문 => 차게 음식주문 => 냉동주문
orderFood2("떡볶이").then((value)=>{
    console.log(value);
    return coolFood2("떡볶이");
})
.then((value)=>{
    console.log(value);
    return freezeFood2("떡볶이");
})
.then((value)=>{
    console.log(value);
})
.catch((error)=>{
    console.log(error);
});