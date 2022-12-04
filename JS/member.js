// Automatically increases comment section text input height
function textAreaAdjust(element) {
    element.style.height = "1px";
    element.style.height = (25 + element.scrollHeight) + "px";
}

// Opens and closes comment section
var open_status = true;
function openClose_section() {
    if(open_status) {
        $(document).ready(function(){
            $(".comment-section").css("display", "unset");
            open_status = false;
        });
    } if(!open_status) {
        $(document).ready(function(){
            $(".comment-section").css("display", "none");
            open_status = true;
        });
    }
}