basic.forever(function () {
    basic.showNumber(pins.analogReadPin(AnalogPin.P4))
    if (pins.analogReadPin(AnalogPin.P4) >= 400) {
        pins.digitalWritePin(DigitalPin.P5, 1)
    } else {
        pins.digitalWritePin(DigitalPin.P5, 0)
    }
})
