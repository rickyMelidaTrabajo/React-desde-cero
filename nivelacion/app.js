//-------------------------------------------------------------------------------------------------//
//const sumar = (a, b) => a + b;
//document.write(sumar(10, 3))

//-------------------------------------------------------------------------------------------------//
// const cuenta = 0;
// let mensaje = cuenta <= 0 ? 'no tienes saldo' : 'tienes saldo';

//-------------------------------------------------------------------------------------------------//
// let Pelota = {
// 	color: 'rojo',
// 	tam: 3,
// 	rebota: false,
// 	setBotar: () => {
// 		this.rebota = true;
// 	}
// };

//-------------------------------------------------------------------------------------------------//
// const { name, edad, email } = {
// 	name: 'Ricardo',
// 	edad: 29,
// 	email: 'mail@mail.com'
// };
// document.write(name);
// document.write(edad);
// document.write(email);

//-------------------------------------------------------------------------------------------------//
// const list = [1, 2, 3, 4];
// const nuevo = list.map(num => num + 1);
// console.log(nuevo);
// for (num in list) {
// 	document.write(num + '<br>');
// }

//-------------------------------------------------------------------------------------------------//
// const [user1, user2, user3, user4] = ['Ricardo', 'Anahi', 'Romina', 'Samuel'];
// const [, , , user4] = ['Ricardo', 'Anahi', 'Romina', 'Samuel'];
// document.write(user4);

//-------------------------------------------------------------------------------------------------//
const frutas = ['manzana', 'uva', 'melon'];
const citricos = ['naranja', 'limon', 'toronja'];

//Spread operator
const nuevo = [...frutas, ...citricos];

console.log(nuevo)