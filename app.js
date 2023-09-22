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

app.post('/', (req,res) => {
    const { info } = req.body;
    console.log(info);
    let user = info;

    function compChoice(){
        let choices = ['rock','paper','scissors'];
        const result = choices[Math.floor(Math.random())*3];
        return result;
    }
    
    let gameOver;
    let tie = "Look, we tied!";
    let win = "Aw shucks, you win!";
    let loss = "Ha, I win this one!";

    if (user == compChoice()){
        gameOver = tie;
    }
    else if(user == "rock" && compChoice() == "paper"){
        gameOver = win;
    }
    else if(user == "paper" && compChoice() == "rock"){
        gameOver = win;
    }
    else if(user == "scissors" && compChoice() == "paper"){
        gameOver = win;
    }
    else{
        gameOver = loss;
    }
    console.log(gameOver);
})
