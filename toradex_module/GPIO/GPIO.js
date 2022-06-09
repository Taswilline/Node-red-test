const {exec} = require('child_process');
const { stdout } = require('process');
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
        [3, 9],
        ['GND', 'GND'],
        [3, 8],
        [3, 16],
        [3, 10],
        [3, 23],
        ['GND', 'GND'],
        [3, 22],
        [0, 7],
        [0, 6],
        [3, 13],
        ['GND', 'GND'],
        [3, 12],
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
    function gpioSet(config){
        RED.nodes.createNode(this,config);
        this.pinNumber = config.pinNumber;
        this.numberOnOff = config.numberOnOff
        var node = this;
        this.on('input', function(msg){
            var error;
            var stderr;
            var stdout;
            var command = `gpioset gpiochip${GPIO[node.pinNumber][0]} ${GPIO[node.pinNumber][1]}=${node.numberOnOff}`;
            exec(`${command}`,error,stdout,stderr);
            var onOff
            if(node.numberOnOff == 0){
                onOff = "Off";
            }else{
                onOff ="On";
            }
            var pin = 1 + parseInt(node.pinNumber);
            msg.payload = `Pin ${pin} ${onOff}`;
            node.send(msg)
        });
    }
    RED.nodes.registerType("GPIO Set",gpioSet);

    function gpioGet(config){
        RED.nodes.createNode(this,config);
        this.pinNumber = config.pinNumber;
        var node = this;
        this.on('input', function(msg){
            var error;
            var stderr;
            var stdout;
            var command = `gpioget gpiochip${GPIO[node.pinNumber][0]} ${GPIO[node.pinNumber][1]}`;
            exec(`${command}`,error, stdout, stderr);
            setTimeout(() => {msg.payload = stdout;} ,30);
            node.send(msg)
        });
    }
    RED.nodes.registerType("GPIO Get", gpioGet);
};

