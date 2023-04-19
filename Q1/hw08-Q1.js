const uesrOne = {};
const userTwo = {};


const setterGenerator = (key) => {
    return function (value) {
        this[key] = value;
    }
}

const nameSetter = setterGenerator("name");

nameSetter.call(uesrOne, "Zahra");
nameSetter.call(userTwo, "Maryam");

console.log(uesrOne);
console.log(userTwo);
