//write your code here
const animals =['cheetah','dog', 'cat', 'dodobird', 'bear', 'dolphin'];
const numbers = [22, 15, 1114, 416, 37, 4]

// 1
const pluralize = animalArray => animalArray.map(animal => animal + 's');

// 2
const uppercase = animalArray => animalArray.map(animal => {
    const array = animal.split('');
    array[0] = array[0].toUpperCase();
    return array.join('');
});

// 3
const longWords = animalArray => animalArray.filter(animal => animal.length > 3);

// 4
const shortWords = animalArray => animalArray.filter(animal => animal.length < 5);

// 5
const oddLength = animalArray => animalArray.filter(animal => animal.length % 2 === 1);

// 6
const longToShort = animalArray => animalArray.sort((a,b) => b.length - a.length);

// 7
const sum = numberArray => numberArray.reduce((prev, curr) => prev + curr);


console.log(pluralize(animals));    // [ 'cheetahs', 'dogs', 'cats', 'dodobirds', 'bears', 'dolphins' ]
console.log(uppercase(animals))     // [ 'Cheetah', 'Dog', 'Cat', 'Dodobird', 'Bear', 'Dolphin' ]
console.log(longWords(animals))     // [ 'cheetah', 'dodobird', 'bear', 'dolphin' ]
console.log(shortWords(animals))    // [ 'dog', 'cat', 'bear' ]
console.log(oddLength(animals));    // [ 'cheetah', 'dog', 'cat', 'dolphin' ]
console.log(longToShort(animals));  // [ 'dodobird', 'cheetah', 'dolphin', 'bear', 'dog', 'cat' ]
console.log(sum(numbers));          // 1608