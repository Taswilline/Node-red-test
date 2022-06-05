module.exports = function(RED){
    
    function cpuTemp(config){
        RED.nodes.createNode(this, config);
        var node = this;
        this.on('input', function(msg){
            msg.payload = "cat /sys/devices/virtual/thermal/thermal_zone0/temp";
            node.send(msg)
        });
    }
    RED.nodes.registerType("CPU Temperature",cpuTemp);

    function cpuUsage(config){
        RED.nodes.createNode(this,config);
        this.timeMeassure = config.timeMeassure;
        var node = this;
        this.on('input', function(msg){
            msg.payload = "echo $[100-$(vmstat 1 "+ node.timeMeassure + "|tail -1|awk '{print $15}')]";
            node.send(msg)
        });
    }
    RED.nodes.registerType("CPU Usage",cpuUsage);
};

