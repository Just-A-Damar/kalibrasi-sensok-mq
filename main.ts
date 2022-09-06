// Asep / MQ
basic.forever(function () {
    if (pins.analogReadPin(AnalogPin.P4) >= 400) {
        music.playMelody("G D F - B D E G ", 300)
    }
    if (pins.analogReadPin(AnalogPin.P4) <= 400) {
    	
    }
})
// Gempa
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P0) == 1) {
        basic.showString("Gempa")
        music.playMelody("A B F G E C5 A C ", 300)
        basic.pause(2000)
    }
    pins.digitalWritePin(DigitalPin.P1, 0)
    basic.showNumber(0)
})
// Air
basic.forever(function () {
    serial.writeValue("Level", pins.analogReadPin(AnalogPin.P2))
    basic.showNumber(pins.analogReadPin(AnalogPin.P2))
})
