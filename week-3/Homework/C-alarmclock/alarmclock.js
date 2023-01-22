
secToMin =(time)=>{ 
  let min = Math.trunc(time/60);
  let sec = time-min*60;

  if(min<10) min = "0"+min;
  if(sec<10) sec = "0"+sec;

  return(`${min}:${sec}`);
}

function setAlarm() {
 let time = parseInt(document.querySelector('#alarmSet').value);
 
 console.log(secToMin(time));

 let timer = setInterval(()=>{console.log(`${time--}`); 
    if(time<0){
      clearInterval(timer);
      playAlarm();
    }
  }, 1000);

   
}

const audio = new Audio('alarmsound.mp3');

function setup() {
  document.getElementById("set").addEventListener("click", () => {
    setAlarm();
  });

  document.getElementById("stop").addEventListener("click", () => {
    pauseAlarm();
  });
}

function playAlarm() {
  audio.play();
}

function pauseAlarm() {
  audio.pause();
}

window.onload = setup;


