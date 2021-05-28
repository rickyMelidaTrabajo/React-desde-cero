const peticion = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
    const data = await response.json();
    // console.log(data);
    return data;
}

const data = peticion().then(console.log)