

var FlashingLight : Light;
FlashingLight.enabled = false;


function Update () {

var RandomNumber = Random.value;

if(RandomNumber<=.9){
FlashingLight.enabled = true;

}
else FlashingLight.enabled= false;

}

