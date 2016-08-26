$(document).ready (function() {
       $(".codeContainer").height(($(window).height()-$("#menubar").height())+"px");
       $("body").width($(window).width());

       $(".toggle").click(function() {
            $(this).toggleClass("selected");
            var activeDiv = $(this).html();
            $("#"+activeDiv+"container").toggle();
            var visibleDivs=$(".codeContainer").filter(function() {
                return ($(this).css("display") != "none");
            }).length;
        var width = 100/visibleDivs;
        $(".codeContainer").width(width+"%");
       });

       $("#run").click(function() {
            $("iframe").contents().find("html").html('<style>'+$("#cssCode").val()+'</style>'+$("#htmlCode").val());

            //document.getElementById("resultFrame").contentWindow.eval($("#jsCode").val());
       });
    });
