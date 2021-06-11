const days = document.getElementById("days")
const hours = document.getElementById("hours")
const minutes = document.getElementById("minutes")
const seconds = document.getElementById("seconds")

const MimmerBirthday = "16 October 2021"

function countdown() {

    const MimmerBirthdayDate = new Date(MimmerBirthday)
    const currentDate = new Date()

    const totalSeconds = (MimmerBirthdayDate - currentDate) / 1000;

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