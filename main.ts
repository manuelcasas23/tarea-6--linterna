input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    pins.analogWritePin(AnalogPin.P1, 0)
})
input.onButtonPressed(Button.A, function () {
    pins.analogWritePin(AnalogPin.P1, 1023)
    basic.showString("MAXIMO")
})
input.onButtonPressed(Button.AB, function () {
    for (let index = 0; index < 20; index++) {
        if (!(input.logoIsPressed())) {
            pins.analogWritePin(AnalogPin.P1, 1023)
            basic.pause(100)
            pins.analogWritePin(AnalogPin.P1, 0)
            basic.pause(100)
        }
    }
})
input.onButtonPressed(Button.B, function () {
    pins.analogWritePin(AnalogPin.P1, 500)
    basic.showString("MEDIO")
})
basic.showString("LINTERNA ")
