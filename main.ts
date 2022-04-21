function getTemperature (room: number) {
    return smarthome.ReadTemperature(TMP36Type.TMP36_temperature_C, room)
}
let dvere3 = 0
radio.setGroup(203)
music.playTone(131, music.beat(BeatFraction.Whole))
const TemperatureSensors = {
    LIVING_ROOM: AnalogPin.P1,
    BATH_ROOM: AnalogPin.P2,
    KITCHEN: AnalogPin.P1,
};
loops.everyInterval(1000, function () {
    if (smarthome.ReadLightIntensity(AnalogPin.P1) < 0) {
        pins.digitalWritePin(DigitalPin.P0, 1)
    } else {
        pins.digitalWritePin(DigitalPin.P0, 0)
    }
})
basic.forever(function () {
    let dvere1 = 0
    let dvere2 = 0
    if (getTemperature(TemperatureSensors.LIVING_ROOM) > 30) {
        music.startMelody(music.builtInMelody(Melodies.Nyan), MelodyOptions.Once)
    }
    if (pins.digitalReadPin(DigitalPin.P1) == 1 && dvere3 == 0) {
        radio.sendNumber(31)
        dvere3 = 1
        pins.servoWritePin(AnalogPin.P13, 180)
    } else if (pins.digitalReadPin(DigitalPin.P1) == 1) {
        radio.sendNumber(30)
        dvere3 = 0
        pins.servoWritePin(AnalogPin.P0, 0)
        pins.servoWritePin(AnalogPin.P13, 0)
        pins.digitalWritePin(DigitalPin.P0, 0)
    }
    if (pins.digitalReadPin(DigitalPin.P2) == 1 && dvere2 == 0) {
        radio.sendNumber(20)
        dvere3 = 1
        pins.servoWritePin(AnalogPin.P14, 180)
        pins.digitalWritePin(DigitalPin.P0, 1)
    } else if (pins.digitalReadPin(DigitalPin.P2) == 1) {
        radio.sendNumber(21)
        dvere3 = 0
        pins.servoWritePin(AnalogPin.P0, 0)
        pins.servoWritePin(AnalogPin.P14, 0)
        pins.digitalWritePin(DigitalPin.P0, 0)
    }
    if (pins.digitalReadPin(DigitalPin.P3) == 1 && dvere1 == 0) {
        radio.sendNumber(11)
        dvere3 = 1
        pins.servoWritePin(AnalogPin.P15, 180)
        basic.pause(2000)
        pins.digitalWritePin(DigitalPin.P12, 1)
    } else if (pins.digitalReadPin(DigitalPin.P3) == 1) {
        radio.sendNumber(10)
        dvere3 = 0
        pins.servoWritePin(AnalogPin.P15, 0)
        pins.digitalWritePin(DigitalPin.P12, 0)
    }
})
