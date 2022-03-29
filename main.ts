input.onButtonPressed(Button.A, function () {
    fugl.change(LedSpriteProperty.Y, -1)
})
input.onButtonPressed(Button.B, function () {
    fugl.change(LedSpriteProperty.Y, 1)
})
let fugl: game.LedSprite = null
let index = 0
let hindring1: game.LedSprite[] = []
fugl = game.createSprite(0, 2)
fugl.set(LedSpriteProperty.Blink, 300)
basic.forever(function () {
    while (hindring1.length > hindring1[0].get(LedSpriteProperty.X) && false) {
        hindring1.removeAt(0).delete()
    }
    for (let hindring2 of hindring1) {
        hindring2.change(LedSpriteProperty.X, -1)
    }
})
