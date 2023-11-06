console.log('Begin');





class Player{
    constructor(){
        this.points=0;
        this.dice=[];
    }
    findScore(){       
        if (this.dice.includes(1, 2, 3, 4, 5, 6)){           
            this.points+=1500
        } else if (this.dice.includes(5, 5, 5)){
            this.points+=500
        } else if (this.dice.includes(4, 4, 4)){
            this.points+=400
        } else if (this.dice.includes(3, 3, 3)){
            this.points+=300
        } else if (this.dice.includes(2, 2, 2)){
            this.points+=200
        } else if (this.dice.includes(1, 1, 1)){
            this.points+=1000
        } else {
            for (die in this.dice){
                if (die==1){
                    this.points+=100
                } else if (die==5){
                    this.points+=50
                }
            }
        }this.displayScore();
    }
    checkWin(){
        if (this.points>=10000){
            setTimeout(() => alert('You Win!'), 0)
        }
    }
    rollDice(){
        this.dice=[];
        this.dice.push((Math.floor(Math.random()*6)+1))
        this.dice.push((Math.floor(Math.random()*6)+1))
        this.dice.push((Math.floor(Math.random()*6)+1))
        this.dice.push((Math.floor(Math.random()*6)+1))
        this.dice.push((Math.floor(Math.random()*6)+1))
        this.dice.push((Math.floor(Math.random()*6)+1))
        let diceRow=document.getElementById('dice');
        diceRow.innerHTML='';
        for (let die of this.dice){
            let col=document.createElement('div');
            col.className='col-2 text-center';
            col.innerHTML=`<h1>${die}</h1>`
            diceRow.append(col);
        }
    }
    displayScore(){
        let scoreElement=document.getElementById('score');
        scoreElement.innerHTML=this.points;
    }
}

pageLoader();

function pageLoader(){
    console.log('Loading Page');

    let p1=new Player();

    const diceButton=document.getElementById('roll-dice-button');
    console.log(diceButton);
    diceButton.addEventListener('click', (e) => main(e, p1))

    

}








function main(e, p1){
    console.log(p1);
    p1.rollDice();
    p1.findScore();
    p1.checkWin();
}



