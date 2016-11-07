function disableTimer(){
    try{
    document.getElementById("timer").style.display = "none";
    }catch(err){}

    try{
	document.getElementById("speed-tracker").style.display = "none"; }
    catch(err){}
}

disableTimer();
