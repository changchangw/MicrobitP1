serial.redirectToUSB()

basic.forever(function () {
    let xAccel = input.acceleration(Dimension.X) 
    serial.writeLine("" + xAccel) 
    basic.pause(100) 
})