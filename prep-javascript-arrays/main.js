var languagesArray = ['html', 'css', 'javascript', 'react', 'node.js'];
console.log('language Arrays', languagesArray);
console.log('Array length:', languagesArray.length);

languagesArray.push('C#', 'php');
console.log('Updated Arrays', languagesArray);

languagesArray.pop();
console.log('last index removed', languagesArray);

languagesArray.splice(0, 0, 'C++');
console.log('Added element to the front', languagesArray);

languagesArray.shift();
console.log('Deleted first element', languagesArray);

var thirdElement = languagesArray[2];
console.log('3rd element in languagesArray', thirdElement);

var arrayLength = languagesArray.length;
console.log('The array length is', arrayLength);

var lastItem = languagesArray[5];
console.log('Last item in array', lastItem);
