const dailyBtn = document.querySelector('#daily-btn');
const weeklyBtn = document.querySelector('#weekly-btn');
const mothlyBtn = document.querySelector('#monthly-btn');

const hours = document.querySelectorAll('.currentTime');
const lastTime = document.querySelectorAll('.previousTime');
const container = document.querySelectorAll('.container')

function dailyData(){

    fetch('https://raw.githubusercontent.com/christopherjael/time-tracking-dashboard--solution/master/data.json')
        .then(response => response.json())
        .then(data => {
            hours.forEach((e,i) => {

                container[i].classList.add('pre-animation');

                hours[i].innerHTML = data[i].timeframes.daily.current + 'hrs';
                lastTime[i].innerHTML = 'Last Daily - ' + data[i].timeframes.daily.previous + 'hrs';

                setTimeout(function(){
                    container[i].classList.remove('pre-animation')
                },1000)
            })
        })
}

function weeklyData(){
    fetch('https://raw.githubusercontent.com/christopherjael/time-tracking-dashboard--solution/master/data.json')
        .then(response => response.json())
        .then(data => {
            hours.forEach((e,i) => {

                container[i].classList.add('pre-animation');

                hours[i].innerHTML = data[i].timeframes.weekly.current + 'hrs'
                lastTime[i].innerHTML = 'Last Weekly - ' + data[i].timeframes.weekly.previous + 'hrs'

                setTimeout(function(){
                    container[i].classList.remove('pre-animation')
                },1000)
            })
        })
}

function mothlyData(){
    fetch('https://raw.githubusercontent.com/christopherjael/time-tracking-dashboard--solution/master/data.json')
        .then(response => response.json())
        .then(data => {
            hours.forEach((e,i) => {

                container[i].classList.add('pre-animation');
                
                hours[i].innerHTML = data[i].timeframes.monthly.current + 'hrs'
                lastTime[i].innerHTML = 'Last Monthly - ' + data[i].timeframes.monthly.previous + 'hrs'

                setTimeout(function(){
                    container[i].classList.remove('pre-animation')
                },1000)
            })
        })
}


dailyBtn.addEventListener('click', () => {
    dailyBtn.classList.add("text-PaleBlue");
    weeklyBtn.classList.remove("text-PaleBlue");
    mothlyBtn.classList.remove("text-PaleBlue");
    dailyData()
})

weeklyBtn.addEventListener('click', () => {
    weeklyBtn.classList.add("text-PaleBlue");
    dailyBtn.classList.remove("text-PaleBlue");
    mothlyBtn.classList.remove("text-PaleBlue");
    weeklyData()
})

mothlyBtn.addEventListener('click', () => {
    mothlyBtn.classList.add("text-PaleBlue");
    weeklyBtn.classList.remove("text-PaleBlue");
    dailyBtn.classList.remove("text-PaleBlue");
    mothlyData()
})