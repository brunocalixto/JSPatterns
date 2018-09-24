var Task = function(name) {
    this.name = name
    this.completed = false
}

Task.prototype.complete = function() {
    console.log('Completing task: ' + this.name)
    this.completed = true
}

Task.prototype.save = function() {
    console.log('Saving task: ' + this.name)
}

var task1 = new Task('Jogar ovos podres no lixo')
var task2 = new Task('Ajustar temperatura da água no gás')

task1.complete()
task2.complete()

task1.save()
task2.save()

var urgentTask = new Task('Desentupir ralo do banheiro')
// Decorating 
urgentTask.priority = 0
urgentTask.notify = function() {
    console.log(this.name + ' [URGENTE]')
}

urgentTask.complete()
urgentTask.save = function() {
    this.notify()
    Task.prototype.save.call(this)
}

urgentTask.save()