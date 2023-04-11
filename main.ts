input.onButtonPressed(Button.A, function () {
    music.setTempo(93)
    music.setVolume(175)
    music.playTone(494, music.beat(BeatFraction.Whole))
    music.playTone(440, music.beat(BeatFraction.Whole))
    music.playTone(392, music.beat(BeatFraction.Whole))
    music.playTone(440, music.beat(BeatFraction.Whole))
    music.playTone(494, music.beat(BeatFraction.Whole))
    basic.pause(20)
    music.playTone(494, music.beat(BeatFraction.Whole))
    basic.pause(20)
    music.playTone(494, music.beat(BeatFraction.Whole))
    music.playTone(440, music.beat(BeatFraction.Whole))
    basic.pause(20)
    music.playTone(440, music.beat(BeatFraction.Whole))
    basic.pause(20)
    music.playTone(440, music.beat(BeatFraction.Whole))
    music.playTone(494, music.beat(BeatFraction.Whole))
    music.playTone(587, music.beat(BeatFraction.Whole))
    music.playTone(587, music.beat(BeatFraction.Whole))
    basic.pause(200)
    music.playTone(494, music.beat(BeatFraction.Whole))
    music.playTone(440, music.beat(BeatFraction.Whole))
    music.playTone(392, music.beat(BeatFraction.Whole))
    music.playTone(440, music.beat(BeatFraction.Whole))
    music.playTone(494, music.beat(BeatFraction.Whole))
    basic.pause(20)
    music.playTone(494, music.beat(BeatFraction.Whole))
    basic.pause(20)
    music.playTone(494, music.beat(BeatFraction.Whole))
    music.playTone(440, music.beat(BeatFraction.Whole))
    basic.pause(20)
    music.playTone(440, music.beat(BeatFraction.Whole))
    music.playTone(494, music.beat(BeatFraction.Whole))
    music.playTone(440, music.beat(BeatFraction.Whole))
    music.playTone(392, music.beat(BeatFraction.Double))
    music.playTone(392, music.beat(BeatFraction.Half))
})
input.onGesture(Gesture.Shake, function () {
    basic.clearScreen()
    número_aleatorio = randint(0, 15)
    if (número_aleatorio == 2) {
        basic.showString("SI")
    } else if (número_aleatorio == 1) {
        basic.showString("NO")
    } else if (número_aleatorio == 3) {
        basic.showString("PROBABLEMENTE")
    } else if (número_aleatorio == 4) {
        basic.showString("NI IDEA")
    } else if (número_aleatorio == 6) {
        basic.showString("OBVIAMENTE")
    } else if (número_aleatorio == 5) {
        basic.showString("NO CREO")
    } else if (número_aleatorio == 7) {
        basic.showString("POR SUPUESTO")
    } else if (número_aleatorio == 8) {
        basic.showString("NEGATIVO")
    } else if (número_aleatorio == 9) {
        basic.showString("PUEDE SER")
    } else if (número_aleatorio == 10) {
        basic.showString("QUIZAS")
    } else if (número_aleatorio == 11) {
        basic.showString("NI DE BROMA")
    } else if (número_aleatorio == 12) {
        basic.showString("IMPOSIBLE")
    } else if (número_aleatorio == 14) {
        basic.showString("CLARAMENTE")
    } else if (número_aleatorio == 13) {
        basic.showString("NO TE LO PUEDO DECIR")
    } else if (número_aleatorio == 15) {
        basic.showString("CREO QUE SI")
    } else {
        basic.showString("NO SE")
    }
})
input.onButtonPressed(Button.B, function () {
    aleatorio_numero = randint(1, 4)
    if (aleatorio_numero == 1) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            # . . . #
            . # # # .
            `)
    }
    if (aleatorio_numero == 2) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            . # # # .
            # . . . #
            `)
    }
    if (aleatorio_numero == 3) {
        basic.showIcon(IconNames.EigthNote)
        music.playMelody("- - - - - - - - ", 120)
        basic.showString("FINAL FELIZ")
    }
    if (aleatorio_numero == 4) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            # # # # #
            . . . . .
            `)
    }
})
let aleatorio_numero = 0
let número_aleatorio = 0
basic.showString("HAZ UNA PREGUNTA")
basic.showNumber(8)
