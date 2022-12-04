// Automatically increases comment section text input height
function textAreaAdjust(element) {
    element.style.height = "1px";
    element.style.height = (30 + element.scrollHeight) + "px";
}

// Opens and closes comment section
var open_status = true;
function openClose_section() {
    if(open_status) {
        $(document).ready(function(){
            $(".comment-section").css("display", "unset");
            $("body").css("overflow", "hidden");
            open_status = false;
        });
    } if(!open_status) {
        $(document).ready(function(){
            $(".comment-section").css("display", "none");
            $("body").css("overflow", "scroll");
            open_status = true;
        });
    }
}

// Stuff cluttered into one jQuery block
$(document).ready(function(){
    $(".txta").focusin(function(){
        $(".txta").keyup(function(){
            document.getElementById('symbol-count').innerHTML = 255 - this.value.length;
            if($(".txta").val().length <= 3) {
                $("#post-button").css("filter", "grayscale(100%)");
                $("#alert-symbol").css("visibility", "visible");
            } else {
                $("#post-button").css("filter", "grayscale(0)");
                $("#alert-symbol").css("visibility", "hidden");
            }
        });
    });
    $(".txta").focusout(function(){
        $("#alert-symbol").css("visibility", "hidden");
    });
});

// Hides and unhides thread's text window
var hide_status = true;
function hideClose() {
    if(hide_status) {
        $(document).ready(function(){
            $("#hide-text").css("transform", "rotate(-180deg)");
            $(".comments-row").css("height", "620px");
            $("#hide-this").slideToggle();
            hide_status = false;
        });
    } if(!hide_status) {
        $(document).ready(function(){
            $("#hide-text").css("transform", "rotate(0deg)");
            $(".comments-row").css("height", "520px");
            $("#hide-this").slideToggle();
            hide_status = true;
        });
    }
}