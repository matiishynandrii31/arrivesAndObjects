// 1. Створити обєкт який описує тварину (назву, вагу, вік, середню швидкість), і наступні функції для роботи з ним:
// Функція яка виведе всю інформацію про тварину. Функція яка виведе за скільки тварина зможе подолати 1000 км. 
//(врахуйте що тварина може рухатись не більше 12 годин у день). 
//Функція яка зможе змінити назву тварини на більш детальну. 

	// let animal = {
	// 	name: "fox",
	// 	weight: 20,
	// 	age: 8,
	// 	speed: 20,
	// 	thousandKilometres : function() {
	// 	let time = 1000 / this.speed;
	// 	let days = Math.floor( time / 12 );

	// 	console.log(`${days} days and ${time % 12} hours to cover 1000 km`);
	// 	},
	// 	informationAbout : function() {
	// 	for (let key in animal) {
	// 		console.log(animal[key]);
	// 	}
	// 	},
	// 	changeName: function () {
	// 	this.name = "Tibetan Fox";
	// 	}
	// };

	// animal.informationAbout();

	// animal.thousandKilometres();

	// animal.changeName();
	// console.log(animal);

// 2. Створіть обєкт який має у собі 2 довжини сторін фігури.
// Додайте методи які будуть робити наступне - рахувати площу фігури, периметр фігури, зроблять фігуру 3-д,
// зададуть назву фігури, переведуть значення з сантиметрів у метри.

	// let figure = {
	// 	width: 50,
	// 	length: 40,

	// 	square: function () {
	// 		console.log(`Square = ${this.width * this.length}`);
	// 	},

	// 	perimeter: function() {
	// 		console.log(`Perimeter = ${(this.width + this.length) * 2}`)
	// 	},

	// 	make3d: function() {
	// 		this.height = 15;
	// 	},

	// 	cmToMetres: function() {
	// 		this.width = this.width / 100;
	// 		this.length = this.length / 100;
	// 		this.height = this.height / 100;
	// 	}
	// }
	// figure.square();
	// figure.perimeter();
	// figure.make3d();
	// console.log(figure);
	// figure.cmToMetres();
	// console.log(figure);
	// figure.square();
	// figure.perimeter();



// 3. Створимо аналог списка покупок (мінімум 5 покупок з всіма заданими пропертями. )
// {
//   tomato: {
//     count: 5,
//     price: 50,
//     buy: false,
//     outOfstore: true
//   } , ...
// }
//  Виводимо список покупок - спочатку ті які є в магазині потім яких немає, 
// Виводимо список покупок які ми купили.
// Додаємо функцію яка дозволить купити продукт.
// Додаємо функцію яка просумує всі зроблені покупки і виведе результат.(не забуваємо що є значення кількості та ціни за одиницю товару)
// Додаємо можливість збільшувати кількість товару.
// Додаємо можливість зменшувати кількість товару(менше 0 бути не може).
// 	let productsInStore = [], productsOutStore = [], productsBought = [], summary = 0;


// 	let products = {
//   tomato: {
//     count: 5,
//     price: 50,
//     buy: false,
//     outOfstore: true
//   } , 
//   potato: {
//     count: 10,
//     price: 15,
//     buy: false,
//     outOfstore: true
//   } , 
//   bread: {
//     count: 2,
//     price: 25,
//     buy: false,
//     outOfstore: false
//   } , 
//   milk: {
//     count: 1,
//     price: 45,
//     buy: false,
//     outOfstore: false
//   } , 
//   cherry: {
//     count: 2,
//     price: 70,
//     buy: false,
//     outOfstore: true
//   } ,
//   showProducts: function () {
// 	for (let key in products) {
// 		if (products[key].outOfstore === true) {
// 			productsInStore.push(key);
// 		}
// 		else if (products[key].outOfstore === false){
// 			productsOutStore.push(key);
// 		}
// 	}
// 	console.log(productsInStore, productsOutStore);
//   },
//   purchasedProducts: function () {
//   	for (let key1 in products) {
// 		if (products[key1].buy === true) {
// 			productsBought.push(key1);
// 		}
//   }
//   console.log(productsBought); 
// 	},
//   buyProduct: function () {
//   	for (let key2 in products) {
// 		if (products[key2].buy === false) {
// 			if (confirm(`Do you want buy ${key2} ?`) === true) {
// 				products[key2].buy = true;
// 			}
// 			else {
// 			 continue;
// 			}
// 		}
//   	}
//   },
//   shoppingSummary: function () {
//   	for (let key3 in products) {
// 	  	if (products[key3].buy === true) {
// 			summary += products[key3].count * products[key3].price;
// 	    }
// 	}
//   console.log(`You spent ${summary} $`)
// },
//   addCount: function () {
//   	for (let key4 in products) {
// 		if (products[key4].buy === true) {
// 			if (confirm(`Do you want increase the number ${key4} ?`) === true) {
// 				let size = +prompt('Enter count:');
// 				if (size > 0) {
// 					products[key4].count += size;
// 				}
// 				else {
// 					alert('Error entering');
// 				}
// 			}
// 			else {
// 			 continue;
// 			}
// 		}
//   	}
//   },
//   reduceCount: function () {
//   	for (let key5 in products) {
// 		if (products[key5].buy === true) {
// 			if (confirm(`Do you want reduce the number ${key5} ?`) === true) {
// 				let size1 = +prompt('Enter count:');
// 				if (size1 > 0 && (products[key5].count - size1) > 0) {
// 					products[key5].count -= size1;
// 				}
// 				else {
// 					alert('Error entering');
// 				}
// 			}
// 			else {
// 			 continue;
// 			}
// 		}
//   	}
//   }

// }

// products.showProducts();

// products.buyProduct();
// products.purchasedProducts();
// console.log(products);

// products.shoppingSummary();
// products.addCount();
// products.reduceCount();

// products.shoppingSummary();
// console.log(products);


// 4. Задана колекція [{name: "Yura", age: 55, hobby: ["films", "games", "hiking"], type: "Admin"}, {}, {},{}]. 
// Вивести всіх адмінів. Вивести середній вік усіх працівників. Вивести тільки унікальні хоббі працівників.
let sum = 0, x = 0;
let team = [{name: "Yura", age: 55, hobby: ["films", "games", "hiking"], type: "Admin"}, 
{name: "Andrii", age: 26, hobby: ["films", "guitar", "football", "painting"], type: "Admin"},
 {name: "Kolia", age: 35, hobby: ["swimming", "games", "fishing"], type: "User"},
 {name: "Pylyp", age: 43, hobby: ["flying", "fishing", "football"], type: "User"}]

let teamMethods = { 
	searchAdmin: function () {
	 for (let i = 0; i < team.length; i++) {
	 	if (team[i].type === "Admin") {
	 		console.log(team[i].name);
	 	}	 
	 }
	},
	averageAge: function () {
		for (let i = 0; i < team.length; i++) {
	 	x += team[i].age;
	 	}
	 	sum = Math.floor(x / team.length);
	 console.log(`Average age - ${sum}`);
	},
	uniqueHobby: function() {
		let arrHobby = [];
		for (let i = 0; i < team.length; i++) {
			arrHobby = arrHobby.concat(team[i].hobby);
		}
		let unique = [...new Set(arrHobby)];
		console.log(unique);
	}
	}


teamMethods.searchAdmin();
teamMethods.averageAge();
teamMethods.uniqueHobby();
