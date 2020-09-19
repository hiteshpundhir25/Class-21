function bounceOff(object1,oject2){
    if(object1.x-oject2.x < oject2.width/2 + object1.width/2 &&
      oject2.x-object1.x < oject2.width/2 + object1.width/2){
      
        oject2.velocityX = oject2.velocityX * (-1);
        object1.velocityX = object1.velocityX*(-1);
      }
    if(object1.y-oject2.y < oject2.width/2 + object1.width/2 &&
      oject2.y-object1.y < oject2.width/2 + oject2.width/2 ){
    
        oject2.velocityY = oject2.velocityY*(-1);
        object1.velocityY = object1.velocityY*(-1);
    }
  }
  function isTouching(object1,oject2){

    if (object1.x - oject2.x < oject2.width/2 + object1.width/2
      && oject2.x - object1.x < oject2.width/2 + object1.width/2
      && object1.y - oject2.y < oject2.height/2 + object1.height/2
      && oject2.y - object1.y < oject2.height/2 + object1.height/2) {
  
    return true;
  }
  else {
    return false;
  }
  
  }