//　変数
const foo = document.getElementById("foo");

const fooWidth = foo.offsetWidth; //camelCase
const fooHeight = foo.offsetHeight;
const fooArea = fooWidth * fooHeight;

const obj = {
	foo: 123,
};

console.log(obj.foo);
obj.foo = 456;
console.log(obj.foo);

// const は再定義、再代入できない
// let は再代入できるが、再定義できない
// var は再代入、再定義できる
