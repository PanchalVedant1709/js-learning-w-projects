// let randomNum = parseInt(Math.random()*100 + 1);
// console.log(randomNum)

let randomNum;
generateRandomNum();


const ipNum = document.querySelector('#input_nb') //HTML input
const btn = document.querySelector('#sbm_btn')  //Submit Button
const prev = document.querySelector('#prev-gs')  //previous guess
const count = document.querySelector('#counter')  //guess remaining
const indicate = document.querySelector('#hiOrlow')  //high or low indicator
const startOver = document.querySelector('.result_area') 


const p = document.createElement('p')

let prevGuess = []
let numGuess = 1
let playGame = true

//let user begin the game after checking availibaity
if(playGame){
    btn.addEventListener('click', function(e) {
        e.preventDefault(); 
        const strguess = ipNum.value;

        var regex = /^[-+]?[0-9]+\.[0-9]+$/
        var isValidated = (regex.test(strguess))

        if(isValidated)
    {
        alert('Why are you being so Extra? Give me a GODDAMN whole Integer NUMBER!')
    }

        if(strguess=='')
        {
            alert('Do you want to Enter something? Or should I hire a nanny for that as well???');
        }
        else{
            
            const guess_ip = parseInt(ipNum.value);
            validateGuess(guess_ip);
        }
      
    })
}

function validateGuess(guess_input)
{
    //to valid user input


    
    if(isNaN(guess_input))
    {
        alert('Bro! That\'s NaN. Enter A NUMBER. Didn\'t you read above?')
    }
    else if(guess_input==0)
    {
        alert('zero? For real?')
    }
    else if(guess_input<1)
    {
        alert('Don\'t be Stupid! Number should not be less than 1')
    }
    else if(guess_input>100)
    {
        alert('Bitch! U kidding? Between 1 to 100. You dumb as hell..')
    }
    else{  
        prevGuess.push(guess_input);
        if(numGuess == 10)
        {
            displayGuess(guess_input)
            if(guess_input==randomNum)
            {
                checkGuess(guess_input)
            }
            else{
                displayMsg(`<h2 style="color: red"> Game Over! Number was ${randomNum} </h2>`)
            }
            
            endGame()
            
        }
        else
        {
            displayGuess(guess_input)
            checkGuess(guess_input)
        }

    }
   

}

function checkGuess(guess_input)
{
    //to check answer 
    if(guess_input==randomNum)
    {
        displayMsg(`<h2 style="color: green"> You Guessed correct! Bravo...</h2>`)
        endGame()
    }
    else if(guess_input>randomNum)
    {
        displayMsg(`<h2 style="color: rgb(183, 139, 58)"> Try some lower value...</h2>`)
    }
    else if(guess_input<randomNum)
    {
        displayMsg(`<h2 style="color: orange">Try Aiming for higher value...</h2>`)
    }
}

function displayGuess(guess_input)
{
    //updation of parameter & field 
    ipNum.value = ''
    prev.innerHTML = prevGuess
    // prev.innerHTML = `[${prevGuess}]`
    numGuess++;
    count.innerHTML = `${11 - numGuess}`
    
}


function displayMsg(msg)
{
    //display result & manipulation of Fields DOM
    indicate.innerHTML = `${msg}`
}

function endGame(){
    ipNum.value = '';
    ipNum.setAttribute('disabled', '')
    p.classList.add('button')
    p.innerHTML = `<h3 id="new-game" class="start-new">Start New Game</h3> `
    startOver.appendChild(p)
    playGame = false;
    newGame()
}

function newGame(){
   
    const ngbtn = document.querySelector('#new-game')
    ngbtn.addEventListener('click', function(e){
    // randomNum = parseInt(Math.random()*100 + 1);
    // console.log(randomNum)
    generateRandomNum();
    indicate.innerHTML = ''
    prevGuess = []
    numGuess = 1
    prev.innerHTML = ''
    count.innerHTML = `${11 - numGuess}`
    ipNum.removeAttribute('disabled')
    startOver.removeChild(p)
    playGame = true


    })

}

function generateRandomNum()
{
    randomNum = parseInt(Math.random()*100 + 1);
    console.log(randomNum)
}