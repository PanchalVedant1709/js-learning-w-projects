const body = document.querySelector("body")
const buttons = document.querySelectorAll('.boxWidget')
const global = document.querySelector("*")

buttons.forEach( (btn) => 
{
    btn.addEventListener('click', function (event) {
        if(event.target.id === 'grey')
        {
            body.style.backgroundColor = 'grey'
            body.style.color = 'white'
        }
        else if(event.target.id === 'white')
        {
            body.style.backgroundColor = 'white'
            body.style.color = 'black'
        }
        else if(event.target.id === 'blue')
        {
            body.style.backgroundColor = 'blue'
            body.style.color = 'white'
        }
        else if(event.target.id === 'yellow')
        {
            body.style.backgroundColor = 'yellow'
            body.style.color = 'black'
        }
        
    })
} );