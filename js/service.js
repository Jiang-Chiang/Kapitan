$(document).ready(function(){
    
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
    var all_mp_items = document.querySelectorAll("div.map_container a");
    var all_tags = document.querySelectorAll("div.tags_bar button");

    tag_all_reveal.addEventListener("click", function(){
        all_mp_items.forEach(function(all_mp_items, i){
            all_mp_items.classList.add('_on');
        });
        all_tags.forEach(function(all_tags, i){
            all_tags.classList.remove('_choosed');
        });
        tag_all_reveal.classList.add('_choosed');
    });

    tag_rides.addEventListener("click", function(){
        all_mp_items.forEach(function(all_mp_items, i){
            all_mp_items.classList.remove('_on');
        });
        all_mp_rides.forEach(function(all_mp_rides, i){
            all_mp_rides.classList.add('_on');
        });
        all_tags.forEach(function(all_tags, i){
            all_tags.classList.remove('_choosed');
        });
        tag_rides.classList.add('_choosed');
    });

    tag_restaurant_and_hotel.addEventListener("click", function(){
        all_mp_items.forEach(function(all_mp_items, i){
            all_mp_items.classList.remove('_on');
        });
        all_mp_restaurant.forEach(function(all_mp_restaurant, i){
            all_mp_restaurant.classList.add('_on');
        });
        all_mp_hotel.forEach(function(all_mp_hotel, i){
            all_mp_hotel.classList.add('_on');
        });
        all_tags.forEach(function(all_tags, i){
            all_tags.classList.remove('_choosed');
        });
        tag_restaurant_and_hotel.classList.add('_choosed');
    });

    tag_shooting_spot.addEventListener("click", function(){
        all_mp_items.forEach(function(all_mp_items, i){
            all_mp_items.classList.remove('_on');
        });
        all_mp_shooting_spot.forEach(function(all_mp_shooting_spot, i){
            all_mp_shooting_spot.classList.add('_on');
        });
        all_tags.forEach(function(all_tags, i){
            all_tags.classList.remove('_choosed');
        });
        tag_shooting_spot.classList.add('_choosed');
    });

    tag_shopping.addEventListener("click", function(){
        all_mp_items.forEach(function(all_mp_items, i){
            all_mp_items.classList.remove('_on');
        });
        all_mp_shopping.forEach(function(all_mp_shopping, i){
            all_mp_shopping.classList.add('_on');
        });
        all_tags.forEach(function(all_tags, i){
            all_tags.classList.remove('_choosed');
        });
        tag_shopping.classList.add('_choosed');
    });

    tag_public.addEventListener("click", function(){
        all_mp_items.forEach(function(all_mp_items, i){
            all_mp_items.classList.remove('_on');
        });
        all_mp_public.forEach(function(all_mp_public, i){
            all_mp_public.classList.add('_on');
        });
        all_tags.forEach(function(all_tags, i){
            all_tags.classList.remove('_choosed');
        });
        tag_public.classList.add('_choosed');
    });

    tag_all_remove.addEventListener("click", function(){
        all_mp_items.forEach(function(all_mp_items, i){
            all_mp_items.classList.remove('_on');
        });
        all_tags.forEach(function(all_tags, i){
            all_tags.classList.remove('_choosed');
        });
        tag_all_remove.classList.add('_choosed');
    });
    
    $(document).mouseup(function(e){
        let click_target = $("div.mp_details_card");
        if(!click_target.is(e.target) && click_target.has(e.target).length === 0){
            $("div.mp_details_card").removeClass("_show");
        }
      });

    $("a.mp").click(function(){
        $("div.mp_details_card").removeClass("_show");
        $(this).next("div.mp_details_card").addClass("_show");
    });

  });