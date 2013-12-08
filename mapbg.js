$('.cityinput').focusout(function(){
    var city = $(this).val();
    $('.map_contain').css("background-image", "url('http://maps.google.com/maps/api/staticmap?zoom=10&size=400x400&maptype=terrain&sensor=false&center=" + city + "')");
    $('.where').css("color","rgba(0, 0, 0, 1)");
});