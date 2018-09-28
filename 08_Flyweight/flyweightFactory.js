var TaskFlyweight = require('./task.flyweight')

var FlyweightFactory = function() {
    
    var flyweights = {}
    
    var get = function(priority, project, user, completed) {
        if(!flyweights[priority + project + user + completed]){
            flyweights[priority + project + user + completed] = new TaskFlyweight(priority, project, user, completed)
        }
        return flyweights[priority + project + user + completed]
    }

    var getCount = function() {
        var count = 0
        for(var f in flyweights) count++
        return count
    }

    return {
        get: get,
        getCount: getCount
    }
}