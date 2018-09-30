var ObserverList = function() {
    this.observerList = []
}

ObserverList.prototype.add = function(obj) {
    return this.observerList.push(obj)
}

ObserverList.prototype.remove = function() {
    
}

ObserverList.prototype.get = function(index) {
    if(index > -1 && index < this.observerList.length) {
        return this.observerList[index]
    }
}

ObserverList.prototype.count = function() {
    return this.observerList.length
}

module.exports = ObserverList