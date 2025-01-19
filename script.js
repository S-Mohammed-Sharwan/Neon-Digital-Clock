const hrs = document.getElementById("hrs");
const min = document.getElementById("min");
const sec = document.getElementById("sec");
const period = document.createElement("span"); // Create a span for AM/PM

// Append the AM/PM span after the seconds
sec.parentNode.appendChild(period);
period.style.marginLeft = "10px"; // Add some spacing for better appearance
period.style.color = "#fff"; // Style to match the clock

function updateTime() {
    const currentTime = new Date();

    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    let seconds = currentTime.getSeconds();

    // Determine AM or PM
    const amPm = hours >= 12 ? "PM" : "AM";

    // Convert hours to 12-hour format
    hours = hours % 12 || 12; // If hours is 0, change it to 12 (midnight/noon)

    // Format time to always show two digits
    hrs.textContent = hours < 10 ? "0" + hours : hours;
    min.textContent = minutes < 10 ? "0" + minutes : minutes;
    sec.textContent = seconds < 10 ? "0" + seconds : seconds;

    // Update the AM/PM indicator
    period.textContent = amPm;
}

// Update the clock every second
setInterval(updateTime, 1000);

// Initialize the clock on page load
updateTime();