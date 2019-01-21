// var head = { 
// 	glasses: 1 
// }; 

// var table = { 
// 	pen: 3, 
// 	__proto__:head
// }; 

// var bed = { 
// 	sheet: 1, 
// 	pillow: 2, 
// 	__proto__:table
// }; 

// var pockets = { 
// 	money: 2000, 
// 	__proto__:bed
// }; 

// console.log(pockets.pen == 3);
// console.log(bed.glasses == 1);
// console.log(table.money == undefined);
// console.log({})

// // Задачи 
// // 1 +
// // Добавить функциям defer 
// // Добавьте всем функциям в прототип метод defer(ms), который откладывает вызов функции на ms миллисекунд. 
// // После этого должен работать такой код: 



// function f() { 
// console.log( "привет" ); 
// } 

//  // выведет "привет" через 1 секунду


// Function.prototype.defer = function(ms){
// 	setTimeout(this, ms)
// }
// f.defer(1000);

// Задачи 

// 1 +
// Перепишите в виде класса 
// Есть класс CoffeeMachine, заданный в функциональном стиле. 
// Задача: переписать CoffeeMachine в виде класса с использованием прототипа. 
// Исходный код: 




// function CoffeeMachine(power) {
// this.power = power
// this.waterAmount = 0; 
// this.WATER_HEAT_CAPACITY = 4200; 
// }
// CoffeeMachine.prototype.getTimeToBoil = function () { 

// var boil = this.waterAmount * this.WATER_HEAT_CAPACITY * 80 / this.power;
// return boil; 
// } 

// CoffeeMachine.prototype.run = function() { 
// setTimeout(function() { 
// alert( 'Кофе готов!' ); 
// }, coffeeMachine.getTimeToBoil()); 
// }; 

// CoffeeMachine.prototype.setWaterAmount = function(amount) { 
// return this.waterAmount = amount; 
// }; 



// var coffeeMachine = new CoffeeMachine(10000); 
// coffeeMachine.setWaterAmount(50); 
// coffeeMachine.run(); 




// P.S. При описании через прототипы локальные переменные недоступны методам, поэтому нужно будет переделать их в защищённые свойства. 



// 2 +
// Хомяки с __proto__ 
// Вы – руководитель команды, которая разрабатывает игру, хомяковую ферму. Один из программистов получил задание создать класс «хомяк» (англ – "Hamster"). 
// Объекты-хомяки должны иметь массив food для хранения еды и метод found для добавления. 
// Ниже – его решение. При создании двух хомяков, если поел один – почему-то сытым становится и второй тоже. 
// В чём дело? Как поправить? 



// function Hamster() {
// 	this.food = [];
// } 
// Hamster.prototype.found = function(something) {
// this.food.push(something); 
// }; 
// // Создаём двух хомяков и кормим первого 
// var speedy = new Hamster(); 
// var lazy = new Hamster(); 

// speedy.found("яблоко"); 
// speedy.found("орех"); 
// alert( speedy.food.length ); // 2 
// alert( lazy.food.length ); // 2 (!??)



 
// Задачи 
// 2 +
// Добавить функциям defer с аргументами 
// Добавьте всем функциям в прототип метод defer(ms), который возвращает обёртку, откладывающую вызов функции на ms миллисекунд. 

// Например, должно работать так: 




// function f(a, b) {
// 	console.log( a + b ); 
// } 
// Function.prototype.defer = function(ms){
// 	var func = this
// 	return function(){
// 		var arg = arguments;
// 		setTimeout(function(){
// 		 	func.apply(this, arg)
// 	 }, ms)
// 	}
	
// }
// f.defer(1000)(1, 2); // выведет 3 через 1 секунду. 



// То есть, должны корректно передаваться аргументы.

