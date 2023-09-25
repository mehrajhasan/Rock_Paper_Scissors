const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const PORT = 4001;

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());

app.listen(PORT, () =>
    console.log(`Listening on http://localhost:${PORT}`)
);

let userScore = 0;
let serverScore = 0;

app.post('/', (req,res) => {
    const { info } = req.body;
    let user = info;

    function compChoice(){
        let choices = ['rock','paper','scissors'];
        let result = choices[Math.floor(Math.random()*3)];
        return result;
    }    

    let gameOver;
    let compCh = compChoice();
    let tie = "Look, we tied!";
    let win = "Aw shucks, you win!";
    let loss = "Ha, I win this one!";

    if (user == compCh){
        gameOver = tie;
        userScore += 0;
        serverScore += 0;
    }
    else if(user == "rock" && compCh == "paper"){
        gameOver = win;
        userScore += 1;
    }
    else if(user == "paper" && compCh == "rock"){
        gameOver = win;
        userScore += 1;
    }
    else if(user == "scissors" && compCh == "paper"){
        gameOver = win;
        userScore += 1;
    }
    else{
        gameOver = loss;
        serverScore += 1;
    }

    res.json({msg: gameOver, computerChoice: compCh, user: userScore, server: serverScore});
})
