// script.js
  
  // Capturar el evento de envío del formulario para crear la URL
  document.querySelector('.form-container').addEventListener('submit', function(event) {
    event.preventDefault();
    // Obtener los valores del formulario
    const language = document.querySelector('select[name="language"]').value;
    const landingPath = document.querySelector('input[name="landingPath"]').value.trim();
    const campaign = document.querySelector('input[name="campaign"]').value;  

    const campaign = document.querySelector('input[name="campaign"]').value;
    const source = document.querySelector('input[name="source"]').value;
    const medium = document.querySelector('input[name="medium"]').value;
    const content = document.querySelector('input[name="content"]').value;
    const term = document.querySelector('input[name="term"]').value;
    let baseUrl = language === 'es' ? 'https://www.eliteonlinemedia.com/es/' : 'https://www.eliteonlinemedia.com/';

    // Añadir el path de la landing page si está presente
    if (landingPath) {
        baseUrl += landingPath.startsWith('/') ? landingPath.substring(1) : landingPath;
    }    
  
    // Construir la URL con parámetros UTM
    const utmUrl = `${baseUrl}?utm_source=${encodeURIComponent(source)}&utm_medium=${encodeURIComponent(medium)}&utm_campaign=${encodeURIComponent(campaign)}${content ? '&utm_content=' + encodeURIComponent(content) : ''}${term ? '&utm_term=' + encodeURIComponent(term) : ''}`;

    // Aquí puedes hacer lo que necesites con la URL, como mostrarla al usuario o enviarla a un servidor
    console.log(utmUrl); // Muestra la URL en la consola por ahora
    alert(utmUrl); // Muestra la URL en un alerta para fines demostrativos
  });
  

  