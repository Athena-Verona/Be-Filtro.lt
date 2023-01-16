// Automatically increases comment section text input height
$(document).ready(function(){
    $(".comment-content textarea").keyup(function(){
        var scrollHeight = parseInt(this.scrollHeight);
        $(this).css("height", "1px");
        $(this).css("height", 25 + $(this).height(scrollHeight));
    });
});

// Opens and closes comment section / open-discussion window
var open_status = true;
$(document).ready(function(){
    $(".thread, .close-section").click(function(){
        if(open_status) {
            $(document).ready(function(){
                $(".comment-section-background").fadeTo(200, 1);
                $(".comment-section").fadeTo(200, 1);
                $("body").css("overflow", "hidden");
                open_status = false;
            });
        } if(!open_status) {
            $(document).ready(function(){
                $(".comment-section-background").fadeOut(200);
                $(".comment-section").fadeOut(200);
                $("body").css("overflow", "scroll");
                open_status = true;
            });
        }
    });
});

var open_status_2 = true;
$(document).ready(function(){
    $(".open-discussion, .close-discussion").click(function(){
        if(open_status_2) {
            $(document).ready(function(){
                $(".discussion-background").fadeTo(200, 1);
                $(".open-discussion-window").fadeTo(200, 1);
                $("body").css("overflow", "hidden");
                open_status_2 = false;
            });
        } if(!open_status_2) {
            $(document).ready(function(){
                $(".discussion-background").fadeOut(200);
                $(".open-discussion-window").fadeOut(200);
                $("body").css("overflow", "scroll");
                open_status_2 = true;
            });
        }
    });
});

// Stuff cluttered into one jQuery block
$(document).ready(function(){
    $(".txta").focusin(function(){
        $(".txta").keyup(function(){
            document.getElementById('symbol-count').innerHTML = 300 - this.value.length;
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
    $(".inp").focusin(function(){
        $(this).keyup(function(){
            document.getElementById('symbol-count-topic').innerHTML = 50 - this.value.length;
            if($(this).val().length <= 10) {
                $("#alert-symbol-disc").css("visibility", "visible");
            } else {
                $("#alert-symbol-disc").css("visibility", "hidden");
            }

        });
    });
    $(".inp").focusout(function(){
        $("#alert-symbol-disc").css("visibility", "hidden");
    });
    $(".txta2").focusin(function(){
        $(this).keyup(function(){
            document.getElementById('symbol-count-text').innerHTML = 600 - this.value.length;
            if($(this).val().length <= 20) {
                $("#alert-symbol-disc2").css("visibility", "visible");
            } else {
                $("#alert-symbol-disc2").css("visibility", "hidden");
            }
        });
    });
    $(".txta2").focusout(function(){
        $("#alert-symbol-disc2").css("visibility", "hidden");
    });
}); 

// Hides and unhides thread's text window
var hide_status = true;
$(document).ready(function(){
    $("#hide-text").click(function(){
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
    })
});