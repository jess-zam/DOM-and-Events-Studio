window.addEventListener("load", function(event){
    let takeoff = document.getElementById("takeoff");
    let status = document.getElementById("flightStatus");
    let background = document.getElementById("shuttleBackground");
    let height = document.getElementById("spaceShuttleHeight");
    let landing = document.getElementById("landing");
    let abort = document.getElementById("missionAbort");
    let rocket = document.getElementById("rocket");
    rocket.style.position = "absolute";
    rocket.style.left = "0px";
    rocket.style.bottom = "0px";

    let left = document.getElementById("left");
    left.addEventListener("click", function(){
        rocket.style.left = parseInt(rocket.style.left) - 10 + "px";
    });

    let right = document.getElementById("right");
    right.addEventListener("click", function(){
        rocket.style.left = parseInt(rocket.style.left) + 10 + "px";
    });

    let up = document.getElementById("up");
    up.addEventListener("click", function(){
        rocket.style.bottom = parseInt(rocket.style.bottom) + 10 + "px";
        height.innerHTML = parseInt(height.innerHTML) + 10000;
    });

    let bottom = document.getElementById("down");
    bottom.addEventListener("click", function(){
        rocket.style.bottom = parseInt(rocket.style.bottom) - 10 + "px";
        height.innerHTML = parseInt(height.innerHTML) - 10000;
    });

    takeoff.addEventListener("click", function(event){
        let response = window.confirm("Confirm that the shuttle is ready for takeoff");
        if(response){
            status.innerHTML = "Shuttle in flight";
            background.style.backgroundColor = "blue";
            height.innerHTML = 10000;
        }
    });

    landing.addEventListener("click", function(event){
        response = window.confirm("The shuttle is landing. Landing gear engaged.");
        if(response){
            status.innerHTML = "The shuttle has landed.";
            background.style.backgroundColor = "green";
            height.innerHTML = 0;
            rocket.style.left = "0px";
            rocket.style.bottom = "0px"
        }
    });

    abort.addEventListener("click", function(event){
        response = window.confirm("Confirm that you want to abort the mission.");
        if(response){
            status.innerHTML = "Mission aborted";
            background.style.backgroundColor = "green";
            height.innerHTML = "0";
        }
    });

});
