let trocaLed = 0
let LedRed = 0
let ledGreen = 0
let ledBlue = 0
basic.forever(function () {
    if (input.pinIsPressed(TouchPin.P2) && false) {
        // este foi o primeiro teste
        if (input.buttonIsPressed(Button.A)) {
            ModuleWorld_PWM.RGB(255, 0, 0)
        } else if (input.buttonIsPressed(Button.B)) {
            ModuleWorld_PWM.RGB(0, 255, 0)
        } else if (input.logoIsPressed()) {
            ModuleWorld_PWM.RGB(0, 0, 255)
        } else {
            ModuleWorld_PWM.RGB2(ModuleWorld_PWM.enColor.OFF)
        }
    }
    if (false) {
        if (input.logoIsPressed() && false) {
            ModuleWorld_PWM.RGB(255, 0, 0)
        }
        basic.pause(500)
        if (input.logoIsPressed()) {
            ModuleWorld_PWM.RGB(0, 255, 0)
        }
        basic.pause(500)
        if (input.logoIsPressed()) {
            ModuleWorld_PWM.RGB(0, 0, 255)
        }
        basic.pause(500)
    }
    if (input.logoIsPressed() && true) {
        trocaLed = trocaLed + 1
        if (trocaLed >= 4) {
            trocaLed = 1
        }
        if (trocaLed == 1) {
            basic.showString("R")
        } else if (trocaLed == 2) {
            basic.showString("G")
        } else if (trocaLed == 3) {
            basic.showString("B")
        } else {
            basic.clearScreen()
        }
    } else {
        ModuleWorld_PWM.RGB(LedRed, ledGreen, ledBlue)
        if (trocaLed == 1) {
            if (input.buttonIsPressed(Button.B) && LedRed < 250) {
                LedRed = LedRed + 10
            } else if (input.buttonIsPressed(Button.A) && LedRed > 10) {
                LedRed = LedRed - 10
            } else {
            	
            }
        }
        if (trocaLed == 2) {
            if (input.buttonIsPressed(Button.B) && ledGreen < 250) {
                ledGreen = ledGreen + 10
            } else if (input.buttonIsPressed(Button.A) && ledGreen > 10) {
                ledGreen = ledGreen - 10
            } else {
            	
            }
        }
        if (trocaLed == 3) {
            if (input.buttonIsPressed(Button.B) && ledBlue < 250) {
                ledBlue = ledBlue + 10
            } else if (input.buttonIsPressed(Button.A) && ledBlue > 10) {
                ledBlue = ledBlue - 10
            } else {
            	
            }
        }
    }
})
