/*module.exports = function(RED){
    "use strict"
    function helloWorld(config){
        RED.nodes.createNode(this,config);
        this.prefix = config.prefix;
        var node = this;
        this.on('input', function(msg){
            msg.payload = "gpioset gpiochip4 " + node.prefix + "=1";
            node.send(msg)
        });
    }
    RED.nodes.registerType("Hello World",helloWorld);
};*/
module.exports = function(RED){
    var GPIO = [
        ['PWR', 'out'],
        ['PWR', 'in'],
        [6 ,9],
        ['PWR', '0'],
        [6, 8],
        ['GND', 'GND'],
        [3, 14],
        [3, 2],
        ['GND', 'GND'],
        [3, 3],
        [5, 22],
        [0, 2],
        [3, 19],
        ['GND', 'GND'],
        [4, 1],
        [4, 11],
        ['PWR', 'out'],
        [3, 17],
        [3, 9,]
        ['GND', 'GND']
        [3, 8],
        [3, 16],
        [3, 10],
        [3, 23],
        ['GND', 'GND']
        [3, 22],
        [0, 7],
        [0, 6],
        [3, 13],
        ['GND', 'GND'],
        [3, 12,]
        [0, 9],
        [0, 10],
        ['GND', 'GND'],
        [0, 11],
        [5, 21],
        [3, 18],
        [3, 15],
        ['GND', 'GND'],
        [4, 0]
    ];
    function helloWorld(config){
        RED.nodes.createNode(this,config);
        this.prefix = config.prefix;
        var node = this;
        this.on('input', function(msg){
            msg.payload = "gpioset gpiochip" + GPIO[node.prefix][0] +" " + GPIO[node.prefix][1] +"=1";
            node.send(msg)
        });
    }
    RED.nodes.registerType("Hello World",helloWorld);
};