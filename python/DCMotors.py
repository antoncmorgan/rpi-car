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
RightFrontMotor = mh.getMotor(1)
RightRearMotor = mh.getMotor(3)
LeftFrontMotor = mh.getMotor(2)
LeftRearMotor = mh.getMotor(4)

if len(sys.argv) > 2:
  if sys.argv[1] == '0' and sys.argv[2] == '0':
    turnOffMotors
  else:
    RightFrontMotor.setSpeed(int(sys.argv[1]))
    RightRearMotor.setSpeed(int(sys.argv[1]))
    LeftFrontMotor.setSpeed(int(sys.argv[2]))
    LeftRearMotor.setSpeed(int(sys.argv[2]))
    if sys.argv[3] == '1':
      RightFrontMotor.run(Adafruit_MotorHAT.FORWARD);
      RightRearMotor.run(Adafruit_MotorHAT.FORWARD);
      LeftFrontMotor.run(Adafruit_MotorHAT.FORWARD);
      LeftRearMotor.run(Adafruit_MotorHAT.FORWARD);
    else:
      RightFrontMotor.run(Adafruit_MotorHAT.BACKWARD);
      RightRearMotor.run(Adafruit_MotorHAT.BACKWARD);
      LeftFrontMotor.run(Adafruit_MotorHAT.BACKWARD);
      LeftRearMotor.run(Adafruit_MotorHAT.BACKWARD);



