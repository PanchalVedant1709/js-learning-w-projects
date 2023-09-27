const form = document.querySelector('form')


form.addEventListener('submit', (e) => {
    e.preventDefault()
    
    
    // const height = parseInt(document.querySelector('#hgt_fld').value)
    const height = parseInt(document.querySelector('#hgt_fld').value) 
    // const weight = document.querySelector('#hgt_fld').value
    const weight = parseInt(document.querySelector('#wgt_fld').value)
    const result = document.getElementById('result')
    const summary = document.getElementById('summary')



    if (height === '' || height <=0 || isNaN(height)) {
        result.innerHTML = "*Enter a valid Height";
        result.style.color = 'red'
    }
    else if (weight === '' || weight <=0 || isNaN(weight)) {
        result.innerHTML = "*Enter a valid Weight";
        result.style.color = 'red'
    }
    else{
        const bmi = parseFloat((weight / ((height*height)/10000)).toFixed(2))
        result.style.color = 'white'
        result.innerHTML = `Your BMI : ${bmi}`;

        if(bmi<18.6)
        {
            summary.style.color = 'orange'
            summary.innerHTML = "You are Underweight";
            console.log("1")
        }
        else if(bmi>=18.6 && bmi<=24.9)
        {
            summary.style.color = 'green'
            summary.innerHTML = "Your BMI is in Normal Range! <h2> Bravo </h2>";
            console.log("2")
        }
        else if(bmi>24.9)
        {
            summary.style.color = 'maroon'
            summary.innerHTML = "You are Overweight";
            console.log("3")
        }

          
    }
    

})