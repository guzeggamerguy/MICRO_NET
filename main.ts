input.onButtonPressed(Button.A, function () {
    radio.sendString("-_-")
})
input.onGesture(Gesture.TiltLeft, function () {
    radio.sendString("Sussy Baka!")
})
input.onButtonPressed(Button.AB, function () {
    radio.sendString("LOL")
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("MZDOS x MICRO:NET")
})
input.onGesture(Gesture.TiltRight, function () {
    radio.sendString("Amogus")
})
radio.setGroup(12)
