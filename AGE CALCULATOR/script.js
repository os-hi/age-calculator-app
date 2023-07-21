const errorDay = document.getElementById('day-error')
const errorMonth = document.getElementById('month-error')
const errorYear = document.getElementById('year-error')
const emptyDay = document.getElementById('day-empty')
const emptyMonth = document.getElementById('month-empty')
const emptyYear = document.getElementById('year-empty')
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
const numDaysInMonth = [31,28,31,30,31,30, 31,31,30,31,30,31]


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
function validation(){

    if(inputDay.value > 31){
        errorDay.classList.toggle("show")
        event.preventDefault()
    }
    if (inputMonth.value > monthsInYear){
        errorMonth.classList.toggle("show")
        event.preventDefault()
    }
    if (inputYear.value > 2023){
        errorYear.classList.toggle("show")
        event.preventDefault()
    }
    
}

function calculate(){
    validation()
    if(inputDay.value === ""){
        emptyDay.classList.toggle("show")
        event.preventDefault()
    }
    if(inputMonth.value === ""){
        emptyMonth.classList.toggle("show")
        event.preventDefault()
    }
    if(inputYear.value === "" ){
        emptyYear.classList.toggle("show")
        event.preventDefault()
    }
    
    else if(inputDay.value <= numDaysInMonth[inputMonth.value-1]){
        calculateInYear();
        calculateInMonth();
        event.preventDefault()
    }
    else if(inputDay.value > numDaysInMonth[inputMonth.value-1]){
        errorDay.classList.toggle("show")
        event.preventDefault()
    }
    // else{
    //     errorDay.classList.toggle("show")
    //     event.preventDefault()
    // }

}
