//Jquery
$(document).ready(function(){

    //Menú responsive
    var contador = 1;

    $('#menu-bar').click(function(){
        if(contador == 1){
            $('#menu').animate({
                left: '0'
            });
            contador = 0;
        } else{
            contador = 1;
            $('#menu').animate({
                left: '-100%'
            });
        }
    });

    //Redes sociales
    $("#face").click(function(){
        window.open('https://www.facebook.com/pages/category/Kitchen-Cooking/Ame-le-Petit-108844777543666/');
    });
    
    $("#insta").click(function(){
        window.open('https://www.instagram.com/ame_yinebra/?hl=es-la');
    });
    
    $("#you").click(function(){
        window.open('https://www.youtube.com/channel/UCDIMXVEdqXcVdmT7Pfr7Ssw');
    });

    //Menú
    $('#inicio').click(function(){
        $('html, body').animate({
            scrollTop: $("#logo").offset().top -100
            }, 200);
    });

    $('#recetas').click(function(){
        $('html, body').animate({
            scrollTop: $("#recetas-content").offset().top -100
            }, 200);
    });

    $('#diy').click(function(){
        $('html, body').animate({
            scrollTop: $("#diy-content").offset().top -100
            }, 200);
    });

    $('#tips').click(function(){
        $('html, body').animate({
            scrollTop: $("#tips-content").offset().top -100
            }, 200);
    });

    $('#playlist').click(function(){
        $('html, body').animate({
            scrollTop: $("#playlist-content").offset().top -70
            }, 200);
    });

    //Scroll arriba
    $(".subir").click(function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop:0
        }, 500);
        return false;
    });
});