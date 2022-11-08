/*
  WRITE YOUR SOLUTION HERE
*/

function Clock() {
  const clockNode = document.querySelector("#clock");
  return setInterval(() => {
    // get date
    let date = new Date();
    let time = date.toLocaleTimeString();
    // render time
    clockNode.textContent = time;
  }, 1000);
}

// call ClickingClock()
Clock();