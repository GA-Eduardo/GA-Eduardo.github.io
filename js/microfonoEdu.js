
document.addEventListener('DOMContentLoaded', function () {
  if (!annyang) {
    return alert(
      'Lo siento, tu navegador no soporta el reconocimiento de voz o no esta configurado',
    );
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

      loguearComandoReconocido(`Para aprender más, dí: Comandos`);
      leerComando(
        'como estás? Soy tu asistente para buscar recursos. Ahora puedes decir comandos',
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
    leer();
   
  });

  const leer = () => {
    
    const u = new SpeechSynthesisUtterance();
    u.text = 'he oído ' + document.getElementById('search-bar').value;
   
    u.lang = 'es-CO';

    u.voice = speechSynthesis.getVoices()[0];

    if ((spech === 'si')) {speechSynthesis.speak(u); }
    searchBar = document.getElementById('search-bar');
    comentario2 = 'reset';
    contador = 0;
    filter();
    
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
    u.text = 'Soy Susana. Díme hola';
    microfono = true;
    u.lang = 'es-CO';

    u.voice = speechSynthesis.getVoices()[0];

    if ((spech === 'si')) { speechSynthesis.speak(u);
    }
    
    start();
    
    
  } else {
    annyang.abort();
    searchBar.value = '';
    filter();
    const u = new SpeechSynthesisUtterance();
    u.text = 'has cancelado el micrófono. Se mostrará todo el catálogo. El narrador sigue activo';
    microfono = false;
    u.lang = 'es-CO';

    u.voice = speechSynthesis.getVoices()[0];

    if ((spech === 'si')) {speechSynthesis.speak(u);
    }
  }
});

const leerComando = (mensaje) => {
 
  const u = new SpeechSynthesisUtterance();
  u.text = mensaje;
  
  u.lang = 'es-CO';

  u.voice = speechSynthesis.getVoices()[0];

  if (spech === 'si') {
    speechSynthesis.speak(u);
  }
  
  searchBar = mensaje;
  comentario = '';
  comentario2 = '';
  
  document.getElementById('mensajes').innerText =
  'TE ESTOY RESPONDIENDO, SUBE EL VOLUMEN';
};
