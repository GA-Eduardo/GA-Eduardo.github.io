// este archivo controla
document.addEventListener('DOMContentLoaded', function () {
  if (!annyang) {
    reconocimientoVoz=false
     
     document.getElementById('mensajes').innerText =
      'tu navegador no permite el reconocimiento de voz';
      window.scrollTo(0, 0);
  }
  const microfono = false;

  const $comandosReconocidos = document.querySelector('#search-bar'),
    $vozDetectada = document.querySelector('#search-bar');

  const loguearComandoReconocido = (contenido) => {
    $comandosReconocidos.value += contenido;
  };

  const loguearVozDetectada = (contenido) => {
    $vozDetectada.value += contenido;
  };
  annyang.setLanguage('es-ES');
  let comandos = {
    hola: () => {
      document.getElementById('search-bar').value = '';

      loguearComandoReconocido(`Para aprender más, puedes decir ayuda`);
      leerComando(
        'como estás? Soy tu asistente para buscar recursos.Puedes decir ayuda',
      );
    },
    Comando: () => {
      document.getElementById('search-bar').value = '';
      loguearComandoReconocido(`Hola-Limpiar-Ayuda-Ver ahora, mostrar y volver`);
      leerComando(
        'Dispones de estos comandos de voz: hola, LIMPIAR, ayuda, ver ahora, mostrar y volver. Puedes continuar diciendo, ayuda',
      );
    },
    Comandos: () => {
      document.getElementById('search-bar').value = '';
      loguearComandoReconocido(        `Hola-Limpiar-Ayuda-Ver ahora, mostrar y volver` );
      leerComando(  'Dispones de estos comandos de voz: hola, LIMPIAR, ayuda, ver ahora, mostrar y volver. Puedes continuar diciendo, ayuda',
      );
    },
    Ayuda: () => {
      document.getElementById('search-bar').value = '';
      loguearComandoReconocido(`busca por nombre, o por alguna palabra clave`);
      leerComando(
        'Puedes dictar alguna palabra clave del título, el género o el año del estreno',
      );
    },
    Limpiar: () => {
       document.getElementById('frame').style.display = 'none';
    
     
    },
    Todo: () => {
       document.getElementById('frame').style.display = 'none';
     
      
    },
    
  };

  annyang.addCommands(comandos);

  annyang.addCallback('result', (frases) => {
    let frasehablada = frases[0]
   
    
  
    document.getElementById('search-bar').value = frasehablada.trim();
   annyang.abort()
    leer();
   
  
   
  });

  const leer = () => {
    
   
    const u = new SpeechSynthesisUtterance();
    u.text = 'he oído ' + document.getElementById('search-bar').value;
   
    u.lang = 'es-CO';

    u.voice = speechSynthesis.getVoices()[0];

     
    if (spech === 'si') {
      
        speechSynthesis.speak(u);
        
    }
         
      searchBar = document.getElementById('search-bar');
      comentario2 = 'reset';
    contador = 0;
    filter()
    searchBar=""
   start()
     
     
   
    
  };
 
});

function start() {
  annyang.setLanguage('es-CO');
  annyang.start();
}

var miCheckbox = document.getElementById('micButton');
miCheckbox.addEventListener('click', function () {
  if (miCheckbox.checked) {
    document.getElementById('modoaudio').checked = true;
    spech="si"
    const u = new SpeechSynthesisUtterance();
    if (reconocimientoVoz) {
    
      u.text = 'Soy Susana. Díme hola';
      microfono = true;
      annyang.abort()
    } else {
      u.text = 'Tu navegador no permite el reconocimiento de voz';
      miCheckbox.checked = false
     
 
      
    }
   
   
    u.lang = 'es-CO';

    u.voice = speechSynthesis.getVoices()[0];
    
   if (spech === 'si') {
     setTimeout(function () {
       speechSynthesis.speak(u);
       u.text = ""
       searchBar=""
     }, 1000);
   }
   
        
    document.getElementById('search-bar').value = '';
    searchBar.value = '';
      setTimeout(function () {
        start();
        u.text = '';
      }, 1000);
   
    
    
  } else {
    annyang.abort();
    searchBar.value = '';
    filter();
    const u = new SpeechSynthesisUtterance();
    u.text = 'has cancelado el micrófono. Se mostrará todo el catálogo. El narrador sigue activo';
    microfono = false;
    u.lang = 'es-CO';

    u.voice = speechSynthesis.getVoices()[0];

    if (spech === 'si') {
      setTimeout(function () {
        speechSynthesis.speak(u);
      
      }, 2000);;
  }
  }
});

const leerComando = (mensaje) => {
 annyang.abort()
 
  const u = new SpeechSynthesisUtterance();
  u.text = mensaje;
  
  u.lang = 'es-CO';

 

  if (spech === 'si') {
      setTimeout(function () {
        speechSynthesis.speak(u);
      
      }, 2000);;
  }
  
  searchBar = mensaje;
  comentario = '';
  comentario2 = '';
  document.getElementById('search-bar').value = "";
  searchBar.value = ""
 
    setTimeout(function () {
      start();
      u.text=""
    }, 7000);
  
  
  document.getElementById('mensajes').innerText =
  'TE ESTOY RESPONDIENDO, SUBE EL VOLUMEN';
};
