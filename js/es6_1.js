const data = [1,2];

// if (data.length === 0){
//     console.log('빈 배열입니다.')
// }else{
//     console.log('배열이 차있습니다')
// }

data.length === 0 ? console.log('빈 배열'):console.log('배열이 차있음');

// function printData(name){
//     console.log(name);
// }
// printData();


/*
//구조분해할당
const data2 = {
    name: 'dave lee',
    age: 30,
    hobby: 'coding'
}
let {name,age} = data2;
console.log(name,age)
*/

// let data3 = [1,2,3];

// const[item1,item2,item3] = data3;
// console.log(item1,item2,item3)

// let data3 = [1,2,3,4,5];

// const[item1,...item2 ] = data3;
// console.log(item1);
// console.log(item2);


/* 마지막 순서에 데이터추가 */
const dataA = [1,2,3];
dataA.push(5,'abc')
console.log(dataA);


/* 마지막 순서 데이터 가져오기  */
const dataB = [1,2,3];
console.log(dataB.pop());
console.log(dataB);


/* 배열의 첫번째 아이템 삭제하고, 뒤에 있는 아이템을 앞으로 당김 */
const dataC = [1,2,3];
dataC.shift();
console.log(dataC);


/* 배열 2개 서로 합치기 */
const dataTest01 = [1,2];
const dataTest02 = ['dave',3];
const dataTest03 = dataTest01.concat(dataTest02);
console.log(dataTest03)


/* 아이템 사이에 특정 문자열을 넣어서 배열을 연결
join 참고링크 : https://mainia.tistory.com/4266 */
const dataD = [1,2,3,4,5,6];
let dataD02 = dataD.join('-');
console.log(dataD02);


/* 배열의 순서를 역순으로 */
const dataE = [1,2,3,4,5,6];
dataE.reverse();
console.log(dataE);


/* 배열의 일부분 반환 */
const dataF = [1,2,3,4,5,6];
let dataF02 = dataF.slice(3,6);
console.log(dataF02);


/* for문을 대체해서 간단히 배열의 각 아이템을 가져올 수 있음.
forEach 참고링크 : https://meanbymin.tistory.com/57 */
const dataG = [1,2,3,4,5,6];
dataG.forEach(item =>{
    console.log(item);
});


/* 
map 참고링크 : https://mjn5027.tistory.com/80
*/
const dataH = [1,2,3,4,5,6];
const dataH02 = dataH.map(item => item * 2)
console.log(dataH02);


/* index번호를 찾을 수 있음 */
const dataIdx = [1,2,'dave',6];
console.log(dataIdx.indexOf('dave'));


/* 배열의 아이템이 객체일 경우, 특정위치의 데이터 인덱스번호를 찾을 수 있음 */
const myArray = [
    {
        id: 1,
        name: 'dave lee'
    },
    {
        id: 2,
        name: 'Alex'
    }
];

// console.log(myArray.indexOf('Alex'));
console.log(myArray.findIndex(item => item.name === 'Alex'));
/* 인덱스 번호가 아닌 객체 자체를 가져오고 싶은 경우 */
console.log(myArray.find(item => item.name === 'Alex'));


/* 배열에서 특정 조건에 맞는 아이템만 추출할 때 */
let myArraySecond = [1,2,3,4,5,6,7,8,9,10];
let even = myArraySecond.filter(item => item % 2 === 0);
console.log(even);




// -----

/* 변수값 교환 */
let a = 1;
let b = 2;

[a,b] = [b,a]
console.log(a,b);

/*
let c = a;
a = b;
b = c;
*/


/* 함수 리턴시 여러 데이터 남겨주기 (+ 구조분해할당)*/
function getData(){
    return [1,2,3];
}

let [d,e,f] = getData();
console.log(d,e,f);


/* 문자열 분리 */
let dataSplit = 'dave lee,fun-coding,coding';

let [name,brand,hobby] = dataSplit.split(',');
console.log(name,brand);



/* rest 파라미터 */
function restFunc(...rest){
    let [item1,item2,item3,item4,item5] = rest;
    console.log(item1,item2);
}

restFunc(1,2,3,4,5);


// /* 따로 출력할경우 */
// function restFunc(item1,item2,...rest){
//     console.log(rest);
//     /* 
//     item1 = 1
//     item2 = 2
//     (나머지) rest = 3,4,5
//     */
//    /* ...rest 부분은 나머지를 뜻하기 때문에 ...앞에 추가 인자값이 존재할 수 없고,
//     인자보다 앞에 있어도 안됨.
//    */
// }


/* 스프레드 파라미터 */
const dataSpread = [1,2,3];
// console.log(dataSpread[0],dataSpread[1],dataSpread[2]);
console.log(...dataSpread)


/* 기존 배열로 새로운 배열 구성 */
const spreadArray01 = [1,2,3];
const spreadArray02 = [...spreadArray01,4,5,6];
console.log(spreadArray02);


// /* 블럭 scope */
// {
//     let outSide = 1;
//     {
//         let inSide = 2;
//         console.log(outSide);
//     }
//     console.log(inSide);
//     // 블럭 안에 있는 코드를 바깥에서 호출할 수 없음
// }


/* 비동기 처리 함수 : setTimeout */
/* 비동기 처리방식이기 때문에 3초후에실행 문구가 뜨기전에 비동기테스트222 문구가 먼저 뜨게 됨.*/
console.log('비동기테스트');
setTimeout(() =>{
    console.log('3초후에실행')
},3000);
console.log('비동기테스트222')


/* 
    콜백함수 
    first-class-function
    - 함수 자체를 변수에 저장
    - 함수의 인자에 다른 함수를 인수로 전달 
    - 함수의 반환 값으로 함수를 전달
*/
function desc(callBack){
    setTimeout(() => {
        console.log('콜백')
        callBack();
    },3000);
}

function desc2(){
    console.log('callBack후에실행')
}

desc(desc2);

// /* promise (비동기)*/
// const runCode = new Promise(
//     (reslove,reject) => {
//         setTimeout(() => {
//             let num = 7;
//             if(num > 9){
//                 reslove(num);
//             }else{
//                 reject('error')
//             }
//         },1000);
//     }
// );

// /* promise 호출 */
// runCode.then((item) => {
//     console.log('success',item);
// }, (err) => {
//     console.log(err);
// })
// console.log('비동기 promise');
// then 밖에 있어서 비동기


/* promise (동기)*/
const runCode = new Promise(
    (reslove,reject) => {
        setTimeout(() => {
            let num = 10;
            if(num > 9){
                reslove(num);
            }else{
                reject('error')
            }
        },1000);
    }
);

runCode.then((item) => {
    console.log('success',item); //조건 만족 시
}, (err) => { //만족하지 못하면 err함수 호출 (위에 if reject)
    console.log(err);

}).then(() => { //then으로 함수 이어쓰기
    console.log('동기 promise');
},() =>{  
    console.log('에러')
})

/*promise 참고링크 : 
https://joshua1988.github.io/web-development/javascript/promise-for-beginners/
https://velog.io/@rejoelve/%EB%B4%90%EB%8F%84-%EB%B4%90%EB%8F%84-%ED%97%B7%EA%B0%88%EB%A6%AC%EB%8A%94-resolve-reject
https://programmingsummaries.tistory.com/325
*/


/* catch */
const setTimecode = new Promise((success,reject) => {
    console.log('start');
    success(1);
})

setTimecode
    .then(() => {
        console.log('success1');
    })
    .then(() => {
        console.log('success2');
        throw new Err('Err');
    })
    .then(() => {
        console.log('success3');
    }).catch((err) =>{
        console.log('err');
    });


