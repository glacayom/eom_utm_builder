// script.js
  
  // Capturar el evento de envío del formulario para crear la URL
  document.getElementById('utmForm').addEventListener('submit', function(event) {
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

  // Mostrar la URL generada en el input
  document.getElementById('generatedUrl').value = utmUrl;
  });

  // Función para copiar la URL al portapapeles
function copyToClipboard() {
    const urlField = document.getElementById('generatedUrl');
    urlField.select();
    document.execCommand('copy');
  }
  
  // Asegúrate de asignar la función correcta al evento de envío del formulario
  document.getElementById('utmForm').addEventListener('submit', handleFormSubmit);
  

  