let hour =0;
let second =0;
let minute =0;

let timer=false;
function startTime(){
    timer =true;
    stopwatch();
}

function stopTime(){
    timer=false;
}


function resetTime(){
    timer =false;
    document.getElementById('hr').innerHTML='00';
    document.getElementById('min').innerHTML='00';
    document.getElementById('sec').innerHTML='00';
}

function stopwatch(){
    if(timer==true){
        second= second+1;


        if(second==60){
            minute=minute+1;
            second=0;
        }
        if(minute==60){
            hour =hour+1;
            minute=0;
            second=0;
        }

        let second1=second;
        let minute1 = minute;
        let hour1=hour;

        if(second<10){
            second1 = "0" + second;
        }

        
        if(minute<10){
            minute1 = "0" + minute;
        }

        
        if(hour<10){
            hour1 = "0" + hour;
        }
        
        document.getElementById('hr').innerHTML=hour1;
        document.getElementById('min').innerHTML=minute1;
        document.getElementById('sec').innerHTML=second1;
       

        setTimeout("stopwatch()",1000);
    }
}