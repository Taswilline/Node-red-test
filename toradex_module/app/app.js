module.exports = function(RED){
    "use strict"
    function helloWorld(config){
        RED.nodes.createNode(this,config);
        var node = this;
        this.on('input', function(msg){
            msg.payload = "Hello World";
            node.send(outMsg);
        });
    }
    RED.nodes.registerType("Hello World",helloWorld);
};