$(document).ready(function(){
    $("#showHideContentTwo").click(function () {
        if ($("#contentTwo").is(":hidden")) {
            $("#contentTwo").show("slow");
        } else {
            $("#contentTwo").hide("slow");
        }
        return false;
    });
});
