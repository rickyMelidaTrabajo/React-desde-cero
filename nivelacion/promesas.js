const sumar = (a, b) => {
    return new Promise((resolve, reject) => {
        if (a < 0 || b < 0) {
            reject('Numeros no validos')
        } else {
            resolve(a + b);
        }
    });
}

const result = sumar(3, -2).then(res => {
    console.log(res);
}).catch(error => {
    console.log(error);
});

document.write(result);