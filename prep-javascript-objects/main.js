var person = { firstName: 'Mike', lastName: 'Ayala', hobby: 'video games' };

var fullName = person.firstName + ' ' + person.lastName;
console.log("This person's name is:", fullName);

person.job = 'a student';
console.log("this person's current job is", person.job);

person.previousJob = 'shift lead';
console.log("This person's previous job was", person.previousJob);

console.log('The complete persons object', person);

var myCar = { make: 'Honda', model: 'Civic', year: '2014' };
console.log('Car information', myCar);

myCar['owner'] = fullName;
console.log('My name is' + ' ' + myCar['owner'] + ' ' + 'and I drive a' + ' ' + myCar['year'] + ' ' + myCar['make'] + ' ' + myCar['model']);

myCar['color'] = 'maroon';
console.log('My full car info:', myCar);
