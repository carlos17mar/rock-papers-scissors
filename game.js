function computerPlay(){
 
    let output = (Math.random()*2);

    const plays = ['ROCK','SCISSORS','PAPER']
    let compPlay = plays[output.toFixed(0)]
     return compPlay;       
 }



//0 Piedra,1 papel,2 tijeras
function round(player1){
    let win = 'win';
    let lost = 'lost';
    let computer = computerPlay();
    let input = player1.toUpperCase();
    if (computer === 'ROCK') {        
        switch (input){
            case ('ROCK'):
                console.log("Its a tie");
            break;
            case ('SCISSORS'):
                console.log(`You lose because ${computer} wins ${input} `);
                return lost;
    
                break;
            case ('PAPER'):
                console.log(`You win because ${input} wins ${computer} `);
                return win;

                break;      
        }}
        if (computer === 'SCISSORS') {        
            switch (input){
                case ('ROCK'):
                    console.log(`You win because ${input} wins ${computer} `);
                    return win;

                break;
                case ('SCISSORS'):
                    console.log("Its a tie");
                    break;
                case ('PAPER'):
                    console.log(`You lose because ${computer} wins ${input} `);
                    return lost;
                    break;      
                }
            }
            if (computer === 'PAPER') {        
                switch (input){
                    case ('ROCK'):
                        console.log(`You lose because ${computer} wins ${input} `);
                        return lost;
                    break;
                    case ('SCISSORS'):
                        console.log(`You win because ${input} wins ${computer} `);
                        return win;

                        break;
                    case ('PAPER'):
                        console.log("Its a tie");
    
                        break;  HO
    }
 }
}
function game(){
    let scoreMachine = 0;
    let scoreHuman = 0;
   for(let i = 0 ; i<5;i++){
    let awnser = 'rock';//prompt("Rock, Papers of Scissors")
    
    
    if (round(awnser) === 'win'){
        scoreHuman++;
    }else if(round(awnser) === 'lost'){
        scoreMachine++;
    }
    else{
        
    }
    console.log(`Your score is ${scoreHuman}`);
    console.log(`The score of the machine is  ${scoreMachine}`);
   }
}
    