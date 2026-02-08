let apiStructure = null;
// Definimos la base de la API apuntando a tu repositorio y carpeta de datos
const API_ROOT = 'https://j-atj.github.io/apiclonewars/seasons';

async function updateQuote() {
    const quote_display = document.getElementById('quote-display');
    const url_display = document.getElementById('api-url-display');

    try {
        // 1. Cargamos el mapa completo de la API la primera vez
        if (!apiStructure) {
            const res = await fetch(`${API_ROOT}/index.json`);
            if (!res.ok) throw new Error("Could not fetch API structure");
            apiStructure = await res.json();
        }

        // Efecto visual de salida
        quote_display.classList.add('fade-out');

        // 2. Elegimos temporada y episodio al azar del objeto que ya tenemos
        const seasons = Object.keys(apiStructure);
        const randomS = seasons[Math.floor(Math.random() * seasons.length)];

        const episodes = Object.keys(apiStructure[randomS].episodes);
        const randomE = episodes[Math.floor(Math.random() * episodes.length)];

        // 3. ¡AQUÍ ESTÁ LA MAGIA! Consultamos el endpoint real del episodio
        const response = await fetch(`${API_ROOT}/${randomS}/${randomE}/index.json`);
        const data = await response.json();
        const api_url_quote = `${API_ROOT}/${randomS}/${randomE}`

        // 4. Mostramos la frase con el efecto visual de entrada
        setTimeout(() => {
            quote_display.innerText = `"${data.quote}"`;
            quote_display.classList.remove('fade-out');
        }, 300);

        // 5. Mostramos la url con el efecto visual de entrada
        setTimeout(() => {
            url_display.innerHTML = `<a href="${api_url_quote}" target="_blank">${api_url_quote}</a>`;
            url_display.classList.remove('fade-out');
        }, 100);


    } catch (error) {
        quote_display.innerText = "Connection to Jedi Archives lost.";
        quote_display.classList.remove('fade-out');

        url_display.innerText = "";
        url_display.classList.remove('fade-out');
        console.error("Fetch Error:", error);
    }
}

// Carga automática al iniciar la página
updateQuote();
