
// Le Important!!!!! DO NOT DELET DIS

var script = document.createElement('script');
script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js';
document.getElementsByTagName('head')[0].appendChild(script);

$(document).ready(function(){
    $("#checkbox1").click(function(){
        $(".navbar").slideToggle("slow");
    });
});