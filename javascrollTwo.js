$(document).ready(function(){
    $("#showHideContentLast").click(function () {
        if ($("#contentLast").is(":hidden")) {
            $("#contentLast").show("slow");
        } else {
            $("#contentLast").hide("slow");
        }
        return false;
    });
});