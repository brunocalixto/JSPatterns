var FlyweightFactory = require('./flyweightFactory')

var Task = function(data) {
    this.flyweight = FlyweightFactory.get(data.priority, data.project, data.user, data.completed)
    this.name = data.name
}

Task.prototype.getPriority = function() {
    this.flyweight.priority
}

module.exports = Task