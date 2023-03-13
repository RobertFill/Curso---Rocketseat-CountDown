        //*get elements HTML//
const daysE = document.getElementById('time-days');
const hoursE = document.getElementById('time-hr'); 
const minsE = document.getElementById('time-min');
const secondE = document.getElementById('time-sec');

const siteDate = "01 01 2024"; //date custom alterad//

function countDown() {

    const newSite = new Date(siteDate);
    const currentDate = new Date(); //actual date//

    const totalSeconds = (newSite - currentDate) / 1000; //milissigundos//
    const days = Math.floor(totalSeconds / 3600 / 24); //3600 transform in hours//
    const hours = Math.floor(totalSeconds / 3600) % 24; //24 hours//
    const mins = Math.floor(totalSeconds / 60) % 60; //60 minutes and 60 seconds//
    const seconds = Math.floor(totalSeconds) % 60; //% return rest//



    daysE.innerHTML = days;
    hoursE.innerHTML = formatTime(hours);
    minsE.innerHTML = formatTime(mins);
    secondE.innerHTML = formatTime(seconds);


}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

countDown();

setInterval(countDown, 1000);

