// const saludo = async () => {
//     return 'Hola mundo';
// }

// saludo().then(res => {
//     console.log(res);
// })

const peticion = async () => {
    setTimeout(() => {
        const datos = {
            "id": 1,
            "name": "Leanne Graham",
            "username": "Bret",
            "email": "Sincere@april.biz",
        }
        console.log(datos);
    }, 1000);

}

peticion().then(console.log);