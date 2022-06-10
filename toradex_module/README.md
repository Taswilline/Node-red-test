# Node-red-test
These nodes are for the toradex Colibrii imx7 with carrier board aster v1.1b

The GPIO nodes give the possibility to read and write to the 40Pin Header from the Aster V1.1b. 
The dependencies to use this it to make sure gpiod is installed and the container has access to the memory. You can set up a container with a given Image.
This Image is on Dockerhub. You can find it under the name
		bat_toradex_node_red
The best way to do this is as follow:

**Setup Container**

        1. Download the image
        2. Creat the container with the dev for gpiochip 0 to 6
        3. start container, node-red will start automatically
        
**GPIO Set**

		Input: Choose the Pin which you like from the 40 pin header
		Input: Choose to switch the pin on/off
		Return: send a string back with the information with which pin was turend on/off
        
**GPIO Get**

		Ipnut: Choose the Pin which you like from the 40 pin header
		Return: gives a 1 back, when the input is high and a 0 when it is low
        
!!! For using GPIO you have to make sure node-red has access to gpiochip and gpiod is installed. Otherwise it will run into an error!!!
        
The CPU nodes give the possability to read the CPU Temperature and CPU Usage. 

**CPU Temperature** 

		Input: possible to choose the retunr value in degree ore kelvin
		Return: actual CPU Temp in kelvin ore degree.       

**CPU Usage**

		Input: Value from 1 to 10, which means how long the meassure need
		Input: Unit of time: 
		Return: Avverage of usafe over meassured time in %
		Example: Example Choose Value 5 and minutes the CPU Usage will meassured over 5 minutes and send the averrage back
