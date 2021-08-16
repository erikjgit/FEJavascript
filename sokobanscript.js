var gameMap = document.getElementById("map");

function createMap() {

    for (var i = 0; i < tileMap01.mapGrid.length; i++) {
        var column = tileMap01.mapGrid[i];
        for (var j = 0; j < column.length; j++) {
            let newBlock = document.createElement("div");
            newBlock.style.height = "50px";
            newBlock.style.width = "50px";
            switch (String(column[j])) {
                case " ":
                    newBlock.classList.add(Tiles.Space);
                    break;
                case "W":
                    newBlock.classList.add(Tiles.Wall);
                    break;
                case "G":
                    newBlock.classList.add(Tiles.Goal);
                    break;
                case "P":
                    newBlock.classList.add(Entities.Character);
                    newBlock.classList.add(Tiles.Space);
                    break;
                case "B":
                    newBlock.classList.add(Entities.Block);
                    newBlock.classList.add(Tiles.Space);
                    break;
            }
            newBlock.id = "x" + i + "y" + j;
            gameMap.appendChild(newBlock);
        }
    }
}

var position = {
    playerX: 11,
    playerY: 11,
}
function movement(x, y) {
    var player = document.getElementById("x" + (position.playerX) + "y" + (position.playerY))
    let adjecent = document.getElementById("x" + (position.playerX + x) + "y" + (position.playerY + y));
    let nextAdjecent = document.getElementById("x" + (position.playerX + x + x) + "y" + (position.playerY + y + y));
    if (adjecent.className == Tiles.Space) {
        if (player.classList.contains(Tiles.Space)) {
            player.classList.remove(Entities.Character);
            adjecent.classList.add(Entities.Character);
            position.playerX += x;
            position.playerY += y;
        }
        if (player.classList.contains(Tiles.Goal)) {
            player.classList.remove(Entities.Character);
            adjecent.classList.add(Entities.Character);
            position.playerX += x;
            position.playerY += y;
        }

    }
    if(adjecent.className==Tiles.Goal){
        if (player.classList.contains(Tiles.Space)) {
            player.classList.remove(Entities.Character);

            adjecent.classList.add(Entities.Character);
            position.playerX += x;
            position.playerY += y;
        }
        if (player.classList.contains(Tiles.Goal)) {
            player.classList.remove(Entities.Character);
            adjecent.classList.add(Entities.Character);
            position.playerX += x;
            position.playerY += y;
        }
    }

    if (adjecent.classList.contains(Entities.Block)) {
        if (nextAdjecent.className == Tiles.Space) {
            player.classList.remove(Entities.Character);;
            adjecent.classList.remove(Entities.Block);
            adjecent.classList.add(Entities.Character);
            nextAdjecent.classList.add(Entities.Block);
            position.playerX += x;
            position.playerY += y;
        }
        if (nextAdjecent.className == Tiles.Goal) {
            player.classList.remove(Entities.Character);
            adjecent.classList.remove(Entities.Block);
            adjecent.classList.add(Entities.Character);
            nextAdjecent.classList.add(Entities.BlockDone);
            position.playerX += x;
            position.playerY += y;
        }
    }

    if (adjecent.classList.contains(Entities.BlockDone)) {
        if (nextAdjecent.className == Tiles.Space) {
            player.classList.remove(Entities.Character);;
            adjecent.classList.remove(Entities.BlockDone);
            adjecent.classList.add(Entities.Character);
            nextAdjecent.classList.add(Entities.Block);
            position.playerX += x;
            position.playerY += y;
        }
        if (nextAdjecent.className == Tiles.Goal) {
            player.classList.remove(Entities.Character);
            adjecent.classList.remove(Entities.BlockDone);
            adjecent.classList.add(Entities.Character);
            nextAdjecent.classList.add(Entities.BlockDone);
            position.playerX += x;
            position.playerY += y;
        }
    }
}

document.addEventListener('keydown', function (e) {
    switch (e.keyCode) {
        case 37:
            movement(0, -1);
            break;
        case 38:
            movement(-1, 0);
            break;
        case 39:
            movement(0, 1);
            break;
        case 40:
            movement(1, 0);
            break;
    }
})

createMap();