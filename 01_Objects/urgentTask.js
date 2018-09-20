var task = require('./task')

// Urgent Task
var urgentTask = Object.create(task);

Object.defineProperty(urgentTask, 'toString', {
    value: function () {
        return  this.title + ' is urgent';
    },
    writable: false,        // prevents the property from being overwritten         : line 19
    enumerable: false,      // prevents writing property on the console             : line 21, 22
    configurable: false     // prevents the defineProperty written to the console   : line 19
});

console.log(urgentTask.toString());