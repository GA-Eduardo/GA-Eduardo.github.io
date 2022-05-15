function edulearningbusqueda(textoabuscar) {
  
  frasehablada = textoabuscar
  
  
  if (frasehablada.includes('quiero ver')) {
    frasehablada = frasehablada.replace('quiero', '  ');
    document.getElementById('search-bar').value = frasehablada.trim();
    filter();
  }
   if (frasehablada.includes('todo')) {
    frasehablada = frasehablada.replace('todo', '  ');
    document.getElementById('search-bar').value = frasehablada.trim();
    filter();
  }
  if (frasehablada.includes('todas las')) {
    frasehablada = frasehablada.replace('todas las', '  ');
    document.getElementById('search-bar').value = frasehablada.trim();
    filter();
  }
  if (frasehablada.includes('ver')) {
    frasehablada = frasehablada.replace('ver', '  ');
    document.getElementById('search-bar').value = frasehablada.trim();
    filter();
  }
  if (frasehablada.includes('todos')) {
    frasehablada = frasehablada.replace('todos', '  ');
    document.getElementById('search-bar').value = frasehablada.trim();
    filter();
  }
  if (frasehablada.includes('quiero')) {
    frasehablada = frasehablada.replace('quiero', '  ');
    document.getElementById('search-bar').value = frasehablada.trim();
    filter();
  }
 
  if (frasehablada.includes('año')) {
    frasehablada = frasehablada.replace('año', '  ');
    document.getElementById('search-bar').value = frasehablada.trim();
    filter();
  }
  if (frasehablada.includes('años')) {
    frasehablada = frasehablada.replace('años', '  ');
    document.getElementById('search-bar').value = frasehablada.trim();
    filter();
  }
  if (frasehablada.includes('género')) {
    frasehablada = frasehablada.replace('género', '  ');
    document.getElementById('search-bar').value = frasehablada.trim();
    filter();
  }

  if (frasehablada.includes('películas')) {
    frasehablada = frasehablada.replace('películas', '  ');
    document.getElementById('search-bar').value = frasehablada.trim();
    filter();
  }

  if (frasehablada.includes('película')) {
    frasehablada = frasehablada.replace('película', '  ');
    document.getElementById('search-bar').value = frasehablada.trim();
    filter();
  }
  
  if (frasehablada.includes('hola')) {
    frasehablada = frasehablada.replace('hola', '  ');
    document.getElementById('search-bar').value = frasehablada.trim();
    filter();
  }
  if (frasehablada.includes('la')) {
    frasehablada = frasehablada.replace('la', '  ');
    document.getElementById('search-bar').value = frasehablada.trim();
    filter();
  }
  if (frasehablada.includes('del')) {
    frasehablada = frasehablada.replace('del', '  ');
    document.getElementById('search-bar').value = frasehablada.trim();
    filter();
  }
  if (frasehablada.includes('de')) {
    frasehablada = frasehablada.replace('de', '  ');
    document.getElementById('search-bar').value = frasehablada.trim();
    filter();
  }
  if (frasehablada.includes('los')) {
    frasehablada = frasehablada.replace('los', '  ');
    document.getElementById('search-bar').value = frasehablada.trim();
    filter();
  }
  if (frasehablada.includes('lo')) {
    frasehablada = frasehablada.replace('lo', '  ');
    document.getElementById('search-bar').value = frasehablada.trim();
    filter();
  }
  if (frasehablada.includes('las')) {
    frasehablada = frasehablada.replace('las', '  ');
    document.getElementById('search-bar').value = frasehablada.trim();
    filter();
  }
  if (frasehablada.includes('la')) {
    frasehablada = frasehablada.replace('la', '  ');
    document.getElementById('search-bar').value = frasehablada.trim();
    filter();
  }
      
  let cadenas = frasehablada.split(' ');
  for (index in cadenas) {
    frasehablada = cadenas[index];
    document.getElementById('search-bar').value = frasehablada.trim();
    filter();
    
  }
 
  
}

 
