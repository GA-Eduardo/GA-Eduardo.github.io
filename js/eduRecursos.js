

// define all UI variable
const navToggler = document.querySelector('.nav-toggler');
const navMenu = document.querySelector('.site-navbar ul');
const navLinks = document.querySelectorAll('.site-navbar a');
let miCheckboxAudio = document.getElementById('modoaudio');
let spech = "si"
let idsegundocard = "";
let idvideo=""
let veces = 0;
let ultimapelcula = ""
let miarticulo = document.getElementById('frame');
let mivideoportada = document.getElementById('iframe2');
let urlportada = './videos/primeraFase.mp4';
mivideoportada.setAttribute('src', urlportada);
 




// load all event listners
allEventListners();




// functions of all event listners
function allEventListners() {
  // toggler icon click event
  navToggler.addEventListener('click', togglerClick);
  // nav links click event
  navLinks.forEach((elem) => elem.addEventListener('click', navLinkClick));
}

// togglerClick function
function togglerClick() {
  navToggler.classList.toggle('toggler-open');
  navMenu.classList.toggle('open');
}

// navLinkClick function
function navLinkClick() {
  if (navMenu.classList.contains('open')) {
    navToggler.click();
  }
}



let searchBar = document.getElementById('search-bar');
const list = document.getElementById('list');
searchBar.focus();



const peliculas = [
  {
    name: 'Matar un ruiseñor',
    year: '1962',
    campolibre: 'cine antiguas novelas narrativas',
    sinopsis:
      'Novela de iniciación, Matar a un ruiseñor muestra una comunidad, la del sur de Estados Unidos durante la década de 1930, dominada por los prejuicios raciales, la desconfianza hacia lo diferente, la rigidez de los vínculos familiares y vecinales, así como por un sistema judicial sin apenas garantías para la población',
    poster:
      'https://musicart.xboxlive.com/7/b06f0500-0000-0000-0000-000000000002/504/image.jpg?w=1920&h=1080',
    imagen:
      'https://r2.abcimg.es/resizer/resizer.php?imagen=https%3A%2F%2Fstatic3.abc.es%2Fmedia%2Fpeliculas%2F000%2F014%2F060%2Fmatar-a-un-ruisenor-2.jpg&nuevoancho=620&medio=abc',
    video: '//ok.ru/videoembed/1394245372656',
  },
  {
    name: 'Los inmortales',
    year: '1986',
    campolibre: 'cine antiguas acción aventuras fantasía ciencia ficción',
    sinopsis:
      'Los Inmortales son seres de una raza especial que sólo pueden morir decapitados entre sí. Viven desde hace siglos entre los hombres, pero ocultando su identidad. Unos defienden el Bien, otros, el Mal. Una maldición los obliga a luchar entre sí hasta que sólo quede uno de ellos. El escocés Connor MacLeod (Christopher Lambert) es uno de los supervivientes del clan de los Inmortales que ha llegado hasta nuestros días',
    poster: 'https://m.media-amazon.com/images/I/512YWZSyd7L.jpg',
    imagen:
      'https://cdn.ievenn.com/wp-content/uploads/los-inmortales-1986-ievenn-1.jpg',
    video: '//ok.ru/videoembed/3186723588862',
  },
  {
    name: 'Regreso al futuro',
    year: '1986',
    campolibre:
      'cine Ciencia ficción. Comedia. Fantástico. Aventuras  Viajes en el tiempo. Comedia juvenil. Adolescencia. familiar.',
    sinopsis:
      'El adolescente Marty McFly es amigo de Doc, un científico al que todos toman por loco. Cuando Doc crea una máquina para viajar en el tiempo, un error fortuito hace que Marty llegue a 1955, año en el que sus futuros padres aún no se habían conocido. Después de impedir su primer encuentro, deberá conseguir que se conozcan y se casen; de lo contrario, su existencia no sería posible.',
    poster: 'https://i.ytimg.com/vi/47mUTr-7NKg/hqdefault.jpg',
    imagen:
      'https://www.friking.es/img/cms/hipertextual-escena-regreso-futuro-2-que-netflix-censuro-2020755874.jpg',
    video: '//ok.ru/videoembed/1290093398601',
  },

  {
    name: 'La Trampa',
    year: '1999',
    campolibre: 'cine Acción intriga robos',
    sinopsis:
      'Siguiendo la pista de una valiosa pieza de arte robada, la agente de seguros Gin Baker convence a su compañía para que le permitan llevar a cabo un golpe en colaboración con un prestigioso y veterano ladrón, Robert "Mac" MacDouglas. Pero Mac la someterá a una serie de duros entrenamientos y pruebas antes de confiar en ella. ',
    poster: 'https://pics.filmaffinity.com/La_trampa-267197245-large.jpg',
    imagen:
      'https://es.web.img3.acsta.net/r_1280_720/medias/nmedia/18/86/97/57/19879109.jpg',
    video: '//ok.ru/videoembed/1890435140212',
  },

  {
    name: 'El sexto sentido',
    year: '1999',
    campolibre: 'cine Drama terror intriga',
    sinopsis:
      'El doctor Malcom Crowe es un conocido psicólogo infantil de Philadelphia que vive obsesionado por el doloroso recuerdo de un joven paciente desequilibrado al que fue incapaz de ayudar. Cuando conoce a Cole Sear, un aterrorizado y confuso niño de ocho años que necesita tratamiento, ve que se le presenta la oportunidad de redimirse haciendo todo lo posible por ayudarlo. Sin embargo, el doctor Crowe no está preparado para conocer la terrible verdad acerca del don sobrenatural de su paciente: recibe visitas no deseadas de espíritus atormentados',
    poster:
      'https://pics.filmaffinity.com/El_sexto_sentido-351070748-large.jpg',
    imagen:
      'https://ak.uecdn.es/p/108/sp/10800/thumbnail/entry_id/0_sm89kofn/version/100002/width/412/height/280',
    video: '//ok.ru/videoembed/1301235829321',
  },
  {
    name: 'El Mago de Oz',
    year: '1939',
    campolibre: 'cine Drama terror intriga',
    sinopsis:
      'Dorothy, que sueña con viajar "más allá del arco iris", ve su deseo hecho realidad cuando un tornado se la lleva con su perrito al mundo de Oz. Pero la aventura sólo acaba de comenzar: tras ofender a la Malvada Bruja del Oeste (Margaret Hamilton), aconsejada por la Bruja Buena del Norte (Billie Burke), la niña se dirige por el Camino Amarillo hacia la Ciudad Esmeralda, donde vive el todopoderoso Mago de Oz, que puede ayudarla a regresar a Kansas. Durante el viaje, se hace amiga del Espantapájaros (Ray Bolger), el Hombre de Hojalata (Jack Haley) y el León Cobarde (Bert Lahr). El Espantapájaros desea un cerebro, el Hombre de Hojalata quiere un corazón, y el León, el coraje que le falta; convencidos de que el Mago también les puede ayudar a ellos, deciden unirse a Dorothy en su odisea hasta la Ciudad Esmeralda',
    poster: 'https://es.web.img2.acsta.net/pictures/14/04/02/11/44/157777.jpg',
    imagen:
      'https://img.europapress.es/fotoweb/fotonoticia_20210210101947_420.jpg',
    video: '//ok.ru/videoembed/29010627280',
  },
  {
    name: 'Más alla de los Sueños',
    year: '1998',
    campolibre: 'cine Drama fantasía MAS ALLA DE LOS SUEÑOS',
    sinopsis:
      'Tras la muerte de sus dos hijos, el doctor Chris Nielson (Robin Williams) y su esposa Annie (Annabella Sciorra) continúan su vida a duras penas. Entonces Chris también muere en un accidente de coche y, cuando llega al cielo, conoce a Albert, que le muestra lo maravillosa que es la vida en el Más Allá. Mientras tanto, la soledad sume a Annie en una locura que la aleja cada vez más de la vida',
    poster:
      'https://pics.filmaffinity.com/M_s_all_de_los_sue_os-870027388-large.jpg',
    imagen: 'https://pbs.twimg.com/media/EQuxvpVWsAEy7Vu.jpg',
    video: '//ok.ru/videoembed/2242172619345',
  },
  {
    name: 'E.T. El Extraterrestre',
    year: '1982',
    campolibre: 'cine Drama fantasía',
    sinopsis:
      'Un pequeño ser de otro planeta e.t. se queda abandonado en la Tierra cuando su nave, al emprender el regreso, se olvida de él. Está completamente solo y tiene miedo, pero se hará amigo de un niño, que lo esconde en su casa. El pequeño y sus hermanos intentan encontrar la forma de que el pequeño extraterrestre regrese a su planeta antes de que lo encuentren los científicos y la policía.',
    poster:
      'https://pics.filmaffinity.com/E_T_el_extraterrestre-391240254-large.jpg',
    imagen:
      'https://images.ecestaticos.com/bCYHTs20IfZg3aRE4umKEERdfyI=/73x6:1120x599/1600x900/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2Fc41%2F015%2Fe4c%2Fc41015e4c8d3eab7747b74607e535805.jpg',
    video: '//ok.ru/videoembed/3471722875552',
  },
  {
    name: 'El Código Da Vinci',
    year: '2006',
    campolibre: 'cine intriga religión',
    sinopsis:
      'El catedrático y afamado simbologista Robert Langdon (Tom Hanks) se ve obligado a acudir una noche al Museo del Louvre, cuando el asesinato de un restaurador deja tras de sí un misterioso rastro de símbolos y pistas. Con la ayuda de la criptógrafa de la policía Sophie Neveu (Audrey Tautou) y poniendo en juego su propia vida, Langdon descubre que la obra de Leonardo Da Vinci esconde una serie de misterios que apuntan a una sociedad secreta encargada de custodiar un antiguo secreto que ha permanecido oculto durante dos mil años.',
    poster:
      'https://pics.filmaffinity.com/El_c_digo_Da_Vinci-343447182-large.jpg',
    imagen:
      'https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/480/public/media/image/2019/06/robert-langdon.jpg?itok=1qrPaO99',
    video: '//ok.ru/videoembed/3454488349344',
  },
  {
    name: '8 Apellidos Vascos',
    year: '2014',
    campolibre: 'cine comedia españolas romance ocho apellidos',
    sinopsis:
      'Rafa (Dani Rovira) es un joven señorito andaluz que no ha tenido que salir jamás de su Sevilla natal para conseguir lo único que le importa en la vida: el fino, la gomina, el Betis y las mujeres. Todo cambia cuando conoce una mujer que se resiste a sus encantos: es Amaia (Clara Lago), una chica vasca. Decidido a conquistarla, se traslada a un pueblo de las Vascongadas, donde se hace pasar por vasco para vencer su resistencia. Adopta el nombre de Antxon y varios apellidos vascos: Arguiñano, Igartiburu, Erentxun, Gabilondo, Urdangarín, Otegi, Zubizarreta... y Clemente.',
    poster:
      'https://pics.filmaffinity.com/Ocho_apellidos_vascos-836127633-large.jpg',
    imagen: 'https://img.ecartelera.com/noticias/fotos/34100/34161/1.jpg',
    video: '//ok.ru/videoembed/37509991020',
  },
  {
    name: ' El blog de eduardo cabrera ',
    year: '2022',
    campolibre:
      'recurso html css javascript python git github slack mi primera publicación recursos para estudiantes general assembly escuela de talento del ayuntamiento de madrid',
    sinopsis: ' primer blog dedicado a python css html y javascript',
    poster: '/imagenes/portada_edu.jpg',
    imagen: '/imagenes/portada_edu_ga.png',
    video: 'https://ga-eduardo.github.io/blog/index.html',
  },
  {
    name: 'Las Grabaciones de clases general Assembly',
    year: '2022',
    campolibre:
      'recurso las grabaciones de clases html css  videos pedro martín Álex Gabriel recursos para estudiantes general assembly grids flex selectores ',
    sinopsis:
      ' Las Grabaciones de clases general Assembly. Curso Web development. Fundación Adecco',
    poster: '/imagenes/imagen_slack.png',
    imagen: '/imagenes/grabaciones_clases.png',
    video:
      'https://docs.google.com/spreadsheets/d/1XqZkU4qcMKI6TUXtMRVkMC2yDYRUChqV59wqFhZvnqI/edit#gid=0',
  },
  {
    name: 'Las clases de General Assembly',
    year: '2022',
    campolibre:
      'recurso html css clases clase temario general assembly videos pedro martín Álex Gabriel recursos para estudiantes general assembly grids flex selectores ',
    sinopsis:
      ' Temario de clases general Assembly. Curso Web development. Fundación Adecco',
    poster: '/imagenes/clases_ga.png',
    imagen: 'https://thehive.sg/wp-content/uploads/2019/04/GA-2.jpg',
    video: 'https://fewd-es.pataruco.dev/',
  },
  {
    name: 'Perfiles de los alumnos de General Assembly',
    year: '2022',
    campolibre:
      'recurso html css clases clase temario general assembly pedro martín Álex Gabriel recursos para estudiantes general assembly ',
    sinopsis:
      ' Perfiles de los alumnos de clases general Assembly. Curso Web development. Fundación Adecco mi perfíl de general assembly',
    poster: '/imagenes/perfiles_ga.png',
    imagen: 'https://thehive.sg/wp-content/uploads/2019/04/GA-2.jpg',
    video:
      'https://pages.git.generalassemb.ly/fewd-es/01-perfiles/eduardo-cabrera/',
  },
  {
    name: ' Playlist de recursos en videos',
    year: '2022',
    campolibre:
      'recurso html css  videos youtube recursos para estudiantes general assembly grids flex selectores cancelación de ruido',
    sinopsis: ' videos de ayuda para programación',
    poster: '/imagenes/portada_edu.jpg',
    imagen: '/imagenes/portadaplaylist.png',
    video: 'https://ga-eduardo.github.io/index.html',
  },
  {
    name: 'Rtve en Directo',
    year: '2022',
    campolibre:
      'recursos tv televisión española en directo la uno la primera tve uno ver la tele ',
    sinopsis: ' Rtve en directo',
    poster:
      'https://play-lh.googleusercontent.com/-woGx8JGp3F68-xlXO8cBZuoFt-2J_-WcqY8uQEPB98FcpZT1JPAf2mjjwYN_l_Go7o',
    imagen: 'https://images-na.ssl-images-amazon.com/images/I/51qusMngucL.png',
    video: 'https://www.rtve.es/play/videos/directo/la-1/',
  },
  {
    name: 'Atajos de teclado Visual Studio Code Windows',
    year: '2022',
    campolibre:
      'recursos editor html css javascript python combinación de teclas  quiero ver atajos de teclado atajo de teclado un video de atajos de teclado. un video de atajo de teclado',
    sinopsis:
      ' Visual Studio Code Shortcuts.Atajos de teclado. Video de youtube',
    poster:
      'https://code.visualstudio.com/assets/docs/getstarted/keybinding/customization_keybindings.png',
    imagen:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTRBrE7iRfYbvpdwuDKG2MYeAQFbhOx2wdzQ&usqp=CAU',
    video: 'https://www.youtube.com/embed/P32Yd_VEJ-U',
  },
  {
    name: 'PDF Contrato y aceptación beca Adecco',
    year: '2022',
    campolibre:
      'recursos PDF beca Adecco contrato Adecco PDF general assembly PDF Fundación adecco pdf archivos pdf archivo pdf',
    sinopsis:
      ' PDF Contrato y aceptación beca Adecco. Curso Web development general assembly.',
    poster: '/imagenes/adecco_invierte.png',
    imagen:
      'https://www.telemadrid.es/2022/01/28/programas/madrid-trabaja/Fundacion-Adecco-formacion-colectivos-vulnerables_2418668129_30492542_1300x731.png',
    video: '/imagenes/beca_adecco.pdf',
  },
  {
    name: 'Asistencia de personal del 9 de diciembre',
    year: '2021',
    campolibre:
      'recursos excel archivo asistencias iforme de asistencias informes de asistencia archivos excel Bovis Proyect management archivo excel archivos excel',
    sinopsis:
      ' Asistencia de personal del 9 de diciembre. Enviado a gerencia, a la propiedad y al departamento de prevención de riesgos laborales',
    poster: '/imagenes/portada_excel.png',
    imagen: '/imagenes/imagen_excel.jpg',
    video:
      'https://docs.google.com/spreadsheets/d/1KhBs59ZE4-PwD2AjlLDCD_Au_7TRZnB2/edit?usp=sharing&ouid=110552365265668306985&rtpof=true&sd=true',
  },
];
let comentario = '';
let comentario2 = '';
let textoabuscar=""

const filter = () => {
  
  document.getElementById('zona-ayuda').style.display = 'none';
  mivideoportada.setAttribute('src', "");
  document.getElementById('frame').style.display = 'none';
  list.innerHTML = '';
  let contador = 0;
  window.scrollTo(0, 0);
 
  
  if (document.getElementById('search-bar').value === "") {
    comentario2 = "reset"
    
    
  }
  
  const text = searchBar.value.toLowerCase();
  

  for (let pelicula of peliculas) {
    let name = pelicula.name.toLowerCase();
    let year = pelicula.year.toLowerCase();
    let campolibre = pelicula.campolibre.toLowerCase();
    let sinopsis = pelicula.sinopsis.toLowerCase();
    let poster = pelicula.poster;
    let imagen = pelicula.imagen;
    let video=pelicula.video

    if (
      name.indexOf(text) !== -1 ||
      year.indexOf(text) !== -1 ||
      name.includes(text) ||
      name.includes(text) ||
      campolibre.includes(text) ||
      sinopsis.includes(text)
    ) {
      document.getElementById('mensajes').innerText = 'SU RESULTADO';

      contador += 1;
      if (contador === 1 && comentario !== comentario2) {
        comentario = sinopsis;
        ultimapelcula = pelicula.name;
      }
      idvideo = pelicula.video;
      list.innerHTML += `	<div class="">
														<li class=" card ">
                            <span> ${pelicula.name} </span>
                              	<p> ${pelicula.year} </p>
														  <img id=${pelicula.video} onclick="prueba(this.id)"src=${pelicula.poster} alt="beach" class="card-image">
                              <h3 class="card-title">${pelicula.name}</h3>
																
                            
													</div>`;
      idsegundocard = pelicula.video + '-';
      list.innerHTML += `	<div id=${idsegundocard}  style="display:none">
														<li class="card-anexo">
                            <p> ${pelicula.name} </p>
                              <textarea> ${pelicula.sinopsis} </textarea>
														  <img id=${pelicula.video} onclick="prueba(this.id)"src=${pelicula.imagen} alt="beach" class="card-image-anexo">
                              <h3 class="card-title">${pelicula.name}</h3>
																
                            
													</div>`;
    }
  
    
  }

  if (contador === 1){
    document.getElementById(idsegundocard).style.display = 'block';
      window.scrollTo(0, document.body.scrollHeight);
    veces = contador
    localStorage.setItem('titulo', ultimapelcula);

 
 }

  if ((contador === 1)&& (comentario !==comentario2)) {
      comentario2 = comentario;
     }
  
  if ((list.innerHTML === '') && (comentario !==comentario2) ) {
    document.getElementById('mensajes').innerText = "BUSQUEDA NO ENCONTRADA"
    /*     document.getElementById('zona-ayuda').style.display = 'block'; */
    comentario2 = comentario;
    textoabuscar = text
    document.getElementById('search-bar').value = textoabuscar;
    edulearningacciones(textoabuscar);
    edulearningbusqueda(textoabuscar);
    textoabuscar = text;
    edulearningrespuestas(textoabuscar);
     
   
    
  }
  

  if (list.innerHTML !== '' && text!== '') {
    /* moverse();  */
   document.getElementById('frame').style.display = 'none';
  } 
  
  if (list.innerHTML === '')  {
   
    miarticulo.setAttribute('src', 'https://www.bing.com/search?q=' + text);
    document.getElementById('frame').style.display = 'block';
    window.scrollTo(0, document.body.scrollHeight);
  
    
    
    
        
  }
 
  
   
};


 

searchBar.addEventListener('input', filter);




function prueba(x) {
  document.getElementById('search-bar').value = 'localizado...........';
  filter();
  mivideoportada.setAttribute('src', '');
  miarticulo.setAttribute('src', x);
  document.getElementById('frame').style.display = 'block';
  document.getElementById('zona-ayuda').style.display = 'none';
  /* moverse(); */
  window.scrollTo(0, document.body.scrollHeight);
}



const toggleSwitch = document.getElementById('modovista');
const toggleAudio = document.getElementById('modoaudio');
var video = document.getElementById('background-video');
toggleAudio.checked = true;

function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute('data-theme', 'dark');
    const u = new SpeechSynthesisUtterance();
    u.text = 'Activando modo oscuro';
    u.lang = 'es-CO';
    u.voice = speechSynthesis.getVoices()[0];
    speechSynthesis.speak(u);
    video.setAttribute('src', './videos/Car.mp4');
   
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    const u = new SpeechSynthesisUtterance();
    u.text = 'Activando modo claro';
    u.lang = 'es-CO';
    u.voice = speechSynthesis.getVoices()[0];
    speechSynthesis.speak(u);
    video.setAttribute('src', './videos/Clouds.mp4');
  
   
  }
}

function switchSpech(e) {
  if (e.target.checked) {
  const u = new SpeechSynthesisUtterance();
  u.text = 'narrador activado';
  u.lang = 'es-CO';
  u.voice = speechSynthesis.getVoices()[0];
  speechSynthesis.speak(u);
  spech = "si"

  
  } else {
    const u = new SpeechSynthesisUtterance();
    u.text = 'narrador desactivado'
    u.lang = 'es-CO';
    u.voice = speechSynthesis.getVoices()[0];
    speechSynthesis.speak(u);
    spech="no"
  }
}




toggleSwitch.addEventListener('change', switchTheme, false);
toggleAudio.addEventListener('change', switchSpech, false);

function moverse() {
  alert("llega")
    window.scroll({
      top: 100,
      left: 100,
      behavior: 'smooth',
    });
}


function vertodo(xx) {
   miarticulo.setAttribute('src', "");
  document.getElementById('search-bar').value = xx;
   document.getElementById('frame').style.display = 'none';
   if (xx === 'cine') {
     document.getElementById('menu').style.display = 'none';
     document.getElementById('menu-recursos').style.display = 'none';
     document.getElementById('menu-cine').style.display = 'inline';
   }
  if (xx === 'recursos') {
    
     document.getElementById('menu').style.display = 'none';
     document.getElementById('menu-cine').style.display = 'none';
     document.getElementById('menu-recursos').style.display = 'inline';
  }
   if (xx === 'como se hizo') {
     document.getElementById('menu').style.display = 'inline';
     document.getElementById('menu-cine').style.display = 'none';
     document.getElementById('menu-recursos').style.display = 'none';
   }
  filter();
  
  const u = new SpeechSynthesisUtterance();
  u.text = 'has pedido '+xx;
  u.lang = 'es-CO';
  u.voice = speechSynthesis.getVoices()[0];
  speechSynthesis.speak(u);
  

  document.getElementById('search-bar').value=""
  searchBar.focus();
  
}