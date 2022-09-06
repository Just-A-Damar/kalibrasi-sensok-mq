def on_forever():
    if pins.analog_read_pin(AnalogPin.P4) >= 400:
        music.play_melody("G D F - B D E G ", 300)
    if pins.analog_read_pin(AnalogPin.P4) <= 400:
        pass
basic.forever(on_forever)

def on_forever2():
    if pins.digital_read_pin(DigitalPin.P0) == 1:
        basic.show_string("Gempa")
        music.play_melody("A B F G E C5 A C ", 300)
        basic.pause(2000)
    pins.digital_write_pin(DigitalPin.P1, 0)
    basic.show_number(0)
basic.forever(on_forever2)

def on_forever3():
    serial.write_value("Level", pins.analog_read_pin(AnalogPin.P2))
    basic.show_number(pins.analog_read_pin(AnalogPin.P2))
basic.forever(on_forever3)
