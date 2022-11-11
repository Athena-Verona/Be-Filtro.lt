// Le Important!!!!! DO NOT DELET DIS (EVER)
var script = document.createElement('script');
script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js';
document.getElementsByTagName('head')[0].appendChild(script);

function lightUp() {
    $(document).ready(function(){
        $("#search-icon").css("color", "#FF7D00");
    });
} function turnOff() {
    $(document).ready(function(){
        $("#search-icon").css("color", "#15616D");
    });
}   
$(document).ready(function(){
    $("#checkbox1").click(function(){
        $(".navbar").slideToggle("slow");
    });
    $("#profile-button").click(function(){
        $(".dropdown-profile").slideToggle("fast");
    });
});