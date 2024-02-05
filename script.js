function generateUrl() {
  
    // Obtener los valores del formulario
    const language = document.querySelector('select[name="language"]').value;
    const landingPath = document.querySelector('input[name="landingPath"]').value.trim();
    const source = document.querySelector('select[name="source"]').value;
    const medium = document.querySelector('select[name="medium"]').value;
    const campaign = document.querySelector('input[name="campaign"]').value.toLowerCase();  
    const term = document.querySelector('input[name="term"]').value.toLowerCase();
    const content = document.querySelector('input[name="content"]').value.toLowerCase();

    let baseUrl = language === 'es' ? 'https://www.eliteonlinemedia.com/es/' : 'https://www.eliteonlinemedia.com/';

  // Añadir el path de la landing page si está presente
  // Añadir el path de la landing page si está presente
  if (landingPath) {
    baseUrl += landingPath + "/";
  }
  
    // Construir la URL con parámetros UTM
    let utmUrl = `${baseUrl}?utm_source=${encodeURIComponent(source)}&utm_medium=${encodeURIComponent(medium)}`;
    utmUrl += campaign ? `&utm_campaign=${encodeURIComponent(campaign)}` : '';
    utmUrl += content ? `&utm_content=${encodeURIComponent(content)}` : '';
    utmUrl += term ? `&utm_term=${encodeURIComponent(term)}` : '';

    // Mostrar la URL generada en el input
    document.getElementById('generatedUrl').value = utmUrl;
  };

// Función para copiar la URL al portapapeles
function copyToClipboard() {
    const urlField = document.getElementById('generatedUrl');
    urlField.select();
    document.execCommand('copy');
  }

  // Escuchar el evento de clic en el botón en lugar del evento de envío del formulario
document.getElementById('createUrlBtn').addEventListener('click', generateUrl);
  

  