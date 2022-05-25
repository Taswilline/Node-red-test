module.exports = function(RED){
    "use strict"
    function helloWorld(config){
        RED.nodes.createNode(this,config);
        this.prefix = config.prefix
        var node = this;
        this.on('input', function(msg){
            msg.payload = "gpioset gpiochip4 " + node.prefix + "=1";
            node.send(msg)
        });
    }
    RED.nodes.registerType("Hello World",helloWorld);
};