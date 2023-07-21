const inputDay = document.getElementById('day');
const inputMonth = document.getElementById('month');
const inputYear = document.getElementById('year');
const submitButton = document.getElementById('submit');
const resultYear = document.getElementById('resYear');
const resultMonth = document.getElementById('resMonth');
const resultDay = document.getElementById('resDay')
const currentYear = 2023;
const monthsInYear = 12;
const currentMonth = 7;
const currentDay = 22;

function calculateInYear(){
    let calcYear = currentYear - inputYear.value
    let calcMonth = currentMonth - inputMonth.value
    let calcDay = currentDay - inputDay.value
    let age = (calcYear * 365) + (calcMonth * 31) + calcDay
    let resultInYear = Math.trunc(age / 365)
    resultYear.textContent = resultInYear
}
function calculateInMonth(){
    if(currentMonth==inputMonth.value){
        if(currentDay < inputDay.value){
            let totalDay = (31 - inputDay.value) + currentDay
            let totalMonth= ((monthsInYear - inputMonth.value) + currentMonth) -1
            resultMonth.textContent = totalMonth
            resultDay.textContent = totalDay
        }
        else if (currentDay == inputDay.value){
            resultDay.textContent = 0
            resultMonth.textContent= 0
        }
        else{
            let totalDay = currentDay - inputDay.value
            resultMonth.textContent = currentMonth - 1
            resultDay.textContent = totalDay
        }
    }
    else if (currentMonth > inputMonth.value){
        if (currentDay > inputDay.value){
            let totalMonth = currentMonth - inputMonth.value
            let totalDay = currentDay - inputDay.value
            resultMonth.textContent = totalMonth
            resultDay.textContent = totalDay
        }
        else{
            let totalMonth = (currentMonth - inputMonth.value) - 1
            let totalDay = (31 - inputDay.value) + currentDay
            resultMonth.textContent = totalMonth
            resultDay.textContent = totalDay
        }
    }
    
    else if(inputMonth.value > currentMonth){
        if(inputDay.value > currentDay){
            let totalMonth = [(monthsInYear - inputMonth.value) + currentMonth] - 1
            let totalDay = (31 - inputDay.value) + currentDay
            resultMonth.textContent = totalMonth
            resultDay.textContent = totalDay
        }
        else{
            let totalMonth = (monthsInYear - inputMonth.value) + currentMonth
            let totalDay = currentDay - inputDay.value
            resultMonth.textContent = totalMonth
            resultDay.textContent = totalDay
        }
    }
}

function calculate(){
    calculateInYear();
    calculateInMonth();
}
