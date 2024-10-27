let secHand = document.querySelector("#sec");
let minHand = document.querySelector("#min");
let hrHand = document.querySelector("#hr");

function updateTime() {
    let currentTime = new Date();
    let second = currentTime.getSeconds();
    let minute = currentTime.getMinutes();
    let hour = currentTime.getHours();

    // Calculate the degrees for each hand
    let secondDeg = (second / 60) * 360;
    let minuteDeg = (minute / 60) * 360 + (second / 60) * 6; // minute hand moves slightly every second
    let hourDeg = (hour % 12 / 12) * 360 + (minute / 60) * 30; // hour hand moves slightly every minute

    // Rotate the clock hands using CSS transform
    secHand.style.transform = `rotate(${secondDeg}deg)`;
    minHand.style.transform = `rotate(${minuteDeg}deg)`;
    hrHand.style.transform = `rotate(${hourDeg}deg)`;
}

// Call the function every second
setInterval(updateTime, 1000);

// Initial call to set the clock right away
updateTime();
