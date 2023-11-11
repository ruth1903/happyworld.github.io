document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('price-form');
    const destinationInput = document.getElementById('destination');
    const priceResult = document.getElementById('price-result');

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        const destination = destinationInput.value;
        // Aquí puedes agregar la lógica para consultar el precio del boleto según el destino.
        // Puedes actualizar priceResult con el resultado.
        priceResult.innerHTML = `El precio del boleto a ${destination} es $XXX.`; // Reemplaza con el precio real.
    });
});


const preciosDestinos = {
    "Los Cabos, Baja California Sur": 2800,
    "Canada, EE. UU.": 20000,
    "Cancun, Quintana Roo": 1500,
    "El Parque Nacional de Yosemite, EE. UU.": 18200,
    "La Alhambra, España": 6400,
    "Guadalajara, México": 1300,
    "Muralla China, Japon": 17500,
    "La Catderal de Notre-Drame, Francia": 8950,
    "Taj Mahal, India": 18000,
    "La Isla de Bali, Indonesia": 25300,
    "Machu Picchu, Perú": 3600,
    "Buenos Aires, Argentina": 17489,
    "Palenque, México": 8600,
    "Maldivas, Maldivas": 16450,
    "Riviera Maya, Mexico": 3500,
    "Veracruz, México": 950,
    "Venecia, Italia": 19500,
    "Shibuya, Japon": 26650,
    "Rio, Brasil": 11200,
    
};

document.addEventListener("DOMContentLoaded", function () {
    const searchButton = document.getElementById("search-button");
    const searchResults = document.getElementById("search-results");

    searchButton.addEventListener("click", function () {
        const from = document.getElementById("from").value;
        const to = document.getElementById("to").value;
        const date = document.getElementById("date").value;

        // Aquí puedes agregar la lógica para buscar lugares y mostrar los resultados.
        // Por ejemplo, puedes hacer una solicitud a un servidor o mostrar resultados ficticios.

        // Ejemplo de resultados ficticios:
        const results = [
            { from: "Nueva York", to: "París", date: "2023-11-15" },
            { from: "Los Ángeles", to: "Tokio", date: "2023-12-01" },
            { from: "Londres", to: "Roma", date: "2024-01-10" },
        ];

        // Limpia los resultados anteriores
        searchResults.innerHTML = "";

        if (results.length === 0) {
            searchResults.innerHTML = "No se encontraron resultados.";
        } else {
            results.forEach((result) => {
                const resultElement = document.createElement("div");
                resultElement.innerHTML = `
                    <p><strong>Desde:</strong> ${result.from}</p>
                    <p><strong>Hacia:</strong> ${result.to}</p>
                    <p><strong>Fecha de Salida:</strong> ${result.date}</p>
                `;
                searchResults.appendChild(resultElement);
            });
        }
    });
});


