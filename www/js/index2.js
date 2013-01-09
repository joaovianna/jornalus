var pagina=1;
        $("#maintela").ready(function () {
$.get("http://www.jornal.us/cordova/last_news.php", function(data){ $("#result").html(data);
});
        $(window).scroll(function(){
                if  ($(window).scrollTop() >= $(document).height() - $(window).height()){
                   	var content;
                	$.get('http://www.jornal.us/cordova/last_news.php?pagina='+pagina++, function(data) { content= data; if(content=="\n") {messagebox();return false;} $("#result").append(content); });


                }
        });

});     
