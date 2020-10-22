$(document).ready(function() {
    //SLIDER
    if (window.location.href.indexOf('index') > -1) {
        $('.bxslider').bxSlider({
            mode: 'fade',
            speed: 500,
            pager: false,
            captions: true,
            slideWidth: 1200
        });
    }


    //POST
    if (window.location.href.indexOf('index') > -1) {
        var post = [{
                title: 'Prueba del Titulo 1',
                date: moment().format("MMMM Do YYYY"),
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque a dictum mi, id mollis diam. Donec volutpat sapien non turpis rutrum consequat non sed lorem. Vestibulum at felis eleifend odio mollis mattis ut vel lacus. Quisque blandit vel mauris id dapibus. Phasellus a pharetra ante, ut sagittis elit. Pellentesque rhoncus feugiat dapibus. Aenean odio ex, gravida vel massa a, porta accumsan sem.'
            },
            {
                title: 'Prueba del Titulo 2',
                date: moment().format("MMMM Do YYYY"),
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque a dictum mi, id mollis diam. Donec volutpat sapien non turpis rutrum consequat non sed lorem. Vestibulum at felis eleifend odio mollis mattis ut vel lacus. Quisque blandit vel mauris id dapibus. Phasellus a pharetra ante, ut sagittis elit. Pellentesque rhoncus feugiat dapibus. Aenean odio ex, gravida vel massa a, porta accumsan sem.'
            },
            {
                title: 'Prueba del Titulo 3',
                date: moment().format("MMMM Do YYYY"),
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque a dictum mi, id mollis diam. Donec volutpat sapien non turpis rutrum consequat non sed lorem. Vestibulum at felis eleifend odio mollis mattis ut vel lacus. Quisque blandit vel mauris id dapibus. Phasellus a pharetra ante, ut sagittis elit. Pellentesque rhoncus feugiat dapibus. Aenean odio ex, gravida vel massa a, porta accumsan sem.'
            },
            {
                title: 'Prueba del Titulo 4',
                date: moment().format("MMMM Do YYYY"),
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque a dictum mi, id mollis diam. Donec volutpat sapien non turpis rutrum consequat non sed lorem. Vestibulum at felis eleifend odio mollis mattis ut vel lacus. Quisque blandit vel mauris id dapibus. Phasellus a pharetra ante, ut sagittis elit. Pellentesque rhoncus feugiat dapibus. Aenean odio ex, gravida vel massa a, porta accumsan sem.'
            },
            {
                title: 'Prueba del Titulo 5',
                date: moment().format("MMMM Do YYYY"),
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque a dictum mi, id mollis diam. Donec volutpat sapien non turpis rutrum consequat non sed lorem. Vestibulum at felis eleifend odio mollis mattis ut vel lacus. Quisque blandit vel mauris id dapibus. Phasellus a pharetra ante, ut sagittis elit. Pellentesque rhoncus feugiat dapibus. Aenean odio ex, gravida vel massa a, porta accumsan sem.'
            }
        ];


        //LLENAR EL DIV POSTS CON TOOS LOS ARTICULOS
        post.forEach((item, index) => {
            var post = `
            <article class="post">
            <h2>${item.title}</h2>
            <span class="date">${item.date}</span>
            <p>
            ${item.content}
            </p>
            <a href="#" class="button-more">Leer mas</a>
            </article>
        `;
            $('#posts').append(post);
        });

    }
    //SELECTOR DE TEMA
    var theme = $('#theme')
    $('#to-green').click(function() {
        theme.attr("href", "css/green.css");
    });
    $('#to-red').click(function() {
        theme.attr("href", "css/red.css");
    });
    $('#to-blue').click(function() {
        theme.attr("href", "css/blue.css");
    });

    //BOTON IR ARRIBA
    $('.subir').click(function(e) {
        e.preventDefault();

        $('html,body').animate({
            scrollTop: 0
        }, 500);
        return false;
    });


    //LOGIN FALSO
    $('#login form').submit(function() {
        var form_name = $('#form_name').val();
        localStorage.setItem("form_name", form_name);
    });
    var form_name = localStorage.getItem("form_name");
    if (form_name != null && form_name != "undefined") {
        var about_parrafo = $('#about p');
        about_parrafo.html("<strong>Bienvenido " + form_name + "</strong>");
        about_parrafo.append("<a href='#' id='logout'>Cerrar Sesion</a>");

        $('#login').hide();

        $('#logout').click(function() {
            localStorage.clear();
            location.reload();
        });
    }
    if (window.location.href.indexOf('about') > -1) {
        $('#acordeon').accordion();
    }

    if (window.location.href.indexOf('reloj') > -1) {
        setInterval(function() {
            var reloj = moment().format("hh:mm:ss");
            $('#reloj').html(reloj);
        }, 1000);

    }

    //VALIDACION
    if (window.location.href.indexOf('contacto') > -1) {

        $('form input[name="date"]').datepicker({
            dateFormat: 'dd-mm-yy'
        });
        $.validate({
            lang: 'es',
            errorMessagePosition: 'top',
            scrollToTopOnError: true
        });
    }
});