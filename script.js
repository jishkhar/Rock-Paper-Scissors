function rock(){
    const randomNum = Math.random();
    let computerMove;

    if(randomNum>=0  && randomNum<(1/3)){
        computerMove = 'rock'
    }else if(randomNum>=(1/3)  &&  randomNum<(2/3)){
        computerMove = 'paper'
    }else{
        computerMove = 'scissors'
    }

    if(computerMove === 'rock'){
        alert(`You chose Rock. Computer chose ${computerMove}. Therefore, Tie.`)
    }else if(computerMove === 'paper'){
        alert(`You chose Rock. Computer chose ${computerMove}. Therefore, you lose.`)
    }else{
        alert(`You chose Rock. Computer chose ${computerMove}. Therefore, you win.`)
    }
}




function paper(){
    const randomNum = Math.random();
    let computerMove;

    if(randomNum>=0  && randomNum<(1/3)){
        computerMove = 'rock'
    }else if(randomNum>=(1/3)  &&  randomNum<(2/3)){
        computerMove = 'paper'
    }else{
        computerMove = 'scissors'
    }

    if(computerMove === 'rock'){
        alert(`You chose Paper. Computer chose ${computerMove}. Therefore, you win.`)
    }else if(computerMove === 'paper'){
        alert(`You chose Paper. Computer chose ${computerMove}. Therefore, tie.`)
    }else{
        alert(`You chose Paper. Computer chose ${computerMove}. Therefore, you lose.`)
    }    
}




function scissors(){
    const randomNum = Math.random();
    let computerMove;

    if(randomNum>=0  && randomNum<(1/3)){
        computerMove = 'rock'
    }else if(randomNum>=(1/3)  &&  randomNum<(2/3)){
        computerMove = 'paper'
    }else{
        computerMove = 'scissors'
    }

    if(computerMove === 'rock'){
        alert(`You chose Scissors. Computer chose ${computerMove}. Therefore, you lose.`)
    }else if(computerMove === 'paper'){
        alert(`You chose Scissors. Computer chose ${computerMove}. Therefore, you win.`)
    }else{
        alert(`You chose Scissors. Computer chose ${computerMove}. Therefore, tie.`)
    }
}