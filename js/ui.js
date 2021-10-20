/*let과 const */

// let : 변수 값을 재할당 할 수 있음.
// const (상수) : 한번 상수로 선언된 변수에는 새로운 값을 넣을 수 없음.

let testValueLet;
testValueLet = 1;
console.log(testValueLet);
testValueLet = 2;
console.log(testValueLet);

const testValueConst = 1;
console.log(testValueConst);

/*typeof : 변수 타입이 어떤것인지 출력.  */
 
let testValueTy = 1;
console.log(typeof testValueTy);

/* Boolean : true와 false 두 값을 가질 수 있음. */

let testBoolean1 = Boolean('123');
console.log(testBoolean1);
let testBoolean2 = Boolean('');
console.log(testBoolean2);

/* undefiend : 변수에 값이 할당되지 않았을 뿐이지, 변수 값이 들어갈 공간은 있음. */

let testValueUdf;
console.log(typeof testValueUdf, testValueUdf);

/* null : 변수에 값(객체가)이 아예 없는 상태. */

let testValueNull;
console.log(typeof testValueNull, testValueNull);

let testValueNull2 = null;
console.log(testValueNull2);

/* 명시적으로 부재를 나타내고 싶다면 null을 사용하는게 좋음. */
/*
{
    name: 'Seungha',
    address: null
  }
  
- 아예 정의하지 않는 쪽이 더 좋음.
  {
    name: 'Seungha'
  }
*/

let testSymbol1 = Symbol(1);
let testSymbol2 = Symbol(1);
console.log(typeof testSymbol1, testSymbol1);
console.log(typeof testSymbol2, testSymbol2);

console.log(testSymbol1 == testSymbol2);
console.log(testSymbol1 === testSymbol2);

/* String 이였던 변수 타입을 Number로 변환. */
let testValuechange = '1';
console.log(typeof Number(testValuechange) , Number(testValuechange));

console.log(parseInt(1.2));
console.log(Number('1.2'));
console.log(parseFloat('1.2'));

/*Boolean : 0 제외한 나머지 숫자는 전부 true */
console.log(typeof Boolean(0),Boolean(1));

console.log("" == '0'); //false
console.log(0 == ""); //true
console.log(0 == '0'); //true
console.log(false == 'false'); //false
console.log(false == '0'); //true
console.log(false == undefined); //false
console.log(false == null); //false
console.log(null == undefined); //true
console.log('\t\r\n' == 0); //true

console.log('-------------')

//전부 false
console.log("" === '0'); 
console.log(0 === ""); 
console.log(0 === '0'); 
console.log(false === 'false');
console.log(false === '0'); 
console.log(false === undefined); 
console.log(false === null);
console.log(null === undefined); 
console.log('\t\r\n' === 0);

console.log('------------')

let value1 = 1;
console.log(value1++ === 2);
console.log(++value1 === 3);


function FunCoding(name){
    return 'hi' + name;
}
console.log(FunCoding('dave'));

function FunCoding(name){
    console.log('hi' + name);
}
FunCoding('fun')

/*
    화살표 함수 ('=>')
    - 함수 선언을 보다 간단하게 하기 위해 고안된 문법.
    - 화살표 함수는 익명 함수이다. (함수에 이름이 없음)

    let func = (함수인자) => expression
    
    함수를 호출할때 호출하는 코드가 여러줄 이라면
    let func = (함수인자) => { expression }
    호출하는 함수에 중괄호를 추가함.
*/


/* 함수 인자가 있을경우. */
let func = (name) => {
    console.log('Hi' + name);
}
func('Dave')


/* 인자가 없을경우 */
let func02 = () => {
    console.log('Hi');
}
func02();



// ex1)

let f1 = function() {
    return 'hi';
}

// let f1 = () => 'hi';

// function과 return 생략. (결과는 같음)



// ex2)

let f2 = function(age){
    return age * 2;
}

// let f2 = age => age * 2;
// console.log(f2(1));

// 중괄호 생략 



// ex3)

let f3 = function(item1,item2){
    return item1 * item2;
}

// let f3 = (item1,item2) => item1 * item2;
// console.log(f3(1));

// fuction , return 생략




// 빈 객체에 프로퍼티와 메소드 추가
const empty = {};
empty.name = 'dave';
empty.age = 10;
empty.get_data = () => {
    return 1 + 2;
}

console.log(empty.name);
console.log(empty.age);
console.log(empty.get_data());


// 객체 안에 객체 생성

const user = {
    age: 20,
    name: 'dave',
    get_data: () => { //함수
        return 1 + 2;
    }
};
console.log(typeof user , user);
console.log(user.age);
console.log(user.name)
console.log(user.get_data());

const people = {
    age: 10,
    name: 'dave',
    details: {
        hobby: "coding",
        major: "korea",
        getDetails: (item) => {
            return item * 2;
        }
    }
}

console.log(people.age,people.name);
console.log(people.details.hobby, people.details.major, people.details.getDetails(2));

const my = {
    age: 20,
    name: 'dave',
    details:{
        hobby: 'coding',
        major: 'korea',
        // getHobby: function(){
        //     return this.hobby; //this로 hobby 불러오기.
        // }
        getHobby: () => 'coding' // 화살표 함수는 this를 사용할 수 없음.
    }
};

console.log(my.details.getHobby());

const dave = {
    age:20,
    name: "dave",

    get get_age(){
        return this.age;
    },
    set set_age(value){
        this.age = value;
    }
}

console.log(dave.get_age);
dave.set_age = 35;
console.log(dave.get_age);


/* new object() (참고용) */
// 빈 객체를 먼저 만들고 만든 빈 객체에다가 프로퍼티와 메소드 등을 추가하는 방식.
// 위에 const empty와 동일함.
const abc = new Object();

abc.age = 10;
abc.name = 'dave';
abc.fuc03 = () => 1+2;

console.log(abc.age,abc.name,abc.fuc03());


/*
생성자 함수로 생성하는 방식 (참고용)
 new 함수()를 쓰면, 객체처럼 사용가능.
*/

function fuc04(age,name){
    this.age = age; //선언될 데이터들은 객체이기 때문에 this로 써줘야함. (let , const X)
    this.name = name;
    this.fucData = function() {
        return this.age;
    }
}

const info = new fuc04('50','dave');
console.log(typeof dave);
console.log(info.age,info.name);


function fuc05(age,name){ // 선언과 동시에 객체생성
    this.age = age;
    this.name = name;
}

// 객체로 생성된 fuc05에 추가적인 메소드나 프로퍼티를 아래와같이 넣을 수 있다.
fuc05.prototype.message = function(){
    return 'Hello';
}

fuc05.prototype.hobby = 'coding';

const prototypeResult = new fuc05(10, 'dave');
console.log(prototypeResult.age,prototypeResult.name,prototypeResult.hobby);
console.log(prototypeResult.message); //메소드 호출



class User01{ //class 클래스명 {}
    constructor(name,age){ //constructor(): 클래스 생성자 함수 (function 사용 X)
        this.name = name; // 클래스 프로퍼티는 constructor 내부에서 this 키워드로 선언될 수 있음.
        this.age = age;
    }
    get_message(){
        return 'hello!';
    }
}
// class로 정의된 클래스는 new클래스명() 으로 객체로 생성될 수 있음.
const userDave = new User01('dave',20); 
console.log(typeof userDave, userDave.name,userDave.age,userDave.get_message());


/* 클래스를 상속할 때, extends 키워드를 사용하고, 부모 constructor를 호출 할때는 super()라는 
키워드를 사용함. */

class Animal{
    constructor(name){
        this.name = name;
    }
}

class User02 extends Animal{
    constructor(name,age){
        super(name);
        this.age = age; //추가된 프로퍼티만 따로 this로 정의. 
    }
}

const result = new User02('Dave',30);
console.log(result.name,result.age);


class Lion {
    constructor(name){
        this.name=name;
    }
    get_message(){
        return 'hi';
    }
}

class User03 extends Lion{
    constructor(name,age){
        super(name) //자식에서 부모 constructor 호출
        this.age=age;
    }
    //부모에서 정의한 함수를 자식에서는 다른 함수로 정의하고 싶을 때 부모 함수명을 그대로 쓰고, 실행 코드만 수정.
    get_message(){  
        return 'hihihihi';
    } 
}

const User03Result = new User03('dave',40);
console.log(User03Result.name,User03Result.age,User03Result.get_message());



class Mouse{
    constructor(name){
        this.name = name;
    }
    get_message(){
        return 'hello';
    }
}

Mouse.prototype.age = 10;

const User04 = new Mouse('dave');
console.log(User04.hasOwnProperty('name')); //true
console.log(User04.hasOwnProperty('age')); //false
/* hasOwnProperty : 내부에서 정의한 프로퍼티와 외부에서 정의한 프로퍼티를 true/false를 
통해 알 수 있다. 프로퍼티가 아닌 메소드는 사용할 수 없음.(false)
*/

// for
for(let i = 0; i<5; i++){
    console.log(i);
}

// for length
const data = ['HTML','CSS','JS']; //문자열 외에 숫자나 불리언도 가능.
for(let i=0; i<data.length; i++){ //data.length : 객체인 data에 있는 아이템 개수를 구함. 
    console.log(data[i]);
}

// for of
const data02 = ['React','Vue','Angular']; //배열에 있는 아이템들을 for 변수에 가져올 수 있음.
for(let item of data02){
    console.log(item);
}

//for in
const data03 = {
    name:'dave',
    age: 20,
    brand : 'fun-coding',
    get_message: () => '0602'
}

for (let property in data03){ //data03이 가지고 있는 프로퍼티들을 변수에 가져올 수 있음.
    console.log(property); //data03이 가지고 있는 프로퍼티가 4개이므로 4번 반복 수행.
}

for (let property02 in data03){
    console.log(property02, data03[property02]); //프로퍼티의 값을 알고싶은 경우.
}

console.log(Object.entries(data03));
console.log(Object.keys(data03));
console.log(Object.values(data03));


//while
let w = 0;
while (w < 5){
    console.log(w);
    w++; //증감 연산자를 안쓰면 무한반복.
}

//break & continue
for(let c=0; c < 5; c++){
    if(c === 3){ //만약 c가 3이면?
        continue; //다음 코드 스킵. 
    }
    console.log(c);
}

// 배열 읽기
const array = [1,2,3,'dave',true]; //여러 데이터타입도 가능.
console.log(array);
console.log(array.length)

const array02 = new Array();
array02[0] = 1;
array02[1] = 2;
console.log(array02[0],array02[1],array02[array02.length-1]);


//배열 삭제
const array03 = [1,2,3,'dave','fun-coding'];
console.log(array03);
array03.splice(1,3); //splice : 배열 안에 있는 특정 아이템 삭제.
console.log(array03)

