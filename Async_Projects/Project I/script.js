let eventHappend = false;

var timeout_fun = setTimeout(function(){
    document.querySelector('h1').innerHTML = 'This is changed Text'
    document.querySelector('h1').style.color = "green";
    
},10000)



var inter = setInterval(function(){
    
    let cnt = parseInt(document.getElementById('count').innerText)
   

    if(cnt=='0')
    {
        eventHappend = true
       clearInterval(inter)
    }
    else{
        cnt = cnt -1;
        document.getElementById('count').innerHTML = `${cnt}`;
    }
    
},1000)


document.querySelector('#btn').addEventListener('click',function(){
    clearTimeout(timeout_fun);
    clearInterval(inter);
    
    
    if(eventHappend==true)
    {
        document.querySelector('#text-ind').innerHTML = "Event already happened. Can't cancel it now."
    }
    else{
        document.querySelector('#text-ind').innerHTML = "Text changing event is stopped"
        console.log('Stopped')
    }
    
})

