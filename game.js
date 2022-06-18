let scoreMachine = 0;
let scoreHuman = 0;


let tabla = document.getElementById('score');

    
        let output = (Math.random()*2);

        const plays = ['ROCK','SCISSORS','PAPER']
        let compPlay = plays[output.toFixed(0)]
        computerDisplay(compPlay);   
        return compPlay;       
    }
    function computerDisplay(compPlay){
    const awnser = document.getElementById('awnseria');
    const display = document.createElement('h3');
    display.innerHTML = `The computer plays ${compPlay}`; 
    awnser.appendChild(display);
    }




    function round(player1,player2){
        let win = 'win';
        let lost = 'lost';
        let computer = player2;
        
        if (computer === 'ROCK') {        
            switch (player1){
                case ('ROCK'):
                    console.log("Its a tie");
                break;
                case ('SCISSORS'):
                    console.log(`You lose because ${computer} wins ${player1} `);
                    return lost;
        
                    break;
                case ('PAPER'):
                    console.log(`You win because ${player1} wins ${computer} `);
                    return win;

                    break;      
            }}
            if (computer === 'SCISSORS') {        
                switch (player1){
                    case ('ROCK'):
                        console.log(`You win because ${player1} wins ${computer} `);
                        return win;

                    break;
                    case ('SCISSORS'):
                        console.log("Its a tie");
                        break;
                    case ('PAPER'):
                        console.log(`You lose because ${computer} wins ${player1} `);
                        return lost;
                        break;      
                    }
                }
                if (computer === 'PAPER') {        
                    switch (player1){
                        case ('ROCK'):
                            console.log(`You lose because ${computer} wins ${player1} `);
                            return lost;
                        break;
                        case ('SCISSORS'):
                            console.log(`You win because ${player1} wins ${computer} `);
                            return win;

                            break;
                        case ('PAPER'):
                            console.log("Its a tie");
        
                            break;  
        }
    }
    }
    function game(player1){
     let computerMove = computerPlay();
        let result = round(player1,computerMove);   
        
        
        if (result === 'win'){
            scoreHuman++;
        }else if(result === 'lost'){
            scoreMachine++;
        }
        else{
            console.log('Its a tie');    
        }
        if (scoreHuman === 5){
            alert('You win');
            scoreHuman = 0;
            scoreMachine = 0;
        }
        if (scoreMachine === 5){
            alert('You lose');
            scoreHuman = 0;
            scoreMachine = 0;
        };
        console.log(`Your score is ${scoreHuman} and the computer score is ${scoreMachine}`); 
       
    }

const buttons = document.querySelectorAll('button');
buttons.forEach(button =>{
        button.addEventListener('click',() =>{
//            alert(button.id);
            

                game(button.id);
            
        });
    });
  
