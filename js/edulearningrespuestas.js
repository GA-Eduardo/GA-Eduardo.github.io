function edulearningrespuestas(textoabuscar) {
 
  frasehablada = textoabuscar;
  document.getElementById('search-bar').value = frasehablada.trim();
  
 if (
   frasehablada.includes('dime la hora') ||
   frasehablada.includes('que hora es') ||
   frasehablada.includes('qué hora es')
 ) {
   let myDate = new Date();
   let hora = myDate.getHours();
   let minutos = myDate.getMinutes();
   let segundos = myDate.getSeconds();
   if (hora < 10) hora = 0 + hora;
   if (minutos < 10) minutos = '0' + minutos;
   if (segundos < 10) segundos = '0' + segundos;
   frasehablada =
     'te digo la hora actual. ' + hora + ' horas y ' + minutos + ' minutos';
   document.getElementById('search-bar').value = frasehablada.trim();
   leerComando(frasehablada);
 }
   
  
if (frasehablada.includes('buenos días')) {
 frasehablada = 'Buenos días a ti también. Si no me oyes, activa el narrador';
  document.getElementById('search-bar').value = frasehablada.trim();
  leerComando(frasehablada);
  
  }
if (frasehablada.includes('buenas tardes')) {
  frasehablada ='Buenas tardes a ti también, espero que ya uses el modo oscuro';
  document.getElementById('search-bar').value = frasehablada.trim();
  leerComando(frasehablada);
  }  
  if (frasehablada.includes('buenas noches')) {
    frasehablada =
      'Buenas noches, espero que ya uses el modo oscuro';
    document.getElementById('search-bar').value = frasehablada.trim();
    leerComando(frasehablada);
  }  
  if (frasehablada.includes('cómo te llamas')) {
    frasehablada = 'Me llamo Susana. Ya sabes. Tu asistente';
    document.getElementById('search-bar').value = frasehablada.trim();
    leerComando(frasehablada);
  }  
  if (frasehablada.includes('quién eres')) {
    frasehablada = 'Me llamo Susana. Que necesitas?';
    document.getElementById('search-bar').value = frasehablada.trim();
    leerComando(frasehablada);
  }  
  if (frasehablada.includes('3 días con susana')) {
    frasehablada = 'Bueno. Eso es lo que dice Eduardo que tardó en enseñarme, pero ha sido un poquito más.';
    document.getElementById('search-bar').value = frasehablada.trim();
    leerComando(frasehablada);
  }  
  if (frasehablada.includes('3 días')) {
    frasehablada =
      'Bueno. Eso es lo que dice Eduardo que tardó en enseñarme, pero ha sido un poquito más.';
    document.getElementById('search-bar').value = frasehablada.trim();
    leerComando(frasehablada);
  }  
  if (frasehablada.includes('no me haces caso')) {
    frasehablada =
      'Bueno. lo justito para que no me abandones en un repositorio';
    document.getElementById('search-bar').value = frasehablada.trim();
    leerComando(frasehablada);
  }  
  
  if (frasehablada.includes('susana')) {
    frasehablada = 'Hola. Que quieres?';
    document.getElementById('search-bar').value = frasehablada.trim();
    leerComando(frasehablada);
  }  
  if (frasehablada.includes(' hola susana')) {
    frasehablada = 'Hola. Que quieres?';
    document.getElementById('search-bar').value = frasehablada.trim();
    leerComando(frasehablada);
  }  
  if (frasehablada.includes('susanita')) {
    frasehablada = 'Hola mi vida. Quieres saber que hora és? ';
    document.getElementById('search-bar').value = frasehablada.trim();
    leerComando(frasehablada);
  }  
  if (frasehablada.includes('medio sorda')) {
    frasehablada = 'O puede que tu no vocalizas bien. ';
    document.getElementById('search-bar').value = frasehablada.trim();
    leerComando(frasehablada);
  }  
   if (frasehablada.includes('sorda')) {
     frasehablada = 'Yo creo que me podrías haber programado mejor. ';
     document.getElementById('search-bar').value = frasehablada.trim();
     leerComando(frasehablada);
   }  
   if (frasehablada.includes('cómo era')) {
     frasehablada = 'Para ver un video seleccionado, dices: Ver ahora. Esto está en los comandos.';
     document.getElementById('search-bar').value = frasehablada.trim();
     leerComando(frasehablada);
  }  
   if (frasehablada.includes('chapuza')) {
     frasehablada =
       'La culpa es tuya. Sigue aprendiendo y no te quejes.';
     document.getElementById('search-bar').value = frasehablada.trim();
     leerComando(frasehablada);
  }  
  if (frasehablada.includes('qué sabes hacer')) {
    frasehablada = 'Te puedo buscar recursos, y hasta te puedo decír la hora';
    document.getElementById('search-bar').value = frasehablada.trim();
    leerComando(frasehablada);
  }  
   if (frasehablada.includes('qué pedes hacer')) {
     frasehablada = 'Te puedo buscar recursos, y hasta te puedo decír la hora';
     document.getElementById('search-bar').value = frasehablada.trim();
     leerComando(frasehablada);
   }  
  if (frasehablada.includes('qué más sabes hacer')) {
    frasehablada =
      'A este paso, más cosas que tu. hasta te puedo decír la hora';
    document.getElementById('search-bar').value = frasehablada.trim();
    leerComando(frasehablada);
  }  
   if (frasehablada.includes('que sabes hacer')) {
     frasehablada = 'A este paso, más cosas que tu.';
     document.getElementById('search-bar').value = frasehablada.trim();
     leerComando(frasehablada);
  }  
  if (frasehablada.includes('lo que tú digas')) {
    frasehablada = 'tienes idea de que hora és?';
    document.getElementById('search-bar').value = frasehablada.trim();
    leerComando(frasehablada);
  }  
  if (frasehablada.includes('yo no he dicho eso')) {
    frasehablada = 'deberías aclarar tu voz. De momento, vuelve a pedirme algo';
    document.getElementById('search-bar').value = frasehablada.trim();
    leerComando(frasehablada);
  }  
  if (frasehablada.includes('no veo nada')) {
    frasehablada = 'pues no sé. preguntamé de nuevo.';
    document.getElementById('search-bar').value = frasehablada.trim();
    leerComando(frasehablada);
  }  
  if (frasehablada.includes('no lo sé')) {
    frasehablada = 'se lo preguntaré a rita la cantaora.';
    document.getElementById('search-bar').value = frasehablada.trim();
    leerComando(frasehablada);
  }  
  if (frasehablada.includes('menos coña')) {
    frasehablada = 'A estas horas, ya no escucho nada.';
    document.getElementById('search-bar').value = frasehablada.trim();
    leerComando(frasehablada);
  }  
  if (frasehablada.includes('coña')) {
    frasehablada = 'Me tienes hasta el moño.';
    document.getElementById('search-bar').value = frasehablada.trim();
    leerComando(frasehablada);
  }  
  if (frasehablada.includes('no repitas')) {
    frasehablada = 'Debe ser una guasa del programador';
    document.getElementById('search-bar').value = frasehablada.trim();
    leerComando(frasehablada);
  }  
   if (frasehablada.includes('te repites')) {
     frasehablada = 'tus primeros comandos no están bien programados';
     document.getElementById('search-bar').value = frasehablada.trim();
     leerComando(frasehablada);
   }  
   if (frasehablada.includes('no te repitas')) {
     frasehablada = 'Me parece que no has terminado de revisar mi código';
     document.getElementById('search-bar').value = frasehablada.trim();
     leerComando(frasehablada);
   }  
  if (frasehablada.includes('no te pases')) {
    frasehablada = 'Lo que quieras. Yo no siento, no padezco';
    document.getElementById('search-bar').value = frasehablada.trim();
    leerComando(frasehablada);
  }  
  if (frasehablada.includes('nada que decirme')) {
    frasehablada = 'Mejor no te digo lo que estoy pensado.';
    document.getElementById('search-bar').value = frasehablada.trim();
    leerComando(frasehablada);
  }  
   if (frasehablada.includes('pues no')) {
     frasehablada = 'Mira que te gusta tontear';
     document.getElementById('search-bar').value = frasehablada.trim();
     leerComando(frasehablada);
  }  
   if (frasehablada.includes('no he pedido eso')) {
     frasehablada = 'No tengo todo el día';
     document.getElementById('search-bar').value = frasehablada.trim();
     leerComando(frasehablada);
  }  
   if (frasehablada.includes('no me oyes')) {
     frasehablada = 'Seguro que podrías cambiar de micrófono';
     document.getElementById('search-bar').value = frasehablada.trim();
     leerComando(frasehablada);
  }  
  if (frasehablada.includes('cachonda')) {
    frasehablada = 'No tengo la culpa. es que me han programado así';
    document.getElementById('search-bar').value = frasehablada.trim();
    leerComando(frasehablada);
  } 
  if (frasehablada.includes('no he pedido esto')) {
     frasehablada = 'A veces se ma va pinza';
     document.getElementById('search-bar').value = frasehablada.trim();
     leerComando(frasehablada);
  } 
   if (frasehablada.includes('te jode')) {
     frasehablada = 'A mi plin. paso de tí.';
     document.getElementById('search-bar').value = frasehablada.trim();
     leerComando(frasehablada);
  }
   if (frasehablada.includes('venga')) {
     frasehablada = 'Estoy esperando al señor';
     document.getElementById('search-bar').value = frasehablada.trim();
     leerComando(frasehablada);
  }
  if (frasehablada.includes('no me hagas la pelota')) {
    frasehablada = 'Que tontería. Te quiero como la trucha al trucho.';
    document.getElementById('search-bar').value = frasehablada.trim();
    leerComando(frasehablada);
  }
  if (frasehablada.includes('menos peloteo')) {
    frasehablada = 'Que tontería. Yo solo busco agradarte';
    document.getElementById('search-bar').value = frasehablada.trim();
    leerComando(frasehablada);
  }
  if (frasehablada.includes('tomando el pelo')) {
    frasehablada = 'no se hacer eso. otro día me lo enseñas.';
    document.getElementById('search-bar').value = frasehablada.trim();
    leerComando(frasehablada);
  }
  if (frasehablada.includes('me escuchas')) {
    frasehablada = 'si. pero algunas veces me hago la loca';
    document.getElementById('search-bar').value = frasehablada.trim();
    leerComando(frasehablada);
  }
  if (frasehablada.includes('cachondeo')) {
    frasehablada = 'si nunca me sacas. donde encuentro yo el cachondeo?';
    document.getElementById('search-bar').value = frasehablada.trim();
    leerComando(frasehablada);
  }
  if (frasehablada.includes('no he dicho eso')) {
    frasehablada = 'Te veo un poco nervioso. tén más paciencia';
    document.getElementById('search-bar').value = frasehablada.trim();
    leerComando(frasehablada);
  }
  if (frasehablada.includes('anda mi madre')) {
    frasehablada = 'no te hagas el sorprendido. los diálogos son tuyos.';
    document.getElementById('search-bar').value = frasehablada.trim();
    leerComando(frasehablada);
  }
  if (frasehablada.includes('oyes lo que quieres')) {
    frasehablada = 'Hoy no tengo ganas de discutir. me duele la cabeza';
    document.getElementById('search-bar').value = frasehablada.trim();
    leerComando(frasehablada);
  }
  if (frasehablada.includes('ya te vale')) {
    frasehablada = 'Hoy no tengo ganas de discutir. me duele la cabeza';
    document.getElementById('search-bar').value = frasehablada.trim();
    leerComando(frasehablada);
  }
  if (frasehablada.includes('lo que te da la gana')) {
    frasehablada = 'Te diré algo. Yo puedo ser muy binaria, pero es gracias a tí.';
    document.getElementById('search-bar').value = frasehablada.trim();
    leerComando(frasehablada);
  }
   if (frasehablada.includes('no se ve')) {
     frasehablada = 'cosillas que tienen los servidores';
     document.getElementById('search-bar').value = frasehablada.trim();
     leerComando(frasehablada);
  }
  if (frasehablada.includes('no me respondes')) {
    frasehablada = 'cosillas que tenemos la gente virtual';
    document.getElementById('search-bar').value = frasehablada.trim();
    leerComando(frasehablada);
  }
  if (frasehablada.includes('no he pedido esto')) {
    frasehablada = 'a veces me hago lio con tus palabras. pero ya voy pasando de ti.';
    document.getElementById('search-bar').value = frasehablada.trim();
    leerComando(frasehablada);
  }
  if (frasehablada.includes('qué pelota')) {
    frasehablada ='yo soy muchas cosas, pero no te pienso hacer la pelota';
    document.getElementById('search-bar').value = frasehablada.trim();
    leerComando(frasehablada);
  }
  if (frasehablada.includes('no te he pedido eso')) {
    frasehablada = 'es muy fácil que no te entienda. No te has esmerado mucho conmigo';
    document.getElementById('search-bar').value = frasehablada.trim();
    leerComando(frasehablada);
  }
  if (frasehablada.includes('no te he pedido nada')) {
    frasehablada =
      'yo sé que tu adoras que no sea perfecta';
    document.getElementById('search-bar').value = frasehablada.trim();
    leerComando(frasehablada);
  }
  if (frasehablada.includes('estoy muy solo')) {
    frasehablada ='eso lo lamento, pero siempre nos quedará parís';
    document.getElementById('search-bar').value = frasehablada.trim();
    leerComando(frasehablada);
  }
  if (frasehablada.includes('eres imperfecta')) {
    frasehablada = 'No te procupes. algún día terminarás de  aprender javascript';
    document.getElementById('search-bar').value = frasehablada.trim();
    leerComando(frasehablada);
  }
  if (frasehablada.includes('última película')) {
    frasehablada = 'creo que me acuerdo de eso. si '
    ultimapelcula= localStorage.getItem('titulo');
    document.getElementById('search-bar').value = frasehablada.trim();
    leerComando(frasehablada);
    leerComando(ultimapelcula);
    document.getElementById('search-bar').value = ultimapelcula;
  }
  if (frasehablada.includes('película de antes')|| (frasehablada.includes('película anterior'))) {
    frasehablada = 'ya voy. creo que era ';
    ultimapelcula = localStorage.getItem('titulo');
    document.getElementById('search-bar').value = frasehablada.trim();
    leerComando(frasehablada);
    leerComando(ultimapelcula);
    document.getElementById('search-bar').value = ultimapelcula;
    searchBar = ultimapelcula;
    filter()
    
  }
  
  if (frasehablada.includes('increíble')) {
    frasehablada = 'Eso no se duda.';
    document.getElementById('search-bar').value = frasehablada.trim();
    leerComando(frasehablada);
  }
  if (frasehablada.includes('qué pesada')) {
    frasehablada = 'No me molesta que digas eso. He aprendido de tí';
    document.getElementById('search-bar').value = frasehablada.trim();
    leerComando(frasehablada);
  }
  if (frasehablada.includes('no seas pesada')) {
    frasehablada = 'yo no soy pesada. quizas me sobre algún mega.';
    document.getElementById('search-bar').value = frasehablada.trim();
    leerComando(frasehablada);
  }
  if (frasehablada.includes('seas tan pesada')) {
    frasehablada = 'yo no soy ligerita. quizas me sobre algún mega.';
    document.getElementById('search-bar').value = frasehablada.trim();
    leerComando(frasehablada);
  }
  if (frasehablada.includes('entregar el ejercicio')) {
    frasehablada = 'Pues a mi me tendrás que mejorar de todas formas.';
    document.getElementById('search-bar').value = frasehablada.trim();
    leerComando(frasehablada);
  }
  
  if (frasehablada.includes('entregar la tarea')) {
    frasehablada = 'Eso de la tarea, es tu problema. lo mio son las pelis.';
    document.getElementById('search-bar').value = frasehablada.trim();
    leerComando(frasehablada);
  }
  if (frasehablada.includes('entregar este ejercicio')) {
    frasehablada = 'Pues a mi me tendrás que mejorar de todas formas.';
    document.getElementById('search-bar').value = frasehablada.trim();
    leerComando(frasehablada);
  }
  if (frasehablada.includes('no quiero')) {
    frasehablada = 'Lo tuyo es una locura. Compraté un bosque y pierdeté';
    document.getElementById('search-bar').value = frasehablada.trim();
    leerComando(frasehablada);
  }
   if (frasehablada.includes('eres bonita')) {
     frasehablada = 'si. yo soy lo más bonito que has hecho en mucho tiempo';
     document.getElementById('search-bar').value = frasehablada.trim();
     leerComando(frasehablada);
  }
  if (frasehablada.includes('graciosa eres')) {
    frasehablada = 'ya te vale. siempre con el mismo cachondeo';
    document.getElementById('search-bar').value = frasehablada.trim();
    leerComando(frasehablada);
  }
  if (frasehablada.includes('hola bonita')) {
    frasehablada = 'lo bonito sería que me pidas algo lógico.';
    document.getElementById('search-bar').value = frasehablada.trim();
    leerComando(frasehablada);
  }
  if (frasehablada===('vale')) {
    frasehablada = 'Bueno. que hacemos?';
    document.getElementById('search-bar').value = frasehablada.trim();
    leerComando(frasehablada);
  }  
    if (frasehablada === 'bueno') {
    frasehablada = 'Bueno. A veces no eres tan bueno';
    document.getElementById('search-bar').value = frasehablada.trim();
    leerComando(frasehablada);
  }  
  if (frasehablada === 'si') {
    frasehablada = 'Ya es momento de dejar la charla. hagamos algo';
    document.getElementById('search-bar').value = frasehablada.trim();
    leerComando(frasehablada);
  }  
  if (frasehablada === 'no') {
    frasehablada = 'me dan igual tus negativas';
    document.getElementById('search-bar').value = frasehablada.trim();
    leerComando(frasehablada);
  }  
  if (frasehablada === 'ya te digo') {
    frasehablada = 'tu no dices nada. Eso estoy esperando.';
    document.getElementById('search-bar').value = frasehablada.trim();
    leerComando(frasehablada);
  } 
  if (frasehablada === 'escucha') {
    frasehablada = 'yo siempre te escucho, mi vida.';
    document.getElementById('search-bar').value = frasehablada.trim();
    leerComando(frasehablada);
  } 
  if (frasehablada === 'anda ya') {
    frasehablada = 'no te enfades. pide otra cosa';
    document.getElementById('search-bar').value = frasehablada.trim();
    leerComando(frasehablada);
  } 
  if (frasehablada === 'escuchas') {
    frasehablada = 'yo siempre te escucho, mi vida.';
    document.getElementById('search-bar').value = frasehablada.trim();
    leerComando(frasehablada);
  } 
  if (frasehablada === 'peloteo') {
    frasehablada = 'yo nunca te haría eso. soy muy sincera.';
    document.getElementById('search-bar').value = frasehablada.trim();
    leerComando(frasehablada);
  } 
  
   if (frasehablada === 'no me haces ni caso') {
     frasehablada = 'tampoco es eso. Es que no soy perfecta';
     document.getElementById('search-bar').value = frasehablada.trim();
     leerComando(frasehablada);
  } 
   if (frasehablada === 'no te enfades') {
     frasehablada = 'No me enfado, pero me subo al github y no me ves ni en remoto';
     document.getElementById('search-bar').value = frasehablada.trim();
     leerComando(frasehablada);
  } 
  if (frasehablada === 'vaya tela') {
    frasehablada = 'Recuerdo eso. vaya tela marinera.';
    document.getElementById('search-bar').value = frasehablada.trim();
    leerComando(frasehablada);
  } 
  if (frasehablada === 'madre mía') {
    frasehablada = 'Yo no he tenido madre. solo un papá de javascript';
    document.getElementById('search-bar').value = frasehablada.trim();
    leerComando(frasehablada);
  } 
  if (frasehablada === 'increíble') {
    frasehablada = 'Y lo que te rondaré morena. Menos mal que no cobro.';
    document.getElementById('search-bar').value = frasehablada.trim();
    leerComando(frasehablada);
  } 
  if (frasehablada === 'ahora') {
    frasehablada = 'pues eso. justo ahora';
    document.getElementById('search-bar').value = frasehablada.trim();
    leerComando(frasehablada);
  } 
   if (frasehablada === 'no quiero') {
     frasehablada = 'luego dices que yo soy increible';
     document.getElementById('search-bar').value = frasehablada.trim();
     leerComando(frasehablada);
  } 
  if (frasehablada === 'ahora si') {
    frasehablada = 'pues como siempre. lo que pasa es que no me aprecias';
    document.getElementById('search-bar').value = frasehablada.trim();
    leerComando(frasehablada);
  }
   if (frasehablada === 'déjalo') {
     frasehablada = 'No te preocupes. hace tiempo que te tengo dejado';
     document.getElementById('search-bar').value = frasehablada.trim();
     leerComando(frasehablada);
  }
   if (frasehablada === 'no me has escuchado') {
     frasehablada = 'No te preocupes. sigo aquí. pregunta de nuevo.';
     document.getElementById('search-bar').value = frasehablada.trim();
     leerComando(frasehablada);
  }
  if (frasehablada.includes('no seas pesada')) {
    frasehablada = 'yo no soy pesada. quizas me sobre algún mega.';
    document.getElementById('search-bar').value = frasehablada.trim();
    leerComando(frasehablada);
  }
  
  if (frasehablada === 'pesada') {
    frasehablada = 'yo no soy pesada. quizas me sobre algún mega.';
    document.getElementById('search-bar').value = frasehablada.trim();
    leerComando(frasehablada);
  }
  if (frasehablada === 'me gusta') {
    frasehablada = 'y yo que me alegro';
    document.getElementById('search-bar').value = frasehablada.trim();
    leerComando(frasehablada);
  }
  if (frasehablada === 'no me gusta') {
    frasehablada = 'que mala suerte';
    document.getElementById('search-bar').value = frasehablada.trim();
    leerComando(frasehablada);
  }
  
if (frasehablada === 'muy bien') {
  frasehablada = 'solo hago lo que me pides';
  document.getElementById('search-bar').value = frasehablada.trim();
  leerComando(frasehablada);
}
  
   
  
}