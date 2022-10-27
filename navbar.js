
// Le Important!!!!! DO NOT DELET DIS (EVER)

var script = document.createElement('script');
script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js';
document.getElementsByTagName('head')[0].appendChild(script);

function textFill() {
    var times = 5;
    let text = "<span>L</span>orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <br> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? <br> <br> <hr>";
    document.getElementById("fill-this-with-text-pls").innerHTML = text.repeat(20);
} window.onload = textFill;

function lightUp() {
    $(document).ready(function(){
        $("#search-icon").css("color", "#FF7D00");
    });
}
function turnOff() {
    $(document).ready(function(){
        $("#search-icon").css("color", "#15616D");
    });
}   
$(document).ready(function(){
    // $(window).resize(function() {
    //     if($(window).width() < 1280) {
    //         $(".navbar").css("display", "none");
    //     }
    //     if($(window).width() > 1280) {
    //         $(".navbar").css("display", "inline-block");
    //     }
    //     // if ($(window).width() > 1200 && $(window).width() < 1280) {
    //     //     location.reload();
    //     // }
    // });
    $("#checkbox1").click(function(){
        $(".navbar").slideToggle("slow");
    });
    $("#profile-button").click(function(){
        $(".dropdown-profile").slideToggle("fast");
    });
});