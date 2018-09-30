var notificationService = require('./notification.service')
var loggingService = require('./logging.service')
var auditingService = require('./auditing.service')
var TaskObservable = require('./task.observable')

var task1 = new TaskObservable({name: 'Lavar banheiro', user: 'bcalixto'})
var not = new notificationService()
var ls = new loggingService()
var audit = new auditingService()

task1.addObserver(not.update)
task1.addObserver(ls.update)
task1.addObserver(audit.update)

task1.save()

task1.getObserver(1)

// node --inspect-brk main.js