let counter = 0;

const counterMachine = () => {
    return function (count = 0) {
        counter += count;
        return counter
    }
}

const sum = counterMachine();

console.log(sum());
console.log(sum());
console.log(sum(1));
console.log(sum(4));
console.log(sum(7));
console.log(sum(-3));
console.log(sum());