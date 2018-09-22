var myRepo = require('./Repo2')

var taskHandler = function() {
    var save = function() {
        myRepo.save('Hi from taskHandler')
    }
    return {
        save: save
    }
}

module.exports = taskHandler()