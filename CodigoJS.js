window.onload = function() {

    //BOTON SCROLL Y  ACHICAR HEADER
    var cabezera = document.querySelector("#inicio");
    $("#btmScroll, #logo").click(function() {
        $("html, body").animate({
            scrollTop: 0
        }, 500);
    })

    $(window).scroll(function() {

        if ($("html, body").scrollTop() > 0) {
            $("#btmScroll").slideDown(200);
            $(cabezera).stop().animate({
                height: "80px"
            }, 400);
        } else {
            $("#btmScroll").slideUp(200);
            $(cabezera).animate({
                height: "120px"
            }, 400);
        }
        //error corregido que no se cierra el menu cuando queremos seguir scrolleando
        //----------------------
        if ($("#botonmenu").css("display") == "inline-block") {
            cerrarMenu();
        }
        //-----------------------
    })


    //MENU DESPLEGABLE
    $("#botonmenu").click(function() {
        if ($(".menudesplegable").css("display") == "none") {
            $(this).css({
                "background-color": "#282828",
                "color": "white"
            });
            $(".menudesplegable").slideDown(300);
        } else {
            cerrarMenu();
        }
    })

    //Funcion cerrarMenuDesplegable
    function cerrarMenu() {
        $("#botonmenu").css({
            "background-color": "white",
            "color": "#282828"
        });
        $(".menudesplegable").slideUp(300);
    }
    //SLIDER
    var slider = $("#slider");
    var btmIzq = $("#btmIzq");
    var btmDer = $("#btmDer");
    var intervalo;
    intervalo = setInterval(moverDer, 5000);

    $("#slider section:last").insertBefore("#slider section:first");
    $(slider).css("marginLeft", "-100%");

    function moverDer() {
        slider.stop().animate({
            marginLeft: -200 + "%"
        }, 700, function() {
            $("#slider section:first").insertAfter("#slider section:last");
            $(slider).css("marginLeft", "-100%");
            autoplay();
        });
    }

    function moverIzq() {
        slider.stop().animate({
            marginLeft: 0
        }, 700, function() {
            $("#slider section:last").insertBefore("#slider section:first");
            $(slider).css("marginLeft", "-100%");
            autoplay();
        });
    }

    function autoplay() {
        clearInterval(intervalo);
        intervalo = setInterval(moverDer, 5000);
    }

    btmDer.on("click", function() {
        moverDer();
    })
    btmIzq.on("click", function() {
        moverIzq();
    })

    //Interaccion con el menu, scroll
    var menuBtm = $(".menudesplegable li a");

    menuBtm.each(function() {
        $(this).click(scrollearToSection);
    })

    function scrollearToSection(e) {
        let btmPulsado = e.target;
        let posicionDeSeccion = $($(btmPulsado).attr("name")).offset().top;

        $("html, body").animate({
            scrollTop: posicionDeSeccion - 80
        }, 500);

        $(".menudesplegable").slideUp(300);
    }


}