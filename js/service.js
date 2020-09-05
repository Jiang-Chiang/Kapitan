        var tag_all_reveal = document.getElementById("tag_all_reveal");
        var tag_rides = document.getElementById("tag_rides");
        var tag_restaurant_and_hotel = document.getElementById("tag_restaurant_and_hotel");
        var tag_shooting_spot = document.getElementById("tag_shooting_spot");
        var tag_shopping = document.getElementById("tag_shopping");
        var tag_public = document.getElementById("tag_public");
        var tag_all_remove = document.getElementById("tag_all_remove");

        var mp_rides = document.getElementsByClassName("mp_rides");
        var mp_restaurant = document.getElementsByClassName("mp_restaurant");
        var mp_hotel = document.getElementsByClassName("mp_hotel");
        var mp_shooting_spot = document.getElementsByClassName("mp_shooting_spot");
        var mp_shopping = document.getElementsByClassName("mp_shopping");
        var mp_public = document.getElementsByClassName("mp_public");

        tag_all_reveal.addEventListener("click", function(){
            for(let a = 0; a < mp_rides.length; a++){
                mp_rides[a].classList.add('_on');
            }
            for(let b = 0; b < mp_restaurant.length; b++){
                mp_restaurant[b].classList.add('_on');
            }
            for(let c = 0; c < mp_hotel.length; c++){
                mp_hotel[c].classList.add('_on');
            }
            for(let d = 0; d < mp_shooting_spot.length; d++){
                mp_shooting_spot[d].classList.add('_on');
            }
            for(let e = 0; e < mp_shopping.length; e++){
                mp_shopping[e].classList.add('_on');
            }
            for(let f = 0; f < mp_public.length; f++){
                mp_public[f].classList.add('_on');
            }
        });

        tag_rides.addEventListener("click", function(){
            for(let a = 0; a < mp_rides.length; a++){
                mp_rides[a].classList.add('_on');
            }
            for(let b = 0; b < mp_restaurant.length; b++){
                mp_restaurant[b].classList.remove('_on');
            }
            for(let c = 0; c < mp_hotel.length; c++){
                mp_hotel[c].classList.remove('_on');
            }
            for(let d = 0; d < mp_shooting_spot.length; d++){
                mp_shooting_spot[d].classList.remove('_on');
            }
            for(let e = 0; e < mp_shopping.length; e++){
                mp_shopping[e].classList.remove('_on');
            }
            for(let f = 0; f < mp_public.length; f++){
                mp_public[f].classList.remove('_on');
            }
        });

        tag_restaurant_and_hotel.addEventListener("click", function(){
            for(let b = 0; b < mp_restaurant.length; b++){
                mp_restaurant[b].classList.add('_on');
            }
            for(let c = 0; c < mp_hotel.length; c++){
                mp_hotel[c].classList.add('_on');
            }
            for(let a = 0; a < mp_rides.length; a++){
                mp_rides[a].classList.remove('_on');
            }
            for(let d = 0; d < mp_shooting_spot.length; d++){
                mp_shooting_spot[d].classList.remove('_on');
            }
            for(let e = 0; e < mp_shopping.length; e++){
                mp_shopping[e].classList.remove('_on');
            }
            for(let f = 0; f < mp_public.length; f++){
                mp_public[f].classList.remove('_on');
            }
        });

        tag_shooting_spot.addEventListener("click", function(){
            for(let d = 0; d < mp_shooting_spot.length; d++){
                mp_shooting_spot[d].classList.add('_on');
            }
            for(let a = 0; a < mp_rides.length; a++){
                mp_rides[a].classList.remove('_on');
            }
            for(let b = 0; b < mp_restaurant.length; b++){
                mp_restaurant[b].classList.remove('_on');
            }
            for(let c = 0; c < mp_hotel.length; c++){
                mp_hotel[c].classList.remove('_on');
            }
            for(let e = 0; e < mp_shopping.length; e++){
                mp_shopping[e].classList.remove('_on');
            }
            for(let f = 0; f < mp_public.length; f++){
                mp_public[f].classList.remove('_on');
            }
        });

        tag_shopping.addEventListener("click", function(){
            for(let e = 0; e < mp_shopping.length; e++){
                mp_shopping[e].classList.add('_on');
            }
            for(let a = 0; a < mp_rides.length; a++){
                mp_rides[a].classList.remove('_on');
            }
            for(let b = 0; b < mp_restaurant.length; b++){
                mp_restaurant[b].classList.remove('_on');
            }
            for(let c = 0; c < mp_hotel.length; c++){
                mp_hotel[c].classList.remove('_on');
            }
            for(let d = 0; d < mp_shooting_spot.length; d++){
                mp_shooting_spot[d].classList.remove('_on');
            }
            for(let f = 0; f < mp_public.length; f++){
                mp_public[f].classList.remove('_on');
            }
        });

        tag_public.addEventListener("click", function(){
            for(let f = 0; f < mp_public.length; f++){
                mp_public[f].classList.add('_on');
            }
            for(let a = 0; a < mp_rides.length; a++){
                mp_rides[a].classList.remove('_on');
            }
            for(let b = 0; b < mp_restaurant.length; b++){
                mp_restaurant[b].classList.remove('_on');
            }
            for(let c = 0; c < mp_hotel.length; c++){
                mp_hotel[c].classList.remove('_on');
            }
            for(let d = 0; d < mp_shooting_spot.length; d++){
                mp_shooting_spot[d].classList.remove('_on');
            }
            for(let e = 0; e < mp_shopping.length; e++){
                mp_shopping[e].classList.remove('_on');
            }
        });

        tag_all_remove.addEventListener("click", function(){
            for(let a = 0; a < mp_rides.length; a++){
                mp_rides[a].classList.remove('_on');
            }
            for(let b = 0; b < mp_restaurant.length; b++){
                mp_restaurant[b].classList.remove('_on');
            }
            for(let c = 0; c < mp_hotel.length; c++){
                mp_hotel[c].classList.remove('_on');
            }
            for(let d = 0; d < mp_shooting_spot.length; d++){
                mp_shooting_spot[d].classList.remove('_on');
            }
            for(let e = 0; e < mp_shopping.length; e++){
                mp_shopping[e].classList.remove('_on');
            }
            for(let f = 0; f < mp_public.length; f++){
                mp_public[f].classList.remove('_on');
            }
        });