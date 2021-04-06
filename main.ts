input.onButtonPressed(Button.A, function () {
    basic.showString("Created by Tim")
})
input.onButtonPressed(Button.AB, function () {
    music.playMelody("E B C5 A B G A F ", 120)
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(input.temperature())
})
let angle = 0
let opened = 95
let closed = 175
basic.forever(function () {
    led.plotBarGraph(
    input.lightLevel(),
    0
    )
    pins.servoWritePin(AnalogPin.P0, input.lightLevel())
})
basic.forever(function () {
    led.plotBarGraph(
    input.lightLevel(),
    0
    )
    angle = pins.map(
    input.lightLevel(),
    0,
    255,
    opened,
    closed
    )
    pins.servoWritePin(AnalogPin.P0, angle)
})
