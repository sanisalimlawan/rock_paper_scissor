function getcomputerchoice(){
    const computer = Math.floor(Math.random()*3)
    if(computer === 0){
        return 'rock'
    }else if(computer === 1){
        return 'paper'
    }else if(computer === 2){
        return 'scisors'
    }

    return computer;
}

getcomputerchoice()

let rondwinner = ""
let playerscore = 0
let computerscore  = 0

function playround(playerseletion, computerselection){

  if(computerselection === playerseletion) {
    rondwinner = "tie"
  } 

  if((computerselection === 'rock' && playerseletion === 'scisors') || 
    (computerselection === 'scisors' && playerseletion === 'paper') ||
    (computerselection === 'paper' && playerseletion === 'rock'))
    {
     computerscore++
     rondwinner = 'computer'
    }

    if((playerseletion === 'rock' && computerselection === 'scisors') || 
    (playerseletion === 'scisors' && computerselection === 'paper') ||
    (playerseletion === 'paper' && computerselection === 'rock'))
    {
     playerscore++
     rondwinner = 'player'
    }

    console.log(rondwinner)

    if(playerscore == 2 || computerscore == 2){
        console.log('game over')
       }

  
    
}

function gameover(){
    
}

// const valu = prompt().value;

const playerseletion = prompt();
const computerselection = getcomputerchoice()
console.log(playerseletion)
console.log(computerselection)

playround(playerseletion, computerselection)
