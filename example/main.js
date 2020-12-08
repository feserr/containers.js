const extraContainers = require('../lib/extra-containers');

const sortedArray = new extraContainers.SortedArray();
sortedArray.push(1);
sortedArray.push(2);

console.log(sortedArray.size());
console.log(sortedArray.exist(1));
console.log(sortedArray.exist(3));
