// Create object
var task = {
    title: 'My title',
    description: 'My description'
};

// or
// var task = {} or new Object(); 
// task.title = 'My title';
// task.description = 'My description';
// task.toString = function () { return  this.title + '\n' + this.description)};

Object.defineProperty(task, 'toString', {
    value: function () {
        return  this.title + '\n' + this.description;
    },
    writable: false,        // prevents the property from being overwritten         : line 26
    enumerable: false,      // prevents writing property on the console             : line 28, 29
    configurable: false     // prevents 'defineProperty' overwrites                 : line 23
});

Object.defineProperty(task, 'toString', {
    // enumerable: true     exception: TypeError: Cannot redefine property: toString
});

task.toString = 'hi';

console.log('21:', task);
console.log('22:', Object.keys(task));

module.exports = task;