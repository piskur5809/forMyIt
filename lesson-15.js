// Задачи 
// Превратите объект в JSON 
// Превратите объект leader из примера ниже в JSON: 

var leader = { 
name: "Василий Иванович", 
age: 35 
}; 
var str = JSON.stringify(leader);
console.log(str);
var newObject = JSON.parse(str);
console.log(newObject);

// После этого прочитайте получившуюся строку обратно в объект.
 
// Задачи 
// Полиморфная функция formatDate 
// Напишите функцию formatDate(date), которая возвращает дату в формате dd.mm.yy. 
// Ее первый аргумент должен содержать дату в одном из видов: 
// Как объект Date. 
// Как строку, например yyyy-mm-dd или другую в стандартном формате даты. 
// Как число секунд с 01.01.1970. 
// Как массив [гггг, мм, дд], месяц начинается с нуля 
// Для этого вам понадобится определить тип данных аргумента и, 
// при необходимости, преобразовать входные данные в нужный формат. 
// Пример работы: 
function formatDate(date) { 
	var year = 0;
	var month = 0;
	var day = 0;
	if(date.substr){
		date = date.substring(2);
		var arr = date.split("-")
		arr = arr.reverse()
		return arr.join(".")
	};

	if(typeof date == "number"){
		date = date * 1000;
		date = new Date(date);
		return getString(date);
	};

	if(Array.isArray(date)){
		date.forEach(function(elem, index){
			if(index == 0)
				year = elem;
			if(index == 1)
				month = elem;
			if(index == 2)
				day = elem;
		});
		date = new Date(year, month, day);
		return getString(date);
	};

	if(date.getDay()){
		return getString(date);
	};
	 } 

function getString(date){
	year = String(date.getFullYear()).substring(2);
	// year = String(year);
	// year = year.substring(2);
	day = date.getDate();
	if(day < 10);
		day = "0" + day;
	return day + "." + date.getMonth() + 1 + "." + year;
};
console.log( formatDate('2011-10-02') ); // 02.10.11 
console.log( formatDate(1234567890) ); // 14.02.09 
console.log( formatDate([2014, 0, 1]) ); // 01.01.14 
console.log( formatDate(new Date(2014, 0, 1)) ); // 01.01.14