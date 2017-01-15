# rpi-car - Raspbery Pi WiFi controlled car

![RPi - Car](https://github.com/amorganPD/rpi-car/blob/master/assets/rpi-car.jpg "RPi - Car")

## Required Hardware

* Actobotics Rover Kit http://www.microcenter.com/product/449368/Junior_Runt_Rover_Kit $29.99
* Raspberry Pi 3 Model B $35.00
* Adafruit DC & Stepper Motor HAT for Raspberry Pi - Mini Kit https://www.adafruit.com/products/2348 $22.50
* 4 x AA Batteries and Holder $7.49
* 5V Power Bank (5V / 1A or greater) https://www.amazon.com/Portable-Mopower-Lipstick-shaped-Aluminum-External/dp/B00W52JWFK $10.99

### Grand Total = $106

## Installation Instructions

### Python Dependencies

* git clone https://github.com/adafruit/Adafruit-Motor-HAT-Python-Library
* run 'sudo python setup.py install' inside directory to install required library
* configure I2C for the Pi https://learn.adafruit.com/adafruits-raspberry-pi-lesson-4-gpio-setup/configuring-i2c

### Running RPI-Car

* git clone https://github.com/amorganpd/rpi-car
* npm install 
* Then run 'node index.js' to launch node application
* Homepage to control vehicle located at localhost/public/
