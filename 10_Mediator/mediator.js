var mediator = function(){

    var channels = {}
    var subscribe = function(channel, context, func) {
        if(!this.channels[channel]) {
            this.channels[channel] = []
        }
        this.channels[channel].push({
            context: context,
            func: func
        })
    }

    var publish = function(channel) {
        if(!this.channels[channel]) {
            return false
        }

        var args = Array.prototype.slice.call(arguments, 1)

        for(var i = 0; i < this.channels[channel].length; i++) {
            var sub = this.channels[channel][i]
            sub.func.apply(sub.context, args)
        }
    }

    return {
        channels: {},
        subscribe: subscribe,
        publish: publish
    }

}

module.exports = mediator()