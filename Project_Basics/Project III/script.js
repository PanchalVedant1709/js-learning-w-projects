const clock = document.querySelector('#clk')
const currrent_date = document.getElementById('date')


setInterval(() => {
    date = new Date();
    clock.innerHTML = date.toLocaleTimeString();
    currrent_date.innerHTML = date.toLocaleDateString();
}, 1000);

