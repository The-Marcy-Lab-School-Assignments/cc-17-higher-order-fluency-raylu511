//write your code here
const animals =['cheetah','dog', 'cat', 'dodobird', 'bear', 'dolphin'];

const pluralize = animalArray => animalArray.map(animal => animal + 's');
console.log(pluralize(animals));

const uppercase = animalArray => animalArray.map(animal => {
    const array = animal.split('');
    array[0] = array[0].toUpperCase();
    return array.join('');
})

console.log(uppercase(animals))

const longWords = animalArray => animalArray.filter(animal => animal.length > 3);

console.log(longWords(animals))

const shortWords = animalArray => animalArray.filter(animal => animal.length < 5);

console.log(shortWords(animals))

const oddLength = animalArray => animalArray.filter(animal => animal.length % 2 === 1);

console.log(oddLength(animals));

const longToShort = animalArray => animalArray.sort((a,b) => b.length - a.length);

console.log(longToShort(animals));

const sum = numberArray => numberArray.reduce((prev, curr) => prev + curr);

const numbers = [22, 15, 1114, 416, 37, 4]

console.log(sum(numbers));