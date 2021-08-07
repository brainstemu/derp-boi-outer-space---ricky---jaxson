scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile1`, function (sprite, location) {
    if (true) {
        game.over(true)
    } else {
    	
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile`, function (sprite, location) {
    game.over(false)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.hazardLava0, function (sprite, location) {
    game.over(false)
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
})
info.onLifeZero(function () {
    game.reset()
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.chestOpen, function (sprite, location) {
    if (humbarger == 0) {
        info.changeScoreBy(1)
        music.buzzer.play()
        tiles.setTileAt(location, sprites.castle.tileGrass2)
    } else {
        game.showLongText("HAHHA U DONT HAVE IT YET MHAMHAMHAMAHMHA ", DialogLayout.Bottom)
        pause(100)
    }
})
let humbarger = 0
humbarger = 0
info.setLife(3)
tiles.setTilemap(tilemap`level1`)
let derp_boi = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . 9 9 9 9 9 9 9 9 9 9 9 9 9 9 . 
    . 9 9 9 9 9 9 9 9 9 9 9 9 9 9 . 
    . 9 9 9 9 9 9 9 9 9 9 9 9 9 9 . 
    . 5 9 9 5 9 5 5 5 9 9 9 5 9 5 . 
    . 5 9 5 5 9 5 5 9 5 5 5 5 9 5 . 
    f 5 5 f 5 5 5 5 9 9 5 5 f 5 5 f 
    f 5 5 5 5 f 5 5 5 5 f 5 5 5 5 f 
    f 5 5 5 f f 5 5 5 5 f f 5 5 5 f 
    f 5 5 5 5 5 f 5 5 f 5 5 5 5 5 f 
    f 5 5 5 5 5 5 f f 5 5 5 5 5 5 f 
    f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
    f . 5 5 5 5 5 5 5 5 5 5 5 5 . f 
    . . . 5 5 5 5 5 5 5 5 5 5 . . . 
    . . . . 5 5 5 5 5 5 5 5 . . . . 
    . f f f f f f . . f f f f f f . 
    `, SpriteKind.Player)
controller.moveSprite(derp_boi, 150, 150)
let lava_mon = sprites.create(img`
    .....4544444454.....
    ....445444444544....
    ....452544445254....
    ....445422524544....
    ...4.4544542254.5...
    ..5.2.45252424.4.2..
    .2...4.444444.4...4.
    .4..452455522252..4.
    .5..44552..25544..5.
    .2..22445..54422..4.
    .4..25254..45252..2.
    5.2.25525..52552.2.4
    2..45555....55554..5
    ....4444....4444....
    ...444444..444444...
    ....44445..24444....
    ....2222.2.22222....
    ....22222..52222....
    ....2222....2222....
    ..555555....555555..
    `, SpriteKind.Enemy)
lava_mon.setPosition(90, 2)
lava_mon.follow(derp_boi, 15)
scene.cameraFollowSprite(derp_boi)
