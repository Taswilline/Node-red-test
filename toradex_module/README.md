# Node-red-test
These nodes are for the toradexColibrii imx7 with carrier board aster v1.1b

The GPIO nodes give the possibility to read and write to the 40Pin Header from the Aster V1.1b. 
The dependencies to use this it to make sure gpiod is installed and the container has access to the memory. You can set up a container with a given Image.
This Image is on Dockerhub. You can find it under the name bat_toradex_node_red
The best way to do this is as follow:

        1. Download the image
        2. Creat the container with the dev for gpiochip 0 to 6
        3. start container, node-red will start automatically
        
GPIO Set
        1. All possible Pin from the 40 Pin header in a drop-down menu.
        2. If you like to write a 1 => chose "on" in the list
           ore choose "off" in the list to write a 0
        
GPIO Get
        1. All possible Pins from the 40 Pin header in a drop-down menu
           to read as input.
        
!!! For using GPIO you have to make sure node-red has access to gpiochip and gpiod is installed. Otherwise it will run into an error.!!!
        
The CPU nodes give the possability to read the CPU Temperature and CPU Usage. 

    CPU Temperate is given back a value which has to interpret like this. 
        1. Value /1000 = Value in degree
    
    CPU Usage is given back the usage of the CPU over measured time.
        1. How long does the measure have to be from 1 to 10 seconds,minutes   ore hours in a drop-down menu
        2. The Value which came back is in "%"
