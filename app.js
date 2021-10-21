const start_date = document.getElementById('start_date')
const numOfday = document.getElementById('numOfday')
const btn = document.getElementById('btn')


start_date.addEventListener('change',(e)=>{
    let newDate = new Date(e.target.value)

    let now = new Date();
    let diffre = (now.getTime()-newDate.getTime());
    let day = parseInt(diffre /(1000*60*60*24))
   numOfday.innerHTML = day + "  " ;
})






