let hr = document.querySelector("#hr"); // Refer to the h1 element inside hrbox
let min = document.querySelector("#min"); // Refer to the h1 element inside minbox
let sec = document.querySelector("#sec");// Refer to the h3 element inside secbox
let colon = document.querySelector("#colon"); 

function timeFormat(value) {
    return value < 10 ? "0" + value : value;
}



function updateTime() {
    let currentTime = new Date();
    let hour = currentTime.getHours();
    let minute = currentTime.getMinutes();
    let second = currentTime.getSeconds();

    // Update the DOM elements with formatted time
    sec.innerText = timeFormat(second);
    min.innerText = timeFormat(minute);
    hr.innerText = timeFormat(hour);

    colon.style.visibility = colon.style.visibility === 'hidden' ? 'visible' : 'hidden';

}

// Call the updateTime function every second
setInterval(updateTime, 1000);

// Initial call to display time immediately
updateTime();
