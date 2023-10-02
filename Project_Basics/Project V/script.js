const start = document.querySelector("#start");
const stop = document.querySelector("#stop");
const code_area = document.querySelector('#code');
let intervalID
let clr

//function that generates random color
const randomColor = function(){
    const hex = "0123456789ABCDEF"
    clr = '#'
    for (let index = 0; index < 6; index++) {
        clr += hex[Math.floor(Math.random()*16)];
       
    }
    console.log(clr)
    code_area.setAttribute("class","code-area");
    code_area.innerHTML = clr
    
    return clr;
    
}

//function that implements BG color change
const changeBG = function ()
{
    document.querySelector('body').style.backgroundColor = randomColor();
}

//start interval funcion
const changeClr = function()
{
    if(!intervalID)
    {
        intervalID = setInterval(changeBG, 1000);
        console.log(clr)
        
        }
}

//stop interval function
const stopClr = function()
{
    clearInterval(intervalID)
    intervalID = null
}

//assigning events on button click
start.addEventListener('click', changeClr)
stop.addEventListener('click', stopClr)



