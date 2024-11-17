
function setDate() {
  //create variable for todays date 
  const now = new Date();
  // get seconds 
  const seconds = now.getSeconds();
  // adjust for degrees, /60 per minute *360 for a circle and adjust for 90 deg clock hand adjustment start
  const secondsDegrees = (seconds / 60) * 360 + 90;
    //select hand and adjust by cal deg

  const secHand = document.querySelector(".second-hand");
  secHand.style.transform = `rotate(${secondsDegrees}deg)`;

  // get minutes 
  const minutes = now.getMinutes();
    // adjust for degrees, /60 per hour *360 for a circle and adjust for 90 deg clock hand adjustment start

  const minutesDegrees = (minutes / 60) * 360 + 90;
  //select hand and adjust by cal deg
  const minHand = document.querySelector(".min-hand");
  minHand.style.transform = `rotate(${minutesDegrees}deg)`;

  //get hours 
  const hours = now.getHours();
    // adjust for degrees, /12 per day *360 for a circle and adjust for 90 deg clock hand adjustment start

  const hoursDegrees = (hours / 12) * 360 + 90;
    //select hand and adjust by cal deg

  const hourHand = document.querySelector(".hour-hand");
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
}

setInterval(setDate, 1000);