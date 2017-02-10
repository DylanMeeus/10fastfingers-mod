function disableTimer(){
    try{
    document.getElementById("timer").style.display = "none";
    }catch(err){}
    try{
	document.getElementById("speed-tracker").style.display = "none"; }
    catch(err){}

    // remove the gosu chat window.
    var gosu = document.getElementById("gosu-embedded-chat-frame");
    gosu.parentNode.removeChild(gosu);
    
}

disableTimer();
