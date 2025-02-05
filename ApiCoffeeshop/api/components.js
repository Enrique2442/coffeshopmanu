// Función que maneja las peticiones fetch
export default async function fetchData(filename, action, form = null) {
    // Variable que guarda la ip para importarla en la ruta general del servidor
    let ip = `192.168.2.124`;

    // URL base del servidor
    const SERVER_URL = `http://${ip}/coffeeshop/api/`;

    // Opciones para la petición fetch
    const OPTIONS = {
        method: form ? 'POST' : 'GET', // Usa POST si se proporciona un formulario, de lo contrario usa GET
        ...(form && { body: form }) // Añade el cuerpo si se proporciona un formulario
    };

    try {

        const PATH = new URL(SERVER_URL + filename);
        PATH.searchParams.append('action', action);

        const RESPONSE = await fetch(PATH.href, OPTIONS);

        if (!RESPONSE.ok) {
            throw new Error(`HTTP error! status: ${RESPONSE.status}`);
        }

        const DATA = await RESPONSE.json();
        console.log('RESPONSE', DATA);
        return DATA;

    } catch (error) {
        console.error('Fetch error:', error);
        throw error;
    }
};