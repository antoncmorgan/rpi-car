#!/usr/bin/python
from Adafruit_MotorHAT import Adafruit_MotorHAT, Adafruit_DCMotor

import time
import atexit
import sys, getopt

# create a default object, no changes to I2C address or frequency
mh = Adafruit_MotorHAT(addr=0x60)

# recommended for auto-disabling motors on shutdown!
def turnOffMotors():
    mh.getMotor(1).run(Adafruit_MotorHAT.RELEASE)
    mh.getMotor(2).run(Adafruit_MotorHAT.RELEASE)
    mh.getMotor(3).run(Adafruit_MotorHAT.RELEASE)
    mh.getMotor(4).run(Adafruit_MotorHAT.RELEASE)

#atexit.register(turnOffMotors)

################################# DC motor test!
Motor1 = mh.getMotor(3)
Motor2 = mh.getMotor(4)

if len(sys.argv) > 2:
  if sys.argv[1] == '0' and sys.argv[2] == '0':
    turnOffMotors
  else:
    Motor1.setSpeed(int(sys.argv[1]))
    Motor2.setSpeed(int(sys.argv[2]))
    print(sys.argv[1] + "," + sys.argv[2]);
    if sys.argv[3] == '1':
      Motor1.run(Adafruit_MotorHAT.FORWARD);
      Motor2.run(Adafruit_MotorHAT.FORWARD);
    else:
      Motor1.run(Adafruit_MotorHAT.BACKWARD);
      Motor2.run(Adafruit_MotorHAT.BACKWARD);



