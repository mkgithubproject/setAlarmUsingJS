let listOfAlarms=[];
let time;
function currentTime() {// function which shows current time
    let date = new Date(); 
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();
    let session = "AM";
  
    if(hh == 0){
        hh = 12;
    }
    if(hh > 12){
        hh = hh - 12;
        session = "PM";
     }
  
     hh = (hh < 10) ? "0" + hh : hh;
     mm = (mm < 10) ? "0" + mm : mm;
     ss = (ss < 10) ? "0" + ss : ss;
      
      time = hh + ":" + mm + ":" + ss + " " + session;
    document.getElementById("clock").innerText = time; 
    setTimeout(function(){ currentTime() }, 1000);
  }
  function setAlarm(event){// function set alarm time and add into array
    event.preventDefault();
    const { hour, min, sec, zone } = document.forms[0];
    let hh=hour.value;
    let mm=min.value;
    let ss=sec.value;
    let session=zone.value;
    let time=hh + ":" + mm + ":" + ss + " " + session;
    listOfAlarms.push(time);
    document.forms[0].reset();
    showAlarms();

  }
 // Function to check if alarm needs to be triggered
function ringAlarm(){// ring alarm if set alarm equal to current time
    for(let i=0;i<listOfAlarms.length;i++){
        if (listOfAlarms[i] === time) {
            window.alert("hello");
        }
    }
    setTimeout(function(){ringAlarm(),1000});
    
}
function showAlarms(){// show list of alrms which has been set
    let html="";
    for(let i=0;i<listOfAlarms.length;i++){
         html=html+`<li>
        <h3 class=showAlaram >${listOfAlarms[i]}</h3>
        <button class=showAlaramDelete id=${i}>Delete</button>
       </li>`;
    }
    let divSelect=document.getElementById("showAlarms").innerHTML=html;
    for(let i=0;i<listOfAlarms.length;i++){
        document.getElementById(i).addEventListener("click",deleteAlarm);
   }
}
function deleteAlarm(e){// delete alarm
    let id=e.target.id;
    listOfAlarms.pop(id);
    showAlarms();
}
document.forms[0].addEventListener("submit",setAlarm);
currentTime();// call function cfor showing current time
ringAlarm();// ring alarm