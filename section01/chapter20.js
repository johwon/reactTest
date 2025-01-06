//async : new Promise() 사용하지 않고 비동기 처리하는 함수
async function getData(){
    return {name:"kkk", id:"kkk1234"};
}
// console.log(getData());

//async 
async function getData2(){
    const promise = new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve({name:"kkk", id:"kkk1234"});
        }, 2000);
    });
    return promise;
}

// console.log(getData2());

//3. await : async 함수 내부에서만 사용이 가능한 키워드
//비동기함수가 다 처리되기를 기다리는 역할
async function printData() {
    getData()
    .then((value)=>{
        console.log(value);
    })
    .catch((error)=>{
        console.log(error);
    })
}

async function printData2() {
    const data = await getData();
    console.log(data);
}
printData2();