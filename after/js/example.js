// var message = "in global";
// console.log("global: message = " + message);

// var a = function () {
// 	var message = "inside a";
// 	console.log("a: message = " + message);
// 	/*b();*/

// 	function b () {
// 		console.log("b: message = " + message);
// 	}
// 	b();
// 	/* will output "inside a"*/
// }
// /* will output "in global" 
// function b () {
// 	console.log("b: message = " + message);
// }*/

// a();

// var x;
// console.log(x);

// if (x == undefined) {
// 	console.log("x is undefined");
// }

// x = 5;
// if (x == undefined) {
// 	console.log("x is undefined");
// }
// else {
// 	console.log("x has been defined");
// }

// var x = 4, y = 4;
// if (x == y) {
// 	console.log("x=4 is equal y=4")
// }

// //will convert one of them to the other, no errors
// x = "4";
// if (x == y) {
// 	console.log("x=4 is equal y=4")
// }

// function order(side) {
// 	if (side === undefined) {
// 		side = "noodles";
// 	}
// 	side = side || "whatever";
// 	console.log("chicken with " + side);
// }
// order("beef");
// order();

// var company = new Object();
// company.name = "Facebook";
// company.ceo = new Object();
// company.ceo.firstName = "mark";
// company.ceo.favColor = "blue";
// var stock = "stock";
// company[stock] = 110;
// console.log(company);

// console.log("company CEO name is: " + company.ceo.firstName);
// console.log(company["name"]);
// console.log(company[stock]);

// same as up

// var facebook = {

// 	name: "Facebook",
// 	ceo: {
// 		firstName: "Mark",
// 		favColor: "blue"
// 	},
// 	stock: 110
// 	"stock": 110
// };
// console.log(facebook);
// console.log(facebook.ceo.firstName);

// function multiply(x, y) {
// 	return x * y;
// }
// console.log(multiply(5, 3));
// multiply.version = "v.1.0.0";
// console.log(multiply.version);

// function makeMultiplier(multiplier) {
// 	var myFunc = function (x) {
// 		return multiplier * x;

// 	};
// 	return myFunc;
// }
// // is a reference of what is inside the function make multiplier
// var multiplyBy3 = makeMultiplier(3);
// // is a reference to the argument multiplier
// console.log(multiplyBy3(10));
// var doubleAll = makeMultiplier(2);
// console.log(doubleAll(100)); will return 200

// function doOperation(x, operation) {
// 	return operation(x); 
// }
// var result = doOperation(5, multiplyBy3);
// console.log(result); 


// var a = 7;
// var b = a;
// console.log("a: " + a);
// console.log("b: " + b);

// b = 5;
// console.log("after b update:");
// console.log("a: " + a);
// console.log("b: " + b);


//function changePrimitive(primValue) {
// console.log("before: " + primValue);

// primValue = 5;
// console.log("after: " + primValue);
// }
// var value = 7;
// changePrimitive(value);

// inside the args in  console.log() you cant put console.log("before " + primvalue)
// function changePrimitive(primValue) {
// 	console.log(primValue);

// 	primValue.x = 5;
// 	console.log(primValue);
// }
// var value = { x: 3};
// changePrimitive(value);

// function test() {
// 	console.log(this);
// 	this.myName = "james";
// }
// test();
// console.log(window.myName);


// function constructor with uppercase first letter
//Both Circle are the same the diferente is that the second will only be created once and will not be
//created for every single instance of that object

// function Circle(radius) {
// 	this.radius = radius;

// 	this.getArea = 
// 		function () {
// 			return Math.PI * Math.pow(this.radius, 2);
// 		};
	
// }

// var myCircle = new Circle(10);
// console.log(myCircle.getArea());



// function Circle(radius) {
// 	this.radius = radius;

// }
// Circle.prototype.getArea = 
// 	function () {
// 		return Math.PI * Math.pow(this.radius, 2);
// 	}


// var myCircle = new Circle(10);
// console.log(myCircle.getArea());

// var myOtherCircle = new Circle(20);
// console.log(myOtherCircle);



// var literalCircle = {
// 	radius: 10,
// 	// here this refer to the literalCircle not the global context
// 	getArea: function () {
// 		var self = this;
// 		console.log(this);

// 		var increaseRadius = function () {
// 			self.radius = 20;
// 		};
// 		increaseRadius();
// 		console.log(this.radius);

// 		return Math.PI * Math.pow(this.radius, 2);


// 	}
// };
// console.log(literalCircle.getArea());


// Arrays
// var array = new Array();
// array[0]  = "james";
// array[1] = function (name) {
// 	console.log("hello " + name);
// };
// array[2] = {course: "JS"};
// console.log(array);
// console.log(array[0]);
// array[1](array[0]);
// console.log(array[2].course);


// Short hand array creation
// var names = [{ name: "Yakov"},
//  { name: "john"}, "joe"];
// console.log(names);

// for (var i = 0; i < names.length; i++) {
// 	console.log("hello " + names[i]);
// }

// Looping
// var names2 = ["yakov", "john", "joe"];
// names2.greeting = "hi";
// var myObj = {
// 	name: "yakov",
// 	course: "js",
// 	plataform: "coursera"
// };

// for (var prop in myObj) {
// 	console.log(prop + ": " + myObj[prop]);
// }

// CLosures
// function makeMultiplier(multiplier) {
// 	return (
// 		function (x) {
// 			return multiplier * x;
// 		}
// 	);
// }
// // function (x) is just receiving x = 2 and being executed
// var doubleAll = makeMultiplier(2); 
// // when doubleAll is executed function (x) its done executing, so muliplier = 10
// console.log(doubleAll(10)); 


// var jamesGreeter = {};
// jamesGreeter.name = "james";
// jamesGreeter.sayHello = function () {
// 	console.log("Hello " + jamesGreeter.name);
// }
// jamesGreeter.sayHello();

// Inmediately invoked function expression
// (function (name) {
// 	console.log("Hello " + name);
// })("john");

// (function (window) {
// var jamesGreeter = {};
// jamesGreeter.name = "james";
// jamesGreeter.sayHello = function () {
// 	console.log("Hello " + jamesGreeter.name);
// }
//
// window.jamesGreeter = jamesGreeter;
// })(window);
//
// jamesGreeter.sayHello();


var names = ["james", "jhon", "joe"];
console.log(names);





























