function CountingMinutesI(str) { 

  strArr = str.split("-");
  
  var timeOneHours = Number(strArr[0].match(/[0-9]+/g)[0])
  var timeOneMinutes = Number(strArr[0].match(/[0-9]+/g)[1]);
  var timeOneAmOrPm = strArr[0].match(/[A-z]+/g).toString()
  var timeTwoHours = Number(strArr[1].match(/[0-9]+/g)[0])
  var timeTwoMinutes = Number(strArr[1].match(/[0-9]+/g)[1])
  var timeTwoAmOrPm = strArr[1].match(/[A-z]+/g).toString()
  var totalOneTime = 0;
  var totalTwoTime = 0;
 
  if(timeOneAmOrPm === "pm" && timeOneHours === 12){
    timeOneHours = 12 * 60;
    totalOneTime = timeOneHours + timeOneMinutes
  } else if(timeOneAmOrPm === "pm"){
    timeOneHours = (timeOneHours * 60) + 720
    totalOneTime = timeOneHours + timeOneMinutes;
  } else if(timeOneAmOrPm === "am" && timeOneHours === 12){
    timeOneHours = 0;
    totalOneTime = timeOneMinutes
  } else {
    timeOneHours = timeOneHours * 60;
    totalOneTime = timeOneHours + timeOneMinutes;
  }
 
    if(timeTwoAmOrPm === "pm" && timeTwoHours === 12){
    timeTwoHours = 12 * 60;
    totalTwoTime = timeTwoHours + timeTwoMinutes
  } else if(timeTwoAmOrPm === "pm"){
    timeTwoHours = (timeTwoHours * 60) + 720
    totalTwoTime = timeTwoHours + timeTwoMinutes;
  } else if(timeTwoAmOrPm === "am" && timeTwoHours === 12){
    timeTwoHours = 0;
    totalTwoTime = timeTwoMinutes
  } else {
    timeTwoHours = timeTwoHours * 60;
    totalTwoTime = timeTwoHours + timeTwoMinutes;
  }
  
  
 if(totalOneTime > totalTwoTime){
  return ((24 * 60) - totalOneTime) + totalTwoTime; 
 }else{
  return totalTwoTime - totalOneTime
 }
 
  
  
}