var Task = require('./task')
var notificationService = require('./notification.service')
var loggingService = require('./logging.service')
var auditingService = require('./auditing.service')
var mediator = require('./mediator')

var task1 = new Task({name: 'Lavar banheiro', user: 'bcalixto'})
var not = new notificationService()
var ls = new loggingService()
var audit = new auditingService()

mediator.subscribe('complete', not, not.update)
mediator.subscribe('complete', ls, ls.update)
mediator.subscribe('complete', audit, audit.update)

task1.complete = function() {
    mediator.publish('complete', this)
    Task.prototype.complete.call(this)
}

task1.complete()

// node --inspect-brk main.js