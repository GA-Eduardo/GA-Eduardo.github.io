//fichero principal Js y de soporte a datos y busquedas

// Definición de variables
const navToggler = document.querySelector('.nav-toggler');
const navMenu = document.querySelector('.site-navbar ul');
const navLinks = document.querySelectorAll('.site-navbar a');
let miCheckboxAudio = document.getElementById('modoaudio');
let spech = "no"
let microfono=false
let reconocimientoVoz=true
let idsegundocard = "";
let idvideo=""
let veces = 0;
let ultimapelcula = ""
let miarticulo = document.getElementById('frame');
let mivideoportada = document.getElementById('iframe2');
let urlportada = './videos/tutorial001.webm';
mivideoportada.setAttribute('src', urlportada);

// la siguiente linea llama a una funcion de escucha 
allEventListners();

// funcion que contiene escuchas para  eventos de la navegación
function allEventListners() {
  // toggler icon click event
  navToggler.addEventListener('click', togglerClick);
  // nav links click event
  navLinks.forEach((elem) => elem.addEventListener('click', navLinkClick));
}

// esta función cambia la clase para el navegador
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

// variable para el campo de entrada del teclado y para la lista que se creará dinamicamente
let searchBar = document.getElementById('search-bar');
const list = document.getElementById('list');
searchBar.focus();

// array de objetos para recursos (tanto peliculas como cualquier otro contenido)
// originalmente pensé en solo poner películas por lo que el par (video:recurso) de usa para todos los fines
// luego se recorreran estos objetos mediante un filtro

const peliculas = [
  {
    name: 'La ciudad perdida(2022)',
    year: '2022',
    campolibre:
      'cine Sandra Bullock Aventura. Comedia. Acción  Comedia romántica Aventuras ',
    sinopsis:
      'La carrera literaria de la brillante y algo huraña escritora de novelas Loretta Sage (Sandra Bullock) ha girado en torno a las novelas románticas de aventuras que, ambientadas en lugares exóticos, protagoniza un atractivo galán cuya imagen aparece reproducida en todas las portadas, y que en la vida real corresponde a Alan (Channing Tatum), un modelo que ha centrado su carrera en personificar al novelesco aventurero. Durante una gira para promocionar su nuevo libro junto a Alan, Loretta es raptada por un excéntrico multimillonario (Daniel Radcliffe), con la intención de que la autora le guíe hasta el tesoro de la antigua ciudad perdida sobre el que gira su último relato. Deseoso de demostrar que puede ser un héroe en la vida real, y no simplemente en las páginas de sus obras de ficción, Alan se lanza al rescate de la novelista.',
    poster:
      'https://www.neocine.es/recurso/articulo/la_ciudad_perdida_91571.jpg',
    imagen:
      'https://kinefilia.files.wordpress.com/2022/04/la-ciudad-perdida-1.jpg?w=584',
    video: (src = '//ok.ru/videoembed/3321841322750'),
  },

  {
    name: 'Camera café La película (2022)',
    year: '2022',
    campolibre: 'cine Comedia Trabajo/empleo Arturo Valls',
    sinopsis:
      'Quesada, Julián, Marimar, Cañizares, Victoria y compañía se enfrentarán a una crisis que está a punto de hundir la empresa y, lo que es peor, deberá salvarla su nuevo director, que es nada más y nada menos que el rey del escaqueo, Quesada.',
    poster:
      'https://pics.filmaffinity.com/camera_cafe_la_pelicula-806236522-large.jpg',
    imagen:
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/camera-cafe-la-pelicula-1646137464.jpg',
    video: (src = '//ok.ru/videoembed/3331835562750'),
  },

  {
    name: 'Casper',
    year: '1995',
    campolibre:
      'cine Fantástico. Comedia. Infantil Sobrenatural. Casas encantadas. Fantasmas. Comedia de terror. Cine familiar',
    sinopsis:
      'La señora Crittenden (Cathy Moriarty) contrata al doctor Harvey (Bill Pullman) para que libere su mansión de los cuatro fantasmas que la habitan. Látigo, Tufo y Gordy no toleran a los mortales dentro de la casa y su negro sentido del humor ahuyenta a los más audaces. Su sobrino Casper, en cambio, es un joven amistoso que está harto de sus tíos. Harvey se presenta en la mansión con su hija Kat (Christina Ricci), una soñadora adolescente. Ella y Casper simpatizan inmediatamente, a pesar de que tienen problemas para relacionarse. De Casper huye todo el mundo porque es un fantasma; de Kat también, en cuanto se enteran de la profesión de su padre. El fantasma y la chica son dos almas gemelas que viven en continuo conflicto con sus respectivos parientes',
    poster: 'https://www.aceprensa.com/wp-content/uploads/1995/07/8839-0.jpg',
    imagen:
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/casper-25-aniversario-curiosidades-8-1589893439.jpg',
    video: (src = '//ok.ru/videoembed/2821656480438'),
  },

  {
    name: 'El retorno del Jedi',
    year: '1983',
    campolibre:
      'cine Ciencia ficción. Aventuras  Aventura espacial. Harrison Ford star wars',
    sinopsis:
      'Para ir a Tatooine y liberar a Han Solo, Luke Skywalker y la princesa Leia deben infiltrarse en la peligrosa guarida de Jabba the Hutt, el gángster más temido de la galaxia. Una vez reunidos, el equipo recluta a tribus de Ewoks para combatir a las fuerzas imperiales en los bosques de la luna de Endor. Mientras tanto, el Emperador y Darth Vader conspiran para atraer a Luke al lado oscuro, pero el joven está decidido a reavivar el espíritu del Jedi en su padre. La guerra civil galáctica termina con un último enfrentamiento entre las fuerzas rebeldes unificadas y una segunda Estrella de la Muerte, indefensa e incompleta, en una batalla que decidirá el destino de la galaxia',
    poster: 'https://m.media-amazon.com/images/I/7193hhHCbhL._AC_SY679_.jpg',
    imagen:
      'https://cdn.cinencuentro.com/wp-content/uploads/2017/10/return-of-the-jedi-endor-236824-1280x0-950x523.jpg',
    video: (src = '//ok.ru/videoembed/3335702710865'),
  },

  {
    name: 'Indiana Jones y el Reino de la calavera de cristal',
    year: '2008',
    campolibre:
      'cine Aventuras. Acción. Ciencia ficción  Años 50. Guerra Fría. Harrison Ford',
    sinopsis:
      'Año 1957, en plena guerra fría. Indiana Jones (Harrison Ford) consigue de milagro salir ileso de una explosiva situación con unos agentes soviéticos en un remoto desierto al que llegó detenido junto a su amigo Mac (Ray Winstone). El decano de la Universidad (Jim Broadbent) le confiesa a su amigo el profesor Jones que las últimas misiones de Indy han fracasado, y que está a punto de ser despedido. Mientras tanto, Indiana conoce a Mutt (Shia LaBeouf), un joven rebelde que le propone un trato: si le ayuda a resolver un problema personal, él, a cambio, le facilitaría uno de los descubrimientos más espectaculares de la historia: la Calavera de Cristal de Akator, que se encuentra en un lugar remoto del Perú. Pero los agentes soviéticos, dirigidos por la fría y bella Irina Spalko (Cate Blanchett), tienen el mismo objetivo',
    poster:
      'https://es.web.img2.acsta.net/medias/nmedia/18/66/69/78/20168730.jpg',
    imagen:
      'https://imagenes.20minutos.es/files/og_thumbnail/uploads/imagenes/2018/05/06/indiana-jones-and-the-kingdom-of-the-crystal-skull-720p-www-yify-174232-1280x0.jpg',
    video: (src = '//ok.ru/videoembed/1589419510345'),
  },

  {
    name: 'Los viajes de Gulliver (2010)',
    year: '2010',
    campolibre: 'cine Aventuras. Fantástico. Comedia  Cuentos.  Cine familiar',
    sinopsis:
      'Lemuel Gulliver (Jack Black), un aspirante a escritor que trabaja como repartidor en un importante periódico de Nueva York, sueña con escribir libros de viajes. Toma entonces la decisión de navegar hacia al Triángulo de las Bermudas, pero una terrible tormenta lo arrastra hasta una isla pérdida que está habitada por seres diminutos, los liliputienses. Después de un comienzo no muy amistoso, el gigante Gulliver se gana la confianza y se convierte en fuente de inspiración para sus nuevos amigos. Bajo sus órdenes, los liliputienses consiguen derrotar a sus enemigos de la isla vecina. Sin embargo, Gulliver aún tendrá que saldar cuentas con sus propios defectos para poder salir, por fin, de su limitado mundo',
    poster:
      'https://diariodeunacinefila.files.wordpress.com/2014/09/poster-los-viajes-de-gulliver-2010.jpg',
    imagen:
      'https://www.tshirtsonscreen.com/wp-content/uploads/2014/12/gulliverstravelsruckerparkbasketballshirt-e1449681748848.jpg',
    video: (src = '//ok.ru/videoembed/354959100547'),
  },
  {
    name: 'A.I.Inteligencia Artificial [2001]',
    year: '2001',
    campolibre:
      'cine Ciencia ficción. Fantástico. Drama  Robots. Inteligencia artificial',
    sinopsis:
      'En un mundo futuro, los seres humanos conviven con sofisticados robots llamados Mecas. Los sentimientos son lo único que diferencia a los hombres de las máquinas. Pero, cuando a un robot-niño llamado David se le programa para amar, los hombres no están preparados para las consecuencias, y David se encontrará solo en un extraño y peligroso mundo.',
    poster:
      'https://pics.filmaffinity.com/A_I_Inteligencia_Artificial-438389361-large.jpg',
    imagen:
      'https://pics.filmaffinity.com/A_I_Inteligencia_Artificial-445242970-large.jpg',
    video: (src = '//ok.ru/videoembed/1726662052606'),
  },

  {
    name: 'La Milla verde',
    year: '1999',
    campolibre:
      'cine Drama. Fantástico  Drama carcelario. Sobrenatural. Años 30 Tom Hanks',
    sinopsis:
      'Ambientada en el sur de los Estados Unidos, en plena Depresión. Paul Edgecomb es un funcionario de prisiones encargado de vigilar la "Milla Verde", un pasillo que separa las celdas de los reclusos condenados a la silla eléctrica. John Coffey, un gigantesco hombre negro acusado de asesinar brutalmente a dos hermanas de nueve años, está esperando su inminente ejecución. Tras una personalidad ingenua e infantil, Coffey esconde un prodigioso don sobrenatural. ',
    poster: 'https://pics.filmaffinity.com/La_milla_verde-631715339-large.jpg',
    imagen: 'https://i.ytimg.com/vi/kdWKOKl74VQ/maxresdefault.jpg',
    video: (src = '//ok.ru/videoembed/970248686214'),
  },

  {
    name: 'Casablanca',
    year: '1942',
    campolibre:
      'cine antiguo películas antiguas  Ingrid Bergman  Humphrey Bogart Drama. Romance  Drama romántico. II Guerra Mundial. África. Nazismo',
    sinopsis:
      'Años 40. A consecuencia de la Segunda Guerra Mundial, Casablanca era una ciudad a la que llegaban huyendo del nazismo gente de todas partes: llegar era fácil, pero salir era casi imposible, especialmente si el nombre del fugitivo figuraba en las listas de la Gestapo, que presionaba a la autoridades francesas al mando del corrupto inspector Renault.',
    poster:
      'http://1.bp.blogspot.com/-Qi_4N8D2Ufs/TXoBQhJ2lEI/AAAAAAAADdw/3CzQyfOzzNg/s00/189557_1020_A.jpg',
    imagen:
      'https://i0.wp.com/frasesdelapelicula.com/wp-content/uploads/2011/10/casablanca.jpg?fit=1200%2C630&ssl=1',
    video: (src = '//ok.ru/videoembed/36659530307'),
  },

  {
    name: 'Cantando bajo la lluvia',
    year: '1952',
    campolibre:
      'cine Musical. Comedia. Romance Cine dentro del cine. Años 20. Baile. Sátira musicál antigua películas antiguas',
    sinopsis:
      'Antes de conocer a la aspirante a actriz Kathy Selden (Debbie Reynolds), el ídolo del cine mudo Don Lockwood (Gene Kelly) pensaba que lo tenía todo: fama, fortuna y éxito. Pero, cuando la conoce, se da cuenta de que ella es lo que realmente faltaba en su vida. Con el nacimiento del cine sonoro, Don quiere filmar musicales con Kathy, pero entre ambos se interpone la reina del cine mudo Lina Lamont (Jean Hagen)',
    poster:
      'https://soundtrackfest.com/wp-content/uploads/2019/07/MN-2019-08-01-%E2%80%98Cantando-bajo-la-lluvia%E2%80%99-en-concierto-con-la-BOS-en-Bilbao.jpg',
    imagen: 'https://i.blogs.es/a681ef/cantando-lluvia/1366_2000.jpeg',
    video: (src = '//ok.ru/videoembed/2215492389549'),
  },

  {
    name: 'Juana de Arco',
    year: '1999',
    campolibre:
      'cine Drama  Histórico. Biográfico. Siglo XV. Religión. Juana de Arco',
    sinopsis:
      'Juana es una muchacha profundamente religiosa, cristiana. Después de tener su primera visión, vuelve a su hogar y se encuentra con que los ingleses han matado a su familia. Algunos años después, completamente convencida de que Dios le ha encomendado la misión de expulsar a los ingleses de Francia, va a ver al Delfín, el futuro Carlos VII, que le proporciona tropas para levantar el cerco de Orleáns.',
    poster: 'https://pics.filmaffinity.com/Juana_de_Arco-278470264-large.jpg',
    imagen:
      'https://r1.abcimg.es/resizer/resizer.php?imagen=https%3A%2F%2Fstatic4.abc.es%2Fmedia%2Fpeliculas%2F000%2F000%2F409%2Fjuana-de-arco-de-luc-besson-2.jpg&nuevoancho=620&medio=abc',
    video: (src = '//ok.ru/videoembed/1279930075779'),
  },

  {
    name: 'Simbad: la Leyenda de los Siete Mares',
    year: '2003',
    campolibre:
      'cine Animación. Aventuras. Fantástico. Infantil Piratas. Mitología. Aventuras marinas',
    sinopsis:
      'Un marinero persa llamado Simbad está en una búsqueda para encontrar el mágico y legendario Libro de la Paz, un misterioso artefacto que Eris, la malvada diosa griega del caos, finalmente lo ha incriminado por robar. Si fracasa en esta misión, su amigo de la infancia, el príncipe Proteus de Siracusa, se someterá a la pena de muerte de Sindbad, mientras que Eris se afianza en el poder deseado en el mundo de los mortales.',
    poster: 'https://es.web.img2.acsta.net/pictures/16/02/19/13/17/564558.jpg',
    imagen: 'https://pbs.twimg.com/media/EOMiWIXXUAAWZiM.jpg',
    video: (src = '//ok.ru/videoembed/3084891654838'),
  },

  {
    name: 'Ángeles con caras sucias',
    year: '1938',
    campolibre:
      'cine negro. Thriller  Mafia películas antiguas James Cagney  Humphrey Bogart',
    sinopsis:
      'Un sacerdote presencia impotente cómo los niños marginados de su parroquia sucumben a las malas influencias de un criminal que fue compañero suyo de la infancia. Con el paso del tiempo, los dos hombres siguieron caminos muy diferentes: uno abrazó el sacerdocio y el otro se convirtió en un gángster.',
    poster: 'https://m.media-amazon.com/images/I/81EYr6rgExL._SY445_.jpg',
    imagen:
      'https://es.web.img3.acsta.net/videothumbnails/14/02/10/13/08/221742.jpg',
    video: '//ok.ru/videoembed/1463951690333',
  },

  {
    name: 'La Lista de Schindler',
    year: '1993',
    campolibre:
      'cine drama holocausto nazis nazismo guerra mundial bélico niel neelsen',
    sinopsis:
      'Septiembre de 1939. Los nazis invaden Polonia. Los judíos son internados en guetos y enviados a campos de concentración. El empresario alemán Oskar Schindler (Liam Neeson), un dandy oportunista con talento para las relaciones públicas, aprovecha esta situación para prosperar económicamente. Comienza así una interesada relación con los militares nazis más poderosos para poner en marcha una fábrica en Cracovia, cuya mano de obra serán operarios judíos procedentes de los campos de concentración.',
    poster:
      'https://pics.filmaffinity.com/schindler_s_list-473662617-large.jpg',
    imagen:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi-f0qYQL07RWzUVGjmwl_uRTxXHAWH5ue4w&usqp=CAU',
    video: '//ok.ru/videoembed/341009828484',
  },

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
    campolibre:
      'cine antiguas acción aventuras fantasía ciencia ficción solo puede quedar uno',
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
    name: 'Padre no hay más que uno',
    year: '2019',
    campolibre: 'cine Comedia Comedias película española cine español',
    sinopsis:
      'Javier es lo que se ha bautizado como un “marido-cuñado”. Ese que sin ocuparse en absoluto de lo que supone el cuidado de la casa y de los niños, sabe perfectamente qué es lo que hay que hacer, y que continuamente regala a su mujer frases del tipo: “es que no te organizas”, o “no te pongas nerviosa”, ya que considera que su desbordada mujer se ahoga en un vaso de agua. Javier tendrá que enfrentarse a la realidad que supone bregar con cinco hijos (de entre cuatro y doce años) cuando su mujer decide irse de viaje y dejarle solo con ellos. La caótica situación que se produce en casa les dará, al mismo tiempo, la oportunidad de pasar más tiempo juntos y conocerse mejo',
    poster:
      'https://pics.filmaffinity.com/padre_no_hay_mas_que_uno-911130707-large.jpg',
    imagen:
      'https://www.diariobahiadecadiz.com/noticias/wp-content/uploads/2019/08/trailerpadrenohay-1-750x430.jpg ',
    video: '//ok.ru/videoembed/1442452933218',
  },

  {
    name: 'Padre no hay más que uno 2',
    year: '2020',
    campolibre: 'cine Comedia Comedias película española cine español',
    sinopsis:
      'Después de que Javier (Santiago Segura), padre de cinco hijos, haya vivido y superado la experiencia de enfrentarse a la caótica realidad que supone quedarse solo con ellos y poner en práctica la conciliación familiar, las cosas parecen ir sobre ruedas. Claro que que una inesperada noticia lo va a poner todo patas arriba… Nada menos que la llegada de la suegra (Loles León), que supondrá un nuevo reto familiar',
    poster:
      'https://www.antena3.com/newa3flash/modulos_blancos/atresmedia_cine/Padre_no_hay_mas_Que_uno_2.png',
    imagen:
      'https://s.yimg.com/ny/api/res/1.2/St4AOGgp9bhP_r6sBIs_Xg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTMxOQ--/https://s.yimg.com/uu/api/res/1.2/PpbWzzzSIpH7d4ld8SL9CA--~B/aD01Mzc7dz0xMDc2O2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/es/fotogramas_81/0af852b6a990e624df3e437914b9a7b5',
    video: '//ok.ru/videoembed/1644501928509',
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
    campolibre: 'cine comedia españolas romance ocho apellidos vascos',
    sinopsis:
      'Rafa (Dani Rovira) es un joven señorito andaluz que no ha tenido que salir jamás de su Sevilla natal para conseguir lo único que le importa en la vida: el fino, la gomina, el Betis y las mujeres. Todo cambia cuando conoce una mujer que se resiste a sus encantos: es Amaia (Clara Lago), una chica vasca. Decidido a conquistarla, se traslada a un pueblo de las Vascongadas, donde se hace pasar por vasco para vencer su resistencia. Adopta el nombre de Antxon y varios apellidos vascos: Arguiñano, Igartiburu, Erentxun, Gabilondo, Urdangarín, Otegi, Zubizarreta... y Clemente.',
    poster:
      'https://pics.filmaffinity.com/Ocho_apellidos_vascos-836127633-large.jpg',
    imagen: 'https://img.ecartelera.com/noticias/fotos/34100/34161/1.jpg',
    video: '//ok.ru/videoembed/37509991020',
  },
  {
    name: '8 Apellidos Catalanes',
    year: '2014',
    campolibre:
      'cine comedia españolas romance ocho apellidos vascos catalanes',
    sinopsis:
      'Las alarmas de Koldo se encienden cuando se entera de que su hija Amaia, tras romper con Rafa, se ha enamorado del catalán Pau y, ante tal "sacrilegio", cruza la frontera de Euskadi y pone rumbo a Sevilla para convencer a Rafa de que deben viajar a Cataluña al precio que sea. El objetivo es rescatarla de los brazos del joven y de su entorno.',
    poster:
      'https://cineuropa.org/Galleries/299/502/poster1_es_big.jpg?1444991511929',
    imagen:
      'https://cadenaser.com/resizer/iib0jvGCnMsb3iwh4M5QdfWngUQ=/1200x675/filters:format(jpg):quality(70)/cloudfront-eu-central-1.images.arcpublishing.com/prisaradio/GERYQEXIIVNMVBQFHKOPBN36PI.jpg',
    video: (src = '//ok.ru/videoembed/78761888414'),
  },

  {
    name: ' La presentación del proyecto Web en PDF ',
    year: '2022',
    campolibre:
      'recurso como se hizo presentación del proyecto web archivos pdf archivo pdf documento pdf documentos pdf  proyectos web html css javascript Eduardo Cabrera git github documento documentos slack mi primer proyecto recursos para estudiantes general assembly',
    sinopsis:
      ' primer proyecto web css html y javascript para General Assembly. Por Eduardo Cabrera Blázquez. 3 días con Susana es un buscador de medios para videos, documentos, imagenes o paginas web.',
    poster: '/imagenes/portada_edu.jpg',
    imagen: '/imagenes/portada_edu_ga.png',
    video: '/documentos/proyecto_con_susana.pdf',
  },

  {
    name: 'Las Grabaciones de clases de general Assembly',
    year: '2022',
    campolibre:
      'recurso recursos las grabaciones de clases de html css  videos pedro martín Álex Gabriel recursos para estudiantes general assembly grids flex selectores ',
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
      ' https://pages.git.generalassemb.ly/fewd-es/01-perfiles/eduardo-cabrera/',
  },
  {
    name: ' Como se hizo (demostración por teclado)',
    year: '2022',
    campolibre:
      'recurso web proyecto web reconocimiento de voz reconocimiento por teclado busquedas por teclado html css como se hizo  videos  recursos para estudiantes general assembly grids flex selectores cancelación de ruido ',
    sinopsis:
      'Video tutorial del funcionamiento de mi aplicación 3 días con susana con reconocimiento por voz',
    poster: '/imagenes/poster-tutorial001.png',
    imagen: '/imagenes/imagen-tutorial001.png',
    video: '/videos/tutorial001.webm',
  },
  {
    name: ' Como se hizo (reconocimiento por voz)',
    year: '2022',
    campolibre:
      'recurso web proyecto web reconocimiento de voz html css como se hizo  videos  recursos para estudiantes general assembly grids flex selectores cancelación de ruido ',
    sinopsis:
      'Video tutorial del funcionamiento de mi aplicación 3 días con susana con reconocimiento por voz',
    poster: '/imagenes/microfono-poster.png',
    imagen: '/imagenes/imagen-microfono.png',
    video: '/videos/microfono.webm',
  },
  {
    name: ' Dame tu opinión',
    year: '2022',
    campolibre:
      'recurso html css como se hizo  videos recursos para estudiantes general assembly grids flex selectores cancelación de ruido encuesta encuestas',
    sinopsis: ' P U L S A  P A R A  I R  A L  R E C U R S O',
    poster: '/imagenes/portada_edu.jpg',
    imagen:
      'https://img.blogs.es/anexom/wp-content/uploads/2021/03/como-realizar-formularios-de-google.jpg',
    video:
      'https://docs.google.com/forms/d/e/1FAIpQLSfVlynOBUFV2ViqqykFdi7Lcj5ARBcCSazIY_Gi5SyaeNPqCQ/viewform?usp=sf_link',
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
      'recursos PDF beca Adecco contrato Adecco PDF general assembly PDF Fundación adecco pdf archivos pdf archivo pdf documento pdf documentos pdf',
    sinopsis:
      ' PDF Contrato y aceptación beca Adecco. Curso Web development general assembly.',
    poster: '/imagenes/adecco_invierte.png',
    imagen:
      'https://www.telemadrid.es/2022/01/28/programas/madrid-trabaja/Fundacion-Adecco-formacion-colectivos-vulnerables_2418668129_30492542_1300x731.png',
    video: '/documentos/beca_adecco.pdf',
  },
  {
    name: 'Asistencia de personal del 9 de diciembre',
    year: '2021',
    campolibre:
      'recursos excel archivo documento documentos google drive asistencias iforme de asistencias informes de asistencia archivos excel Bovis Proyect management archivo excel archivos excel',
    sinopsis:
      ' Asistencia de personal del 9 de diciembre. Enviado a gerencia, a la propiedad y al departamento de prevención de riesgos laborales',
    poster: '/imagenes/portada_excel.png',
    imagen: '/imagenes/imagen_excel.jpg',
    video:
      'https://docs.google.com/spreadsheets/d/1KhBs59ZE4-PwD2AjlLDCD_Au_7TRZnB2/edit?usp=sharing&ouid=110552365265668306985&rtpof=true&sd=true',
  },
];

// variables usadas en la función que filtra los recursos
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
														</li>		
                          </div>`;
      
      idsegundocard = pelicula.video + '-';
      list.innerHTML += `	<div id=${idsegundocard}  style="display:none">
														<li class="card-anexo">
                              <p> ${pelicula.name} </p>
                              <textarea> ${pelicula.sinopsis} </textarea>
														  <img id=${pelicula.video} onclick="prueba(this.id)"src=${pelicula.imagen} alt="beach" class="card-image-anexo">
                              <h3 class="card-title">${pelicula.name}</h3>
														</li>		
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
toggleAudio.checked = false;

function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute('data-theme', 'dark');
    const u = new SpeechSynthesisUtterance();
    u.text = 'Activando modo oscuro';
    u.lang = 'es-CO';
    u.voice = speechSynthesis.getVoices()[0];
    if (spech === 'si') {
      annyang.abort();
      setTimeout(function () {
         speechSynthesis.speak(u);
      }, 1000);
     
      if (microfono == true) {
        setTimeout(function () {
          start();
        }, 2000);
      }
    }
    
    video.setAttribute('src', './videos/Car.mp4');
   
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    const u = new SpeechSynthesisUtterance();
    u.text = 'Activando modo claro';
    u.lang = 'es-CO';
    u.voice = speechSynthesis.getVoices()[0];
    if (spech === 'si') {
      annyang.abort();
      setTimeout(function () {
         speechSynthesis.speak(u);
      }, 1000);
     
      if (microfono == true) {
        setTimeout(function () {
          start();
        }, 2000);
      }
    }
    
    video.setAttribute('src', './videos/Clouds.mp4');
  
   
  }
}

function switchSpech(e) {
  if (e.target.checked) {
  const u = new SpeechSynthesisUtterance();
  u.text = 'narrador no funcionará en esta version';
  u.lang = 'es-CO';
  u.voice = speechSynthesis.getVoices()[0];
  speechSynthesis.speak(u);
  spech = "si";
  document.getElementById('mensajes').innerText ='Narrador activado';

  
  } else {
    const u = new SpeechSynthesisUtterance();
    u.text = 'narrador desactivado'
    u.lang = 'es-CO';
    u.voice = speechSynthesis.getVoices()[0];
    speechSynthesis.speak(u);
    spech = "no";
    document.getElementById('mensajes').innerText = 'Narrador desactivado';
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
  document.getElementById('search-bar').value = '';
  
  
  const u = new SpeechSynthesisUtterance();
  u.text = 'has pedido '+xx;
  u.lang = 'es-CO';
  u.voice = speechSynthesis.getVoices()[0];
  u.text=""

 if (spech === 'si') {
     
      setTimeout(function () {
         speechSynthesis.speak(u);
      }, 1000);
     
      if (microfono == true) {
        setTimeout(function () {
          start();
        }, 4000);
      }
    }
  

  document.getElementById('search-bar').value=""
  searchBar.focus();
  
}


