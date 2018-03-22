/* AGREGAR CAPA AL MENU OPCION UNO*/

var $bar = document.getElementById('bar');
var $menu = document.getElementById('menu');
var $iconMenu = document.getElementById('iconMenu');
var $guitarra = document.getElementById('guitarra');

  $bar.addEventListener('click', toggleMenu);
  $guitarra.addEventListener('click', cerrarMenu);

/* FUNCIONES*/

// AGREGAR CLASE Y REMOVER CLASES

function toggleMenu(){
  $menu.classList.toggle('capaMenu')
  $iconMenu.classList.toggle('fa-times-circle')
  $slidercapaMenu.classList.toggle('scroll-menu')
}

function AgregarMenu(){
  $menu.classList.add('capaMenu')
}

function RemoverMenu(){
  $menu.classList.remove('capaMenu')
}

function cerrarMenu(){
  $menu.classList.remove('capaMenu')
  $iconMenu.classList.remove('fa-times-circle')
  $slidercapaMenu.classList.remove('scroll-menu')
}

// AGREGAR CLASES RESPONSIVES MEDIAQUERIES

/* AGREGAR PROPIEDADES SEGUN LA RESOLUCION DE LA PANTALLA MEDIAQUERIES OPCION DOS*/

/*var $consulta = window.matchMedia('(max-width: 575px)');
  $consulta.addListener(mediaQuery)

function mediaQuery(){
  if  ($consulta.matches){
    $bar.addEventListener('touchstart', toggleMenu);
  } else {
    $bar.removeEventListener('touchstart', toggleMenu);
  }
}
mediaQuery();*/

/* CARGAR IMAGES A MEDIDA QUE SE REALIZA SCROLL EN LA INTERFAZ PARA MEJOR USER EXPERIENCE */

var bLazy = new Blazy({
    selector: 'img'
});

/* GESTOS DE EFECTOS PARA DISPOSITIVOS MOVILES */

var $slidercapaMenu = document.getElementById('slidercapaMenu');

var gestos = new Hammer($slidercapaMenu);
gestos.on('swiperight', AgregarMenu)
gestos.on('swipeleft', RemoverMenu)
