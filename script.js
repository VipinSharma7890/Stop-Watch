let date = {
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0,
  reset: () => {
    date.days = 0;
    date.hours = 0;
    date.minutes = 0;
    date.seconds = 0;
  },

  getDays: () => {
    if (date.hours == 24) date.days++, (date.hours = 0);

    return date.days;
  },

  getHours: () => {
    if (date.minutes == 60) date.hours++, (date.minutes = 0);

    return date.hours % 24;
  },

  getMinutes: () => {
    if (date.seconds == 60) date.minutes++, (date.seconds = 0);

    return date.minutes % 60;
  },

  getSeconds: () => {
    date.seconds++;

    return date.seconds % 60;
  },
};

let hours = document.querySelector("#hours");
let minutes = document.querySelector("#minutes");
let seconds = document.querySelector("#seconds");
let days = document.querySelector("#days");
let id;

let id1;

let colorChange=()=>{let rand=Math.floor(Math.random()*100+1)%15
  let body=document.querySelector("body");
 
  console.log(body.style.backgroundColor='rgb('+colors[rand][0]+','+colors[rand][1]+','+colors[rand][2]+')')
  }
  
 
let func=()=>{
    id = setInterval(() => {
      days.innerHTML=date.getDays();
      seconds.innerHTML = date.getSeconds();
        hours.innerHTML = date.getHours();
        minutes.innerHTML = date.getMinutes();
        
       
      }, 1000);
};


let start = document.querySelector(".start");
let stop = document.querySelector(".stop");
let reset = document.querySelector(".reset");
let running=false;

start.addEventListener("click", () => {
  if(stop.innerHTML=="resume")
  stop.innerHTML="stop"
 date.reset();
 running=true;
clearInterval(id);
func();
clearInterval(id1)
id1=setInterval(colorChange,10000) 


});


stop.addEventListener("click", () => {
  if (stop.innerHTML == "stop") {
  stop.innerHTML = "resume";
  clearInterval(id);
  }
  else {
    stop.innerHTML = "stop";
    if(running)
    func()
  }
  
});

reset.addEventListener("click",()=>{
    if(stop.innerHTML=="resume")
    stop.innerHTML="stop"
    clearInterval(id);
    clearInterval(id1);
date.reset();
running=false;
days.innerHTML=date.getDays();
hours.innerHTML = date.getHours();
minutes.innerHTML = date.getMinutes();
seconds.innerHTML = 0;
})









var colors=[[138,43,226],[107,43,226],[43,101,226],[20,185,70],[15,53,179],[138,43,226],[107,43,226],[43,101,226],[20,185,70],[15,53,179],[138,43,226],[107,43,226],[43,101,226],[20,185,70],[15,53,179]];

