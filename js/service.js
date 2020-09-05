        var tag_rides = document.getElementById("tag_rides");
        var mp_rides = document.getElementsByClassName("mp_rides");
        var mp_shooting_spot = document.getElementsByClassName("mp_shooting_spot");

        tag_rides.addEventListener("click", function(){
            for(let i = 0; i < mp_rides.length; i++){
                mp_rides[i].classList.add('_on');
            }
            for(let j = 0; j < mp_shooting_spot.length; j++){
                mp_shooting_spot[j].classList.remove('_on');
            }
        });

        tag_shooting_spot.addEventListener("click", function(){
            for(let j = 0; j < mp_shooting_spot.length; j++){
                mp_shooting_spot[j].classList.add('_on');
            }
            for(let i = 0; i < mp_rides.length; i++){
                mp_rides[i].classList.remove('_on');
            }
        });