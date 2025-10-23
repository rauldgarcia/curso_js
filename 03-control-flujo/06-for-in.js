let user = {
    id: 1,
    name: 'pedro',
    age: 25,
};

for (let prop in user) {
    console.log(prop, user[prop]);
}

let animales = ['perro', 'vaca', 'cerdo'];
for (let indice in animales) {
    console.log(indice, animales[indice]);
}