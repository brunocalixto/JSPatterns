var TaskCollection = require('./task.collection')
var TaskFactory = require('./task.factory')

var projects = ['none', 'courses', 'training', 'project']
var prorities = [1, 2, 3, 4, 5]
var users = ['Jon', 'Erica', 'Amanda', 'Nathan']
var completed = [true, false]

var initialMemory = process.memoryUsage().heapUsed

for(var i = 0; i < 100000; i++) {
    TaskCollection.add({
        name: 'task' + i,
        priority: prorities[Math.floor((Math.random() * 5))],
        project: projects[Math.floor((Math.random() * 4))],
        user: users[Math.floor((Math.random() * 4))],
        completed: completed[Math.floor((Math.random() * 2))]
    })
}

var afterMemory = process.memoryUsage().heapUsed
console.log('used memory ' + (afterMemory - initialMemory) / 1000000)
console.log('Tasks: ', TaskCollection.getCount())
console.log('TaskFactory: ', TaskFactory.getCount())