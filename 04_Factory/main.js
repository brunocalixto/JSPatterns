var Task = require('./task')
var taskRepo = require('./taskRepository')
var userRepo = require('./userRepository')
var projectRepo = require('./projectRepository')

var task = new Task(taskRepo.get(1))
var user = userRepo.get(1)
var project = projectRepo.get(1)

task.user = user
task.project = project

console.log(task)
task.save()