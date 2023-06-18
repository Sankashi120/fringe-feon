info.onLifeZero(function () {
    info.changeLifeBy(-1)
    info.startCountdown(10)
})
let mySprite: Sprite = null
controller.moveSprite(mySprite)
music.ringTone(262)
music.setVolume(20)
scene.setBackgroundColor(0)
info.setLife(3)
