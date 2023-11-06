console.log('Begin');

function pageLoader(){
    console.log('Loading Page');

    p1=Player();

    const diceButton=document.getElementsByClassName('roll-dice-button');
    for (let btn of diceButton){
        btn.addEventListener('click', main)
    }

    let playerScore=p1.points

    rollDice()
}



function rollDice(){
    let dice=[];
    let rollScore=0;
    dice.push((Math.random()*6)+1)
    dice.push((Math.random()*6)+1)
    dice.push((Math.random()*6)+1)
    dice.push((Math.random()*6)+1)
    dice.push((Math.random()*6)+1)
    dice.push((Math.random()*6)+1)
}


function checkWin(){
    if (p1.points>=10000){
        setTimeout(() => alert('You Win!'), 0)
    }
}

function main(){
    p1.rollDice();
    p1.findScore();
    p1.checkWin();
}

function findScore(){
    if (dice.includes(1, 2, 3, 4, 5, 6)){
        rollScore+=1500
        points+=1500
    } else if (dice.includes(5, 5, 5)){
        rollScore+=500
        points+=500
    } else if (dice.includes(4, 4, 4)){
        rollScore+=400
        points+=400
    } else if (dice.includes(3, 3, 3)){
        rollScore+=300
        points+=300
    } else if (dice.includes(2, 2, 2)){
        rollScore+=200
        points+=200
    } else if (dice.includes(1, 1, 1)){
        rollScore+=1000
        points+=1000
    } else {
        for (die in dice){
            if (die==1){
                rollScore+=100
                points+=100
            } else if (die==5){
                rollScore+=50
                points+=50
            }
        }
    }
}

class Player{
    constructor(points){
        this.points=0;
    }

}