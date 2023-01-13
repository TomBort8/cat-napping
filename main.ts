input.onButtonPressed(Button.A, function () {
    loging = !(loging)
    if (loging) {
        basic.showIcon(IconNames.Target)
    } else {
        basic.clearScreen()
    }
})
let loging = false
loging = false
loops.everyInterval(60000, function () {
    if (loging) {
        datalogger.log(
        datalogger.createCV("temp", input.temperature()),
        datalogger.createCV("light", input.lightLevel())
        )
    }
})
basic.forever(function () {
	
})
