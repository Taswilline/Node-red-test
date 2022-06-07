const {execSync} = require('child_process');
module.exports = function(RED){
    
    function cpuTemp(config){
        RED.nodes.createNode(this, config);
        this.unit = config.unit;
        var node = this;
        this.on('input', function(msg){
            var newMsg;
            newMsg = execSync('cat "/sys/devices/virtual/thermal/thermal_zone0/temp"').toString();
            newMsg = (parseFloat(newMsg)/1000) +parseFLoat(node.unit);
            msg.payload = newMsg.toString();
            node.send(msg)
        });
    }
    RED.nodes.registerType("CPU Temperature",cpuTemp);

    function cpuUsage(config){
        RED.nodes.createNode(this,config);
        this.timeMeassure = config.timeMeassure;
        var node = this;
        this.on('input', function(msg){
            var command = `echo $[100-$(vmstat 1 ${node.timeMeassure}|tail -1|awk '{print $15}')]`;
            msg.payload = execSync(command);
            node.send(msg)
        });
    }
    RED.nodes.registerType("CPU Usage",cpuUsage);
};

