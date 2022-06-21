let scoreMachine = 0;
let scoreHuman = 0;
let numRounds = 0;






    function computerPlay(){
    
        let output = (Math.random()*2);

        const plays = ['ROCK','SCISSORS','PAPER']
        let compPlay = plays[output.toFixed(0)]
        computerDisplay(compPlay);   
        return compPlay;       
    }
    function computerDisplay(compPlay){
    const awnser = document.getElementById('awnseria');
    const display = document.createElement('h3');
    display.setAttribute('id','computer-awnser');
    display.innerHTML = `The computer plays ${compPlay}`;
    awnser.appendChild(display);

    }



    function round(player1,player2){
        numRounds = numRounds+1;
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
        if(numRounds!=0){
            const dispUpdate = document.querySelector('#computer-awnser');
        dispUpdate.remove(); 
        }
       
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
          
if(button.id === "begin"){
    tablescore();
    buttons.forEach(button =>{
        button.addEventListener('click',()=>{
            game(button.id);

           const humanUpdate =  document.querySelector('#human-score');
           humanUpdate.innerHTML = scoreHuman;
           const machineUpdate = document.querySelector('#machine-score');
           machineUpdate.innerHTML = scoreMachine;




        })
    });
}             
            
           // game(button.id);                                       
        });
    });
  function tablescore(){
    const tablediv = document.getElementById('score');
    let table = document.createElement('table');
    let thead = document.createElement('thead');
    let tbody = document.createElement('tbody');
    table.appendChild(thead);
    table.appendChild(tbody);
    document.getElementById('score').appendChild(table);
    tablediv.append(table);
    let players = document.createElement('tr');
    let player1 = document.createElement('td');
    player1.innerHTML = 'Computer'
    let machine = document.createElement('td');
    machine.innerHTML = 'You';
    players.appendChild(machine);
    players.appendChild(player1);
    thead.appendChild(players);
    
    let scors = document.createElement('tr');
    let human = document.createElement('td');
    human.setAttribute('id','human-score');
    human.innerHTML = scoreHuman;
    let machi = document.createElement('td');
    machi.setAttribute('id','machine-score');
    machi.innerHTML = scoreMachine;

    scors.appendChild(human);
    scors.appendChild(machi);
    tbody.appendChild(scors);}

    