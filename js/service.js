        var tag_all_reveal = document.getElementById("tag_all_reveal");
        var tag_rides = document.getElementById("tag_rides");
        var tag_restaurant_and_hotel = document.getElementById("tag_restaurant_and_hotel");
        var tag_shooting_spot = document.getElementById("tag_shooting_spot");
        var tag_shopping = document.getElementById("tag_shopping");
        var tag_public = document.getElementById("tag_public");
        var tag_all_remove = document.getElementById("tag_all_remove");

        var all_mp_rides = document.querySelectorAll("a.mp_rides");
        var all_mp_restaurant = document.querySelectorAll("a.mp_restaurant");
        var all_mp_hotel = document.querySelectorAll("a.mp_hotel");
        var all_mp_shooting_spot = document.querySelectorAll("a.mp_shooting_spot");
        var all_mp_shopping = document.querySelectorAll("a.mp_shopping");
        var all_mp_public = document.querySelectorAll("a.mp_public");
        var choose_all = document.querySelectorAll("div.map_container a");

        tag_all_reveal.addEventListener("click", function(){
            choose_all.forEach(function(choose_all, i){
                choose_all.classList.add('_on');
            });
        });

        tag_rides.addEventListener("click", function(){
            choose_all.forEach(function(choose_all, i){
                choose_all.classList.remove('_on');
            });
            all_mp_rides.forEach(function(all_mp_rides, i){
                all_mp_rides.classList.add('_on');
            });
        });

        tag_restaurant_and_hotel.addEventListener("click", function(){
            choose_all.forEach(function(choose_all, i){
                choose_all.classList.remove('_on');
            });
            all_mp_restaurant.forEach(function(all_mp_restaurant, i){
                all_mp_restaurant.classList.add('_on');
            });
            all_mp_hotel.forEach(function(all_mp_hotel, i){
                all_mp_hotel.classList.add('_on');
            });
        });

        tag_shooting_spot.addEventListener("click", function(){
            choose_all.forEach(function(choose_all, i){
                choose_all.classList.remove('_on');
            });
            all_mp_shooting_spot.forEach(function(all_mp_shooting_spot, i){
                all_mp_shooting_spot.classList.add('_on');
            });
        });

        tag_shopping.addEventListener("click", function(){
            choose_all.forEach(function(choose_all, i){
                choose_all.classList.remove('_on');
            });
            all_mp_shopping.forEach(function(all_mp_shopping, i){
                all_mp_shopping.classList.add('_on');
            });
        });

        tag_public.addEventListener("click", function(){
            choose_all.forEach(function(choose_all, i){
                choose_all.classList.remove('_on');
            });
            all_mp_public.forEach(function(all_mp_public, i){
                all_mp_public.classList.add('_on');
            });
        });

        tag_all_remove.addEventListener("click", function(){
            choose_all.forEach(function(choose_all, i){
                choose_all.classList.remove('_on');
            });
        });