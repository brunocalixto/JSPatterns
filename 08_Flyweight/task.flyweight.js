var TaskFlyweight = function(priority, project, user, completed) {
    this.priority = priority
    this.project = project
    this.user = user
    this.completed = completed
}

module.exports = TaskFlyweight