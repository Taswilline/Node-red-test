const {exec} = require('child_process');
module.exports = function(RED){
    
    function cpuTemp(config){
        RED.nodes.createNode(this, config);
        this.unit = config.unit;
        var node = this;
        this.on('input', function(msg){
            var newMsg;
            exec('cat "/sys/devices/virtual/thermal/thermal_zone0/temp"', error, stdout, stderr);
            setTimeout(() => {newMsg = stdout;} ,5);
            newMsg = (parseFloat(newMsg)/1000) + parseFloat(node.unit);
            msg.payload = newMsg.toString();
            node.send(msg)
        });
    }
    RED.nodes.registerType("CPU Temperature",cpuTemp);

    function cpuUsage(config){
        RED.nodes.createNode(this,config);
        this.timeMeassure = config.timeMeassure;
        this.meassureUnit = config.meassureUnit;
        var node = this;
        this.on('input', function(msg){
            var command = parseInt(node.timeMeassure) * parseInt(node.meassureUnit) +1;
            command =  `vmstat 1 ${command}|tail -1|awk '{print $15}'`;
            exec(`${command}`,error, stdout, stderr);
            var newmsg;
            setTimeout(() => {newmsg = stdout},parseInt(command));
            newmsg = 100 - (parseInt(newmsg));
            msg.payload = newmsg.toString();
            node.send(msg)
        });
    }
    RED.nodes.registerType("CPU Usage",cpuUsage);
};





