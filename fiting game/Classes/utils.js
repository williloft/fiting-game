function rectangularCollision({rect1, rect2}) {
    return (
        rect1.attackBox.position.x + 
        rect1.attackBox.width >= 
        rect2.position.x && 
        rect1.attackBox.position.x <= 
        rect2.position.x + rect2.width &&
        rect1.attackBox.position.y + rect1.attackBox.height >= 
        rect2.position.y &&
        rect1.attackBox.position.y <= 
        rect2.position.y + rect2.height
    )
}

let timer = 60
let timerid

const displayText = document.querySelector('#displayText')
const displayTextStyle = document.querySelector('#displayText').style
const displayTimer = document.querySelector('#timer')
    
function pickAWinner({player, enemy, timerid}) {
    clearTimeout(timerid)
    
    displayTextStyle.display = 'flex'
    
    if(player.health === enemy.health) {
        displayTimer.innerHTML = 'Draw'
        displayText.innerHTML = 'Rematch!'
    } 
    else if (player.health > enemy.health) {
        displayText.innerHTML = 'Player 1 Wins!'
    } 
    else if (player.health < enemy.health) {
        displayText.innerHTML = 'Player 2 Wins!'
    }
}


function decreeaseTimmer() {
    if (timer > 0) {
        timerid = setTimeout(decreeaseTimmer, 1000)
        timer--
        displayTimer.innerHTML = timer
    }

    if (timer === 0) 
    {
        displayTextStyle.display = 'flex'
        pickAWinner({player, enemy, timerid})
    }
}

decreeaseTimmer()