var Task = require('./task')
// var repoFactory = require('./repoFactory')
var repoFactory = require('./repoFactoryCache')

var task1 = new Task(repoFactory.getRepo('task').get(1))
var task2 = new Task(repoFactory.getRepo('task').get(2))

var user = repoFactory.getRepo('user').get(168)
var project = repoFactory.getRepo('project').get(5)

task1.user = user
task1.project = project

console.log(task1)
task1.save()