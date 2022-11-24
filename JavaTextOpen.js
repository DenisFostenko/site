$(document).ready(function(){
    $("#showHideContentClick").click(function () {
        if ($("#contentClick").is(":hidden")) {
            $("#contentClick").show();
        } else {
            $("#contentClick").hide();
        }
        return false;
    });
});

$(document).ready(function(){
    $("#showHideContentClickTwo").click(function () {
        if ($("#contentClickTwo").is(":hidden")) {
            $("#contentClickTwo").show();
        } else {
            $("#contentClickTwo").hide();
        }
        return false;
    });
});