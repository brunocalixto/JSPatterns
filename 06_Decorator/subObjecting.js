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

var UrgentTask = function(name, priority) {
    Task.call(this, name)
    this.priority = priority
}

UrgentTask.prototype = Object.create(Task.prototype)
UrgentTask.prototype.notify = function() {
    console.log('Notifying important people')
}
UrgentTask.prototype.save = function() {
    this.notify()
    console.log('do special stuff before saving')
    Task.prototype.save.call(this)
}

var ut = new UrgentTask('Desentupir ralo do banheiro', 1)
ut.complete()
ut.save()
console.log(ut)