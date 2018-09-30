var Task = require('./task')
var ObserverList = require('./observer.list')

var TaskObservable = function(data) {
    Task.call(this, data)
    this.observers = new ObserverList()
}

TaskObservable.prototype.addObserver = function(observer) {
    this.observers.add(observer)
}

TaskObservable.prototype.removeObserver = function(observer) {
    this.observers.removeAt(this.observers.indexOf(observer, 0))
}

TaskObservable.prototype.getObserver = function(index) {
    var observerCount = this.observers.count()
    if(index > -1 && index < observerCount) {
        for(var i = 0; i < observerCount; i++) {
            if(i === index)
                return this.observers.get(i)(this)
        }
    }
}

TaskObservable.prototype.notify = function(context) {
    var observerCount = this.observers.count()
    for(var i = 0; i < observerCount; i++) {
        this.observers.get(i)(context)
    }
}

TaskObservable.prototype.save = function() {
    this.notify(this)
    Task.prototype.save.call(this)
}

module.exports = TaskObservable