function generateUrl() {
  
    // Obtener los valores del formulario
    const baseUrlSelection = document.querySelector('select[name="baseUrlSelection"]').value;
    const landingPath = document.querySelector('input[name="landingPath"]').value.trim();
    const source = document.querySelector('select[name="source"]').value;
    const medium = document.querySelector('select[name="medium"]').value;
    const campaign = document.querySelector('input[name="campaign"]').value.toLowerCase();  
    const term = document.querySelector('input[name="term"]').value.toLowerCase();
    const content = document.querySelector('input[name="content"]').value.toLowerCase();

    let baseUrl = baseUrlSelection;

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

function cleanLandingPath(inputValue) {
  // Eliminar protocolo (http, https)
  let path = inputValue.replace(/^https?:\/\//, '');

  // Eliminar dominio
  path = path.substring(path.indexOf('/') + 1);

  // Eliminar slash inicial si existe
  if (path.startsWith('/')) {
    path = path.substring(1);
  }

  // Eliminar slash final si existe
  if (path.endsWith('/')) {
    path = path.slice(0, -1);
  }

  return path;
}
  

document.getElementById('landingPath').addEventListener('blur', function() {
  this.value = cleanLandingPath(this.value);
});

  