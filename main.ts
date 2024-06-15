radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        wuKong.setMotorSpeed(wuKong.MotorList.M1, -50)
        wuKong.setMotorSpeed(wuKong.MotorList.M2, -50)
        basic.pause(500)
        wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S1, 210)
        wuKong.stopAllMotor()
        雨水 = false
    }
})
input.onButtonPressed(Button.B, function () {
    wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S1, 360)
    basic.pause(500)
    wuKong.setMotorSpeed(wuKong.MotorList.M1, 50)
    wuKong.setMotorSpeed(wuKong.MotorList.M2, 50)
    basic.pause(500)
    wuKong.stopAllMotor()
    雨水 = true
})
let 雨水 = false
basic.showLeds(`
    . . # . .
    . # # . .
    . . # . .
    . . # . .
    . # # # .
    `)
雨水 = false
radio.setGroup(1)
basic.forever(function () {
    if (Environment.ReadWaterLevel(AnalogPin.P1) > 10) {
        if (雨水 == false) {
            wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S1, 360)
            basic.pause(500)
            wuKong.setMotorSpeed(wuKong.MotorList.M1, 50)
            wuKong.setMotorSpeed(wuKong.MotorList.M2, 50)
            basic.pause(500)
            wuKong.stopAllMotor()
            雨水 = true
        }
    }
    if (Environment.ReadWaterLevel(AnalogPin.P1) < 10) {
        if (雨水 == true) {
            雨水 = false
        }
    }
})
