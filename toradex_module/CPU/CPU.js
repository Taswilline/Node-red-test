const {exec} = require('child_process');
const { stdout } = require('process');

function sleep(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}
module.exports = function(RED){
    
    function cpuTemp(config){
        RED.nodes.createNode(this, config);
        this.unit = config.unit;
        var node = this;
        this.on('input', function(msg){
            var newMsg;
            exec(`cat /sys/devices/virtual/thermal/thermal_zone0/temp`, (error, stdout, stderr) => {
                if(error){
                    node.error = error.toString();
                    return
                }
                newMsg =stdout;
            });
            sleep(20)
                .then(() => { newMsg = stdout})
                .then(() => { newMsg = (parseFloat(newMsg)/1000) + parseFloat(node.unit)})
                .then(() => { msg.payload = newMsg.toString();})
                .then(() => { node.send(msg)})
        });
    }
    RED.nodes.registerType("CPU Temperature",cpuTemp);

    function cpuUsage(config){
        RED.nodes.createNode(this,config);
        this.timeMeassure = config.timeMeassure;
        this.meassureUnit = config.meassureUnit;
        var node = this;
        this.on('input', function(msg){
            var newMsg;
            var command = parseInt(node.timeMeassure) * parseInt(node.meassureUnit) +1;
            command =  `vmstat 1 ${command}|tail -1|awk '{print $15}'`;
            exec(`${command}`, (error, stdout, stderr) => {
                if(error){
                    node.error = error.toString();
                    return
                }
                newMsg = stdout;
            });
            sleep((command * 1000)+1000 )
            .then(() => { newMsg = stdout})
            .then(() => { 100 - parseInt(newMsg)})
            .then(() => { msg.payload = newMsg.toString();})
            .then(() => { node.send(msg)})
            
            newMsg = (parseFloat(newMsg)/1000) + parseFloat(node.unit);
            msg.payload = newMsg.toString();
            node.send(msg)
        });
    }
    RED.nodes.registerType("CPU Usage",cpuUsage);
};





