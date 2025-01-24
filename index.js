

function updateClock(){
    
    const now = new Date();
    const month = (now.getMonth() + 1).toString().padStart(2, 0);
    const year = now.getFullYear();
    const day = now.getDate().toString().padStart(2, 0);
    let hours = now.getHours(); //pads the start with 0 so it is always 2 digits long
    const meridiem = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
    hours = hours.toString().padStart(2, 0);
    const minutes = now.getMinutes().toString().padStart(2, 0);
    const seconds = now.getSeconds().toString().padStart(2, 0);
    const timeString = `${hours}:${minutes}:${seconds} ${meridiem}`;
    const dateString = `${month}/${day}/${year}`;
    document.getElementById("date").textContent = dateString;
    document.getElementById("clock").textContent = timeString
}


updateClock();

setInterval(updateClock, 1000); // calls function repeatedly