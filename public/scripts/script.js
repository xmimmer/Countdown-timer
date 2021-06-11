const days = document.getElementById("days")
const hours = document.getElementById("hours")
const minutes = document.getElementById("minutes")
const seconds = document.getElementById("seconds")

const newYears = "1 Jan 2022"


function countdown() {

    const newYearsDate = new Date(newYears)
    const currentDate = new Date()

    const totalSeconds = (newYearsDate - currentDate) / 1000;

    const _days = Math.floor(totalSeconds / 3600 / 24);
    const _hours = Math.floor(totalSeconds / 3600) % 24;
    const _minutes = Math.floor(totalSeconds / 60) % 60;
    const _seconds = Math.floor(totalSeconds) % 60;

    days.innerHTML = _days
    hours.innerHTML = _hours
    minutes.innerHTML = _minutes
    seconds.innerHTML = _seconds
}

countdown(); 

setInterval(countdown, 1000);