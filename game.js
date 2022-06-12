function computerPlay(){
 
    let output = (Math.random()*2);

    const plays = ['ROCK','SCISSORS','PAPER']
    let compPlay = plays[output.toFixed(0)]
     return compPlay;       
 }



//0 Piedra,1 papel,2 tijeras
function round(player1){
    let computer = computerPlay();
    let input = player1.toUpperCase();
    if (computer === 'ROCK') {        
    switch (input){
        case ('ROCK'):
            console.log("Its a tie");
        break;
        case ('SCISSORS'):
            console.log(`You lose because ${computer} wins ${input} `);

            break;
        case ('PAPER'):
            console.log(`You win because ${input} wins ${computer} `);

            break;      
    }}
    if (computer === 'SCISSORS') {        
        switch (input){
            case ('ROCK'):
                console.log(`You win because ${input} wins ${computer} `);
            break;
            case ('SCISSORS'):
                console.log("Its a tie");
                break;
            case ('PAPER'):
                console.log(`You lose because ${computer} wins ${input} `);

                break;      
            }
        }
        if (computer === 'PAPER') {        
            switch (input){
                case ('ROCK'):
                    console.log(`You lose because ${computer} wins ${input} `);

                break;
                case ('SCISSORS'):
                    console.log(`You win because ${input} wins ${computer} `);

                    break;
                case ('PAPER'):
                    console.log("Its a tie");

                    break;      
                }
            }
    }
