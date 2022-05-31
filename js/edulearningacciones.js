function edulearningacciones(textoabuscar) {
 
 
  frasehablada = textoabuscar.trim();
  if (
    frasehablada === 'play vídeo' ||
    frasehablada === 'ver vídeo' ||
    frasehablada === 'ver ahora' ||
    frasehablada === 'dale al play' ||
    frasehablada === 'abrir' ||
    frasehablada === 'ahora' ||
    frasehablada === 'verla ahora' ||
    frasehablada === 'muéstrame' ||
    frasehablada === 'muéstramelo' ||
    frasehablada.includes('muéstramelo') ||
    frasehablada === 'verla ahora' ||
    frasehablada === 'mostrar'
  ) {
    if (idvideo.length > 0 && veces === 1) {
      const u = new SpeechSynthesisUtterance();
      u.text = 'Aquí lo tienes.';
      u.lang = 'es-CO';
      u.voice = speechSynthesis.getVoices()[0];
      if (spech === 'si') {
        annyang.abort();
        setTimeout(function () {
          speechSynthesis.speak(u);
           searchBar=""
        }, 1000);

        if (microfono == true) {
          setTimeout(function () {
            start();
            searchBar = '';
          }, 4000);
        }
      }
      document.getElementById('search-bar').value = '';
      searchBar.focus();
      document.getElementById('frame').style.display = 'block';
      document.getElementById('zona-ayuda').style.display = 'none';
      miarticulo.setAttribute('src', idvideo);
      window.scrollTo(0, document.body.scrollHeight);
      let mivideodentroframe =
        mivideoportada.contentWindow.document.getElementsByTagName('video')[0];
      mivideodentroframe.play();
    } else if (veces !== 1) {
      const u = new SpeechSynthesisUtterance();
      u.text = 'Primero has de encontrar tu película.';
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
      document.getElementById('search-bar').value = '';
      searchBar.focus();
    }
  }

  if (frasehablada.includes('recursos')) {
    vertodo('recursos')
  }
   if (frasehablada.includes('recurso')) {
     vertodo('recursos');
  }
  if (
    frasehablada.includes('hola susana') ||    frasehablada.includes('hola susanita')
  ) {
    document.getElementById('frame').style.display = 'none';
    const u = new SpeechSynthesisUtterance();
    u.text = 'Vamos a ver que necesitas';
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
    document.getElementById('search-bar').value = '';
    searchBar.focus();
    filter();
  }
  
   
}

