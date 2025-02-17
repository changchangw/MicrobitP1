let xAccel = 0
serial.redirectToUSB()
basic.forever(function () {
    xAccel = input.acceleration(Dimension.X)
    serial.writeLine("" + (xAccel))
    basic.pause(50)
})