#pragma strict

 var floatup;
 function Start(){
     floatup = false;
 }
 function Update(){
     if(floatup)
         floatingup();
     else if(!floatup)
         floatingdown();
 }
 function floatingup(){
     transform.position.y += 0.05 * Time.deltaTime;
     yield WaitForSeconds(3);
     floatup = false;
 }
 function floatingdown(){
     transform.position.y -= 0.05 * Time.deltaTime;;
     yield WaitForSeconds(3);
     floatup = true;
 }