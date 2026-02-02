// Spanish Word Dictionary - Comprehensive list of common Spanish words
const spanishWords = [
    // 2-letter words
    "al", "de", "el", "en", "es", "la", "le", "lo", "me", "mi", "no", "os", "se", "si", "su", "te", "tu", "un", "ya", "yo",
    
    // 3-letter words
    "año", "así", "ave", "bar", "bien", "boa", "boca", "buen", "bus", "cal", "can", "cara", "casa", "cien", "con", "cosa", 
    "dar", "día", "don", "dos", "era", "ese", "esta", "fino", "fue", "gol", "hay", "hoy", "ida", "ley", "luz", "mal", "mar", 
    "mas", "mes", "mil", "muy", "niño", "nos", "oro", "oso", "pan", "par", "paz", "pie", "por", "que", "red", "rey", "río", 
    "ron", "sal", "san", "ser", "sin", "sol", "son", "sur", "tal", "tan", "tía", "tío", "tos", "tren", "tú", "una", "uno", 
    "uña", "uso", "uva", "van", "ver", "vez", "vía", "vid", "vino", "voz",
    
    // 4-letter words
    "abeja", "abril", "abuelo", "acá", "agua", "ahorita", "aire", "algo", "alma", "alto", "amor", "año", "años", "ante", 
    "aquel", "aquí", "arte", "así", "auto", "ayer", "azul", "bailar", "bajo", "baño", "base", "basta", "bien", "boca", 
    "boda", "bola", "bolsa", "bueno", "buscar", "caballo", "cada", "café", "caja", "calle", "cama", "campo", "cansado", 
    "cara", "carne", "caro", "carta", "casa", "casi", "caso", "cena", "cerca", "cerrar", "cielo", "cien", "cinco", "cine", 
    "ciudad", "clase", "club", "coche", "color", "comer", "como", "conocer", "copa", "cosa", "cuál", "cuándo", "cuánto", 
    "cuatro", "cuenta", "cuerpo", "curso", "dar", "dato", "deber", "decir", "dejar", "dentro", "derecho", "desear", "desde", 
    "después", "día", "diez", "dinero", "dios", "doble", "dolor", "donde", "dormir", "dos", "durante", "echar", "edad", 
    "ella", "ellos", "empresa", "entrar", "entonces", "entre", "época", "equipo", "error", "ese", "España", "esperar", 
    "esquina", "estar", "este", "estilo", "esto", "estudiar", "éxito", "explicar", "extraño", "fácil", "falso", "familia", 
    "favor", "fecha", "feliz", "feo", "fiesta", "figura", "final", "fino", "firmar", "flor", "forma", "foto", "Francia", 
    "frente", "frío", "fuego", "fuera", "fuerza", "gana", "gato", "gente", "gobierno", "golpe", "grande", "gratis", "grave", 
    "gritar", "grupo", "guapo", "guardar", "guerra", "guía", "gustar", "haber", "habitación", "hablar", "hacer", "hasta", 
    "hermano", "hermoso", "hijo", "historia", "hola", "hombre", "hora", "hotel", "hoy", "huevo", "idea", "iglesia", "igual", 
    "importante", "imposible", "indicar", "inglés", "inmediato", "interior", "invitar", "isla", "izquierda", "jardín", 
    "jefe", "joven", "juego", "jugar", "junto", "lado", "lago", "lápiz", "largo", "lección", "leche", "leer", "lejos", 
    "lengua", "lento", "letra", "levantar", "ley", "libre", "libro", "ligero", "línea", "lista", "listo", "llamar", 
    "llegar", "llenar", "llevar", "llorar", "lluvia", "loco", "lograr", "lucha", "lugar", "luna", "luz", "madre", "mal", 
    "malo", "mandar", "manera", "mano", "mantener", "mañana", "máquina", "mar", "marchar", "más", "matar", "mayor", "medio", 
    "mejor", "menor", "menos", "mes", "mesa", "meter", "método", "metro", "mientras", "miembro", "mil", "millón", "minuto", 
    "mirar", "mismo", "modelo", "modo", "momento", "montaña", "moral", "morir", "mostrar", "motivo", "mover", "movimiento", 
    "mucho", "muerte", "mujer", "mundo", "música", "muy", "nacer", "nación", "nada", "nadie", "natural", "navegar", 
    "necesario", "necesitar", "negro", "niño", "nivel", "noche", "nombre", "normal", "norte", "nosotros", "nota", "noticia", 
    "novela", "nube", "nuestro", "nuevo", "número", "nunca", "objeto", "obra", "obtener", "ocasión", "ocupar", "ocurrir", 
    "ocho", "odio", "oeste", "oficina", "ofrecer", "oír", "ojo", "olvidar", "once", "opinión", "orden", "oreja", "oro", 
    "oscuro", "oso", "otro", "padre", "página", "país", "pájaro", "palabra", "palacio", "pan", "papel", "par", "para", 
    "parecer", "pared", "parte", "partir", "pasado", "pasar", "paseo", "paso", "patria", "paz", "pecho", "pedir", "pegar", 
    "película", "peligro", "pelo", "pena", "pensar", "peor", "pequeño", "perder", "perfecto", "periódico", "permanecer", 
    "permitir", "pero", "perro", "persona", "pesar", "peso", "pie", "piedra", "piel", "pierna", "pintar", "piso", "placer", 
    "plan", "planta", "plata", "plato", "playa", "plaza", "pluma", "población", "pobre", "poco", "poder", "poema", "policía", 
    "política", "político", "pollo", "poner", "popular", "por", "porque", "poseer", "posible", "posición", "precio", 
    "preciso", "preferir", "pregunta", "preguntar", "preparar", "presencia", "presente", "presidente", "prestar", "primero", 
    "primo", "príncipe", "principio", "prisa", "probable", "probar", "problema", "producir", "producto", "profesor", 
    "profundo", "programa", "prometer", "pronto", "propio", "próximo", "público", "pueblo", "puente", "puerta", "pues", 
    "puesto", "punto", "puro", "que", "quedar", "querer", "querido", "quién", "quieto", "quitar", "quizá", "radio", "rápido", 
    "rato", "razón", "real", "realizar", "recibir", "recoger", "reconocer", "recordar", "recto", "recurso", "red", "reducir", 
    "referir", "reflejar", "regalo", "región", "regla", "regresar", "regular", "reír", "relación", "religión", "remediar", 
    "repetir", "representar", "República", "resolver", "respetar", "respirar", "responder", "resto", "resultado", "resultar", 
    "rey", "rico", "río", "risa", "rojo", "romper", "ron", "ropa", "rosa", "rostro", "rubio", "ruido", "sábado", "saber", 
    "sacar", "sal", "sala", "salir", "salud", "saludar", "salvar", "san", "sangre", "santo", "seco", "secreto", "sed", 
    "seguir", "según", "segundo", "seguro", "seis", "semana", "semejante", "sencillo", "sentar", "sentido", "sentimiento", 
    "sentir", "señal", "señor", "señora", "señorita", "separar", "septiembre", "ser", "serio", "servicio", "servir", "sí", 
    "siempre", "siete", "siglo", "significar", "siguiente", "silencio", "silla", "simple", "sin", "sino", "sitio", "situación", 
    "sobre", "sociedad", "sol", "soldado", "soler", "solo", "sólo", "solución", "sombra", "son", "sonar", "sonreír", "soñar", 
    "sopa", "sorprender", "sostener", "su", "subir", "suceder", "suceso", "suelo", "sueño", "suerte", "sufrir", "superior", 
    "suponer", "sur", "suyo", "tal", "también", "tampoco", "tan", "tanto", "tarde", "tarea", "taxi", "taza", "té", "teatro", 
    "techo", "tela", "teléfono", "tema", "temer", "temprano", "tender", "tener", "término", "terminar", "terreno", "terrible", 
    "tesoro", "tiempo", "tienda", "tierra", "tipo", "tirar", "título", "tocar", "todavía", "todo", "tomar", "tono", "tonto", 
    "tornar", "torre", "total", "trabajar", "trabajo", "tradición", "traer", "traje", "tranquilo", "transformar", "tras", 
    "tratar", "trato", "través", "trece", "treinta", "tren", "tres", "tribunal", "triste", "triunfo", "tropa", "tu", "tumba", 
    "turismo", "último", "un", "único", "unidad", "unir", "universidad", "uno", "uña", "urgente", "usar", "uso", "usted", 
    "útil", "utilizar", "uva", "vaca", "vacío", "valer", "valle", "valor", "vano", "vapor", "vario", "varón", "vaso", 
    "vecino", "vegetal", "vehículo", "veinte", "vejez", "vela", "velocidad", "vencer", "vender", "venir", "venta", "ventana", 
    "ver", "verano", "verdad", "verdadero", "verde", "verso", "vestido", "vestir", "vez", "vía", "viajar", "viaje", "vida", 
    "viejo", "viento", "viernes", "vino", "violencia", "violento", "virgen", "virtud", "visible", "visita", "visitar", 
    "vista", "visto", "vivo", "vocabulario", "volar", "volver", "vos", "vosotros", "voto", "voz", "vuelo", "vuelta", "vuestro", 
    "ya", "yo", "zona"
];

// Normalize text to handle accents
function normalizeText(text) {
    return text.toLowerCase().trim();
}

// Sort letters in a word for comparison
function sortLetters(word) {
    return word.split('').sort().join('');
}

// Find all words that can be formed from the input letters
function findWords(inputLetters) {
    const normalized = normalizeText(inputLetters);
    const sortedInput = sortLetters(normalized);
    const inputLetterCount = {};
    
    // Count occurrences of each letter in input
    for (const letter of normalized) {
        inputLetterCount[letter] = (inputLetterCount[letter] || 0) + 1;
    }
    
    const results = [];
    
    // Check each word in dictionary
    for (const word of spanishWords) {
        const wordLetterCount = {};
        let canForm = true;
        
        // Count occurrences of each letter in word
        for (const letter of word) {
            wordLetterCount[letter] = (wordLetterCount[letter] || 0) + 1;
        }
        
        // Check if we have enough of each letter
        for (const letter in wordLetterCount) {
            if (!inputLetterCount[letter] || inputLetterCount[letter] < wordLetterCount[letter]) {
                canForm = false;
                break;
            }
        }
        
        if (canForm) {
            results.push(word);
        }
    }
    
    // Sort by length (descending) then alphabetically
    return results.sort((a, b) => {
        if (b.length !== a.length) {
            return b.length - a.length;
        }
        return a.localeCompare(b);
    });
}

// Display results
function displayResults(words) {
    const resultsDiv = document.getElementById('results');
    
    if (words.length === 0) {
        resultsDiv.innerHTML = `
            <div class="empty-state">
                <div class="empty-icon">😕</div>
                <p>No Spanish words found with those letters</p>
                <p style="font-size: 0.875rem; color: var(--text-muted); margin-top: 8px;">Try different letters or check your spelling</p>
            </div>
        `;
        return;
    }
    
    let html = `
        <div class="results-header">
            <div class="results-count">Found ${words.length} word${words.length !== 1 ? 's' : ''}</div>
            <div class="filter-group">
                <label for="lengthFilter">Filter by length:</label>
                <select id="lengthFilter" onchange="filterByLength()">
                    <option value="all">All lengths</option>
                    <option value="2">2 letters</option>
                    <option value="3">3 letters</option>
                    <option value="4">4 letters</option>
                    <option value="5">5 letters</option>
                    <option value="6">6 letters</option>
                    <option value="7">7 letters</option>
                    <option value="8">8+ letters</option>
                </select>
            </div>
        </div>
        <div class="words-grid" id="wordsGrid">
    `;
    
    words.forEach(word => {
        html += `
            <div class="word-card" data-length="${word.length}">
                <div class="word-text">${word}</div>
                <div class="word-length">${word.length} letter${word.length !== 1 ? 's' : ''}</div>
            </div>
        `;
    });
    
    html += '</div>';
    resultsDiv.innerHTML = html;
}

// Filter results by length
function filterByLength() {
    const filter = document.getElementById('lengthFilter').value;
    const cards = document.querySelectorAll('.word-card');
    
    cards.forEach(card => {
        const length = parseInt(card.getAttribute('data-length'));
        
        if (filter === 'all') {
            card.style.display = 'block';
        } else if (filter === '8') {
            card.style.display = length >= 8 ? 'block' : 'none';
        } else {
            card.style.display = length === parseInt(filter) ? 'block' : 'none';
        }
    });
}

// Main unscramble function
function unscrambleWords() {
    const input = document.getElementById('letters').value;
    
    if (!input.trim()) {
        alert('Please enter some letters to unscramble');
        return;
    }
    
    // Show loading state
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = `
        <div class="empty-state">
            <div class="empty-icon">🔄</div>
            <p>Finding words...</p>
        </div>
    `;
    
    // Simulate brief loading for better UX
    setTimeout(() => {
        const words = findWords(input);
        displayResults(words);
    }, 300);
}

// Clear input and results
function clearInput() {
    document.getElementById('letters').value = '';
    document.getElementById('results').innerHTML = `
        <div class="empty-state">
            <div class="empty-icon">🔤</div>
            <p>Enter scrambled letters above to find Spanish words</p>
        </div>
    `;
}

// Allow Enter key to trigger unscramble
document.addEventListener('DOMContentLoaded', function() {
    const input = document.getElementById('letters');
    
    input.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            unscrambleWords();
        }
    });
    
    // Auto-focus input on load
    input.focus();
});
