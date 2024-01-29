let name= prompt("İsminiz nedir? ");
name=`${name[0].toUpperCase()}${name.slice(1).toLowerCase()}`;
let addName= document.querySelector('#myName')
addName.innerHTML=name;

function showTime(){
    const today = new Date();
    let hour = today.getHours(); 
    let minute = today.getMinutes(); 
    let second = today.getSeconds();
    let dayName=["Pazar","Pazartesi","Salı","Çarşamba", "Perşembe","Cuma","Cumartesi"];
   
    
    hour = double(hour);
    minute = double(minute);
    second = double(second);
    dayName= dayName[today.getDay()]


   
    let time =` ${hour} : ${minute} : ${second} ${dayName} `;
    document.querySelector("#myClock").innerText = time;
    
    setInterval(showTime, 1000);  

    notification(hour);
}

function double(number) {
    if (number<10) {number = "0" + number};
    return number;
}

function notification(hour){
    let sentence;
    if (!sessionStorage.getItem('isNotificationShown')) {
        if(hour>4 && hour<12){
            sentence="Günaydın";
        }
        else if( hour>=12 && hour<14){
            sentence="Tünaydın"
        }
        else if(hour>=14 && hour<17){
            sentence="İyi Günler"
        }
        else if(hour>=17 && hour<22){   
            sentence="İyi Akşamlar"
        }
        else{
            sentence="İyi Geceler"
        }

        alert(sentence + " " + addName.innerText + "!");
        
        sessionStorage.setItem('isNotificationShown', 'true');
    
    }
}

window.onload = function () {
    sessionStorage.removeItem('isNotificationShown');
};

showTime();
