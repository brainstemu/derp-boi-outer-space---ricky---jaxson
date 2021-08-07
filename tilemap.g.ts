// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`100010000301011001010101010101010b0b01030101011001010101010c010101010101010201100b0b02010101010101010101010101100101010101010102010101010101010e0f0f0f0f0f0f0f0f0f0f11010101010101010201010601020b0b0e0f010101020c0106060606060601010101010c0101010c06060605050606010101010101010406060605070a0506010101010b020c010606060509080d060c0101010101010106060605090705060601010101010101010606050505050606010101010c01010106060605050506060c0101011201010206060606060606010101010101010101010606060101010c01010301010101010101010101010101010b`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. 2 . . . . 2 . . . . . . . . . 
. . . . . . . . . . . 2 . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . 2 . . . . 2 . . . . 
. . . 2 . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . 2 . . . . . . . . . . . 
. . 2 . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . 2 . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16,sprites.castle.tileGrass2,sprites.castle.saplingPine,sprites.castle.tileGrass1,sprites.castle.saplingOak,sprites.builtin.brick,sprites.dungeon.hazardLava0,sprites.dungeon.buttonOrangeDepressed,sprites.dungeon.buttonPink,sprites.dungeon.buttonTealDepressed,sprites.dungeon.collectibleRedCrystal,sprites.dungeon.chestOpen,myTiles.tile1,myTiles.tile2,sprites.vehicle.roadTurn3,sprites.vehicle.roadHorizontal,sprites.vehicle.roadVertical,sprites.vehicle.roadTurn2,myTiles.tile3], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile":
            case "tile1":return tile1;
            case "myTile0":
            case "tile2":return tile2;
            case "myTile1":
            case "tile3":return tile3;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
