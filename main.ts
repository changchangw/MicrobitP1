serial.onDataReceived(serial.delimiters(Delimiters.NewLine), function () {
    receivedData = serial.readUntil(serial.delimiters(Delimiters.NewLine))
    if (receivedData == "CRASH") {
        music.startMelody(music.builtInMelody(Melodies.Wedding), MelodyOptions.Once)
        basic.showIcon(IconNames.Ghost)
        basic.pause(1000)
        basic.clearScreen()
    }
})
let xAccel = 0
let receivedData = ""
serial.redirectToUSB()
basic.forever(function () {
    xAccel = input.acceleration(Dimension.X)
    serial.writeLine("" + (xAccel))
    basic.pause(50)
})
