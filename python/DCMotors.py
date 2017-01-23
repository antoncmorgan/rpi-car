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
    newRightSpeed = int(sys.argv[1])
    newLeftSpeed = int(sys.argv[2])
    if newRightSpeed < 0:
      newRightSpeed = -newRightSpeed
      rightDirection = Adafruit_MotorHAT.BACKWARD
    else:
      rightDirection = Adafruit_MotorHAT.FORWARD

    if newLeftSpeed < 0:
      newLeftSpeed = -newLeftSpeed;
      leftDirection = Adafruit_MotorHAT.BACKWARD
    else:
      leftDirection = Adafruit_MotorHAT.FORWARD

    RightFrontMotor.setSpeed(newRightSpeed)
    RightRearMotor.setSpeed(newRightSpeed)
    LeftFrontMotor.setSpeed(newLeftSpeed)
    LeftRearMotor.setSpeed(newLeftSpeed)
    RightFrontMotor.run(rightDirection)
    RightRearMotor.run(rightDirection)
    LeftFrontMotor.run(leftDirection)
    LeftRearMotor.run(leftDirection)



