# Node-red-test
This nodes are for the toradex cloibri imx7 with carrier board aster v1.1b

The GPIO nodes give possability to read and write to the 40Pin Header from the Aster V1.1b. 
The dependecies to use this it to make sure gpiod is installed and the container have access to the memory. 
The best way to do this is like follow:

		1. donwload gpiod image from toradex
		2. creat the gpiod container with the dev for gpiochip 0 to 6
		3. install node red inside of the container
		4. start node red inside the container with the command node-red
		
		GPIO Set
		1. All possible Pin from the 40 Pin header in a drop-down menu.
		2. If you like to write a 1 => chose "on" in the list
		   ore choose "off" in the list to write a 0
		
		GPIO Get
		1. All possible Pins from the 40 Pin header in a drop-down menu
		   to read as input.
		
!!! For using GPIO you have to be make sure node-red have access to gpiochip and gpiod is installed. Otherwhise it wil run in to a error.!!!
		
The CPU nodes give possability to read the CPU Temperature and CPU Usage. 

	CPU Temperate is given back a value which have to interpret like this. 
		1. Value /1000 = Value in degree
	
	CPU Usage is given back the usage of the CPU over meassured time.
		1. How long the meassure have to be from 1 to 10 seconds in a drop down menu
		2. The Value which came back is in "%"
	
	
