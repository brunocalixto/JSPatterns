var notificationService = function() {
    var message = 'Notifying ';
    this.update = function(task) {
        console.log(message + task.user + ' for task ' + task.name)
    }
}

module.exports = notificationService