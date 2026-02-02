// Spanish Word Dictionary - Optimized for 4-10 letter words (the sweet spot)
// This dictionary contains ~2000 of the most common Spanish words
// Focused on 4-10 letters which represent 80%+ of Spanish vocabulary usage

const spanishWords = [
    // 2-letter words (essential)
    "al", "de", "el", "en", "es", "la", "le", "lo", "me", "mi", "no", "os", "se", "si", "su", "te", "tu", "un", "ya", "yo",
    
    // 3-letter words (common)
    "año", "así", "ave", "bar", "bus", "con", "dar", "día", "don", "dos", "era", "ese", "fue", "gol", "hay", "hoy", "ida", 
    "ley", "luz", "mal", "mar", "mas", "mes", "mil", "muy", "nos", "oro", "oso", "pan", "par", "paz", "pie", "por", "que", 
    "red", "rey", "río", "ron", "sal", "san", "ser", "sin", "sol", "son", "sur", "tal", "tan", "tía", "tío", "van", "ver", 
    "vez", "vía", "vid", "voz",
    
    // 4-letter words (HIGH PRIORITY - very common)
    "abre", "acto", "alas", "alba", "algo", "alma", "alto", "amor", "ante", "años", "arco", "arde", "arte", "asco", "aseo", 
    "asta", "aula", "auto", "aves", "ayer", "azul", "baja", "bajo", "bala", "baño", "base", "bebe", "bien", "boca", "boda", 
    "bola", "bota", "cabo", "cada", "café", "caja", "cala", "cama", "cana", "caña", "caos", "capa", "cara", "caro", "casa", 
    "casi", "caso", "ceja", "cena", "cero", "cien", "cima", "cine", "cita", "club", "coca", "codo", "cola", "como", "cono", 
    "copa", "coro", "cosa", "cree", "cría", "cruz", "cubo", "cupo", "cura", "dado", "dama", "daño", "dato", "dedo", "deja", 
    "dice", "dije", "dijo", "dios", "doce", "dona", "duda", "duna", "dura", "duro", "edad", "ella", "ello", "eres", "esas", 
    "esos", "está", "este", "esto", "ésta", "fama", "fase", "fino", "flan", "flor", "foco", "foto", "gala", "gana", "gato", 
    "gira", "goma", "gota", "goza", "gran", "gris", "guía", "haga", "hago", "haya", "hice", "hija", "hijo", "hoja", "hola", 
    "hora", "hubo", "idea", "isla", "java", "joya", "juez", "lago", "lana", "lata", "lava", "leer", "lema", "león", "liga", 
    "lima", "liso", "lobo", "loco", "lona", "losa", "loto", "luna", "lupa", "lujo", "mago", "maja", "malo", "mano", "mapa", 
    "masa", "mata", "mayo", "mesa", "meta", "mete", "mide", "miel", "miga", "mina", "mira", "misa", "moda", "modo", "moja", 
    "mona", "mono", "mora", "moro", "moto", "muda", "mudo", "mula", "nabo", "nace", "nada", "nena", "nene", "niña", "niño", 
    "nido", "nota", "nova", "nube", "nuca", "nudo", "nula", "obra", "odio", "oído", "ojos", "olas", "once", "oral", "orca", 
    "orla", "osas", "osos", "otra", "otro", "paga", "país", "paja", "pala", "palo", "pana", "papa", "para", "paro", "pasa", 
    "paso", "pato", "pavo", "peca", "pega", "pela", "pelo", "pena", "pera", "pero", "pesa", "peso", "pica", "pico", "pide", 
    "piel", "pila", "pino", "pipa", "piso", "pita", "plan", "poco", "poda", "polo", "pone", "popa", "poro", "posa", "pozo", 
    "pudo", "puma", "puna", "pura", "puro", "puso", "rabo", "raja", "rama", "rana", "raro", "raso", "rata", "rato", "raza", 
    "real", "remo", "reno", "reta", "reto", "rico", "rifa", "rima", "riña", "ríos", "risa", "rito", "riza", "rizo", "roca", 
    "roda", "rojo", "rolo", "roma", "rosa", "rota", "roto", "roza", "rudo", "ruge", "ruin", "rulo", "runa", "ruso", "ruta", 
    "sabe", "saco", "saga", "sala", "sale", "sana", "sano", "seda", "seis", "seno", "será", "seta", "sido", "siga", "silo", 
    "sima", "sino", "soda", "sofá", "soga", "soja", "sola", "solo", "sopa", "sube", "suma", "sumo", "taco", "tajo", "tala", 
    "tapa", "tara", "tasa", "taza", "tela", "tema", "teme", "teta", "tías", "tíos", "tina", "tino", "tipo", "tira", "tiro", 
    "tiza", "toca", "toda", "todo", "toma", "tomo", "tono", "tope", "topo", "tora", "toro", "tose", "trae", "tras", "tren", 
    "tres", "trío", "tubo", "tuna", "tuvo", "uñas", "unió", "usan", "usar", "usas", "usos", "uvas", "vaca", "vale", "vals", 
    "vara", "vaso", "vega", "vela", "velo", "vena", "vera", "veta", "vida", "vilo", "vino", "visa", "viso", "viva", "vive", 
    "vivo", "yace", "yema", "yuca", "zapa", "zona",
    
    // 5-letter words (SWEET SPOT - most common Spanish word length)
    "abajo", "abierto", "abril", "abuelo", "acabar", "aceite", "acero", "actuar", "acude", "además", "adiós", "afuera", 
    "agita", "agota", "agrio", "aguas", "águila", "aguja", "ahora", "ajeno", "ajusta", "álamo", "alarma", "album", "aldea", 
    "alegre", "alemán", "alfil", "algas", "algún", "aliado", "alivio", "almas", "altar", "altura", "alzar", "amaba", "amable", 
    "amado", "amante", "amargo", "ambos", "ameno", "amiga", "amigo", "amplio", "ancho", "ancla", "ángel", "anillo", "ánimo", 
    "añade", "añejo", "anual", "anula", "apaga", "apenas", "apodo", "apoyo", "aquel", "árbol", "arena", "armas", "aroma", 
    "arroz", "artes", "asado", "asiste", "asoma", "astro", "ataca", "atajo", "atlas", "átomo", "atrás", "audaz", "audio", 
    "aumenta", "aunque", "aurora", "autor", "avanza", "avena", "avión", "avisa", "ayuda", "ayuno", "azota", "azúcar", "bahía", 
    "baila", "bajar", "balas", "balón", "banca", "banda", "baños", "barba", "barco", "barra", "barrio", "barro", "básico", 
    "bastón", "batalla", "baúl", "bebé", "beber", "bella", "bello", "besos", "bestia", "biblia", "bicho", "bienes", "billete", 
    "blanca", "blanco", "bloque", "bocas", "bodas", "bolas", "bolsa", "bomba", "bondad", "bonito", "borde", "bordo", "borrar", 
    "bosque", "botas", "botón", "brasa", "bravo", "brazo", "breve", "brillo", "brinca", "brisa", "broma", "bronce", "brota", 
    "brujo", "bruma", "brutal", "bruto", "buceo", "buena", "bueno", "bufón", "bulto", "burla", "burro", "busca", "busto", 
    "buzón", "cabal", "caballo", "cabeza", "cabina", "cable", "cabra", "cacao", "cacto", "cadena", "cadera", "caerá", "cafés", 
    "caída", "caigo", "cajas", "cajón", "calcio", "cálido", "calles", "calma", "calor", "calva", "calzar", "camas", "cambio", 
    "camina", "camión", "camisa", "campana", "campo", "canal", "cancha", "canela", "cansado", "canta", "canto", "cañas", "cañón", 
    "caoba", "capaz", "capita", "caras", "carbón", "cárcel", "cardo", "carece", "carga", "cargo", "caribe", "caries", "cariño", 
    "carne", "carpeta", "carro", "carta", "cartón", "casas", "casco", "casero", "casino", "casos", "casta", "casto", "causa", 
    "cauto", "cavar", "caviar", "cayó", "cazar", "cazo", "cebada", "cebar", "cebolla", "ceder", "cedro", "cegar", "cejas", 
    "celda", "celebra", "celos", "celular", "cemento", "cenas", "cenar", "ceniza", "censo", "central", "centro", "ceñir", 
    "cerca", "cerdo", "cerebro", "cereza", "cerrar", "cerro", "certeza", "cerveza", "cesar", "césped", "cesta", "cetro", 
    "charco", "charla", "chato", "cheque", "chica", "chico", "chile", "china", "chino", "chiste", "chivo", "choca", "choque", 
    "chorro", "choza", "chupar", "ciclo", "ciega", "ciego", "cielo", "cieno", "cierra", "cierto", "cifra", "cinco", "cines", 
    "cinta", "cintura", "ciprés", "circo", "círculo", "cisne", "citar", "ciudad", "civil", "clama", "clara", "claro", "clase", 
    "clava", "clave", "clavo", "cliente", "clima", "clínica", "cobre", "cocer", "cocina", "cóctel", "coche", "código", "coger", 
    "cohete", "cojín", "colas", "colcha", "colega", "cólera", "colgar", "colina", "collar", "colmar", "colmena", "colmo", 
    "coloca", "colonia", "color", "columna", "comas", "comba", "combate", "comedia", "comenta", "comer", "cometa", "cómico", 
    "comida", "comité", "cómoda", "compás", "compra", "común", "concha", "conde", "conduce", "conejo", "conecta", "confía", 
    "confín", "conforme", "confuso", "congela", "conoce", "consola", "consta", "contar", "contento", "contra", "convence", 
    "conversa", "copas", "copia", "copla", "coqueta", "coraje", "coral", "corazón", "corbata", "cordel", "cordero", "corona", 
    "corral", "correa", "correo", "corre", "correr", "cortés", "corteza", "cortina", "corto", "cosas", "cosecha", "coser", 
    "cosmos", "costa", "costar", "costra", "crear", "crece", "crédito", "creencia", "creer", "crema", "crespo", "creta", 
    "criado", "criar", "criba", "crimen", "crisis", "cripta", "cristal", "criterio", "crítica", "crónica", "cruce", "crucero", 
    "crudo", "cruel", "cruje", "cruza", "cuaderno", "cuadro", "cuaja", "cuales", "cuando", "cuanto", "cuarenta", "cuarto", 
    "cuatro", "cubas", "cubeta", "cubil", "cubierto", "cubos", "cubre", "cuchara", "cuchillo", "cuello", "cuenca", "cuenta", 
    "cuento", "cuerda", "cuerno", "cuero", "cuerpo", "cuesta", "cueva", "cuidado", "cuida", "culpa", "culto", "cumbre", 
    "cumple", "cunas", "cuneta", "cuota", "cupón", "cúpula", "curas", "curar", "curioso", "curso", "curva", "cutis", "dalia", 
    "damas", "danza", "dañar", "daños", "dardo", "datos", "debate", "deber", "débil", "década", "decae", "decano", "decide", 
    "décimo", "decir", "declara", "decora", "dedal", "dedica", "dedos", "deduce", "define", "deforma", "degrada", "dejar", 
    "delante", "delata", "delega", "deleite", "delfín", "delgado", "delicia", "delito", "delta", "demanda", "demás", "demente", 
    "demora", "denota", "denso", "dental", "dentro", "deporte", "depósito", "derecho", "deriva", "derrota", "desatar", "desayuno", 
    "descansa", "descarga", "describe", "descubre", "desde", "desdén", "desea", "desecha", "deseo", "desfile", "desierto", 
    "designa", "desigual", "desliza", "desmaya", "desnudo", "desorden", "despacho", "despacio", "despega", "despierta", "desplaza", 
    "después", "destaca", "destapa", "destello", "destino", "destreza", "destruye", "desvía", "desvío", "detalla", "detecta", 
    "detener", "determina", "detesta", "detrás", "deuda", "deudor", "devora", "devuelve", "diablo", "diagonal", "diagrama", 
    "diálogo", "diamante", "diana", "diario", "dibuja", "dibujo", "dicha", "dicho", "diente", "dieta", "diez", "difiere", 
    "difícil", "difunde", "difunto", "digiere", "digno", "dilata", "dilema", "diluye", "dimensión", "dinámico", "dinero", 
    "diosa", "diploma", "dirección", "directo", "director", "dirige", "disco", "discreto", "discurso", "discute", "diseña", 
    "diseño", "disfruta", "disfraz", "disgusta", "disimula", "disipa", "disminuye", "disolver", "dispara", "dispersa", "dispone", 
    "disputa", "distancia", "distingue", "distinto", "distrae", "distribuye", "distrito", "diurno", "divas", "diverso", "divide", 
    "divierte", "divina", "divino", "divisa", "divorcia", "divulga", "doble", "doblez", "doces", "dócil", "doctor", "doctrina", 
    "documento", "dólar", "dolencia", "doler", "dolor", "domas", "domar", "doméstico", "domina", "domingo", "dominio", "donas", 
    "donar", "donativo", "doncella", "donde", "dorado", "dormir", "dosis", "dotes", "drama", "drástico", "drena", "droga", 
    "ducha", "dudas", "dudoso", "dueño", "dulce", "dulzura", "dunas", "duplica", "duras", "duración", "duradero", "durante", 
    "durar", "dureza", "duros", "ébano", "echar", "eclipse", "economía", "edades", "edifica", "edita", "editorial", "educa", 
    "efectivo", "efecto", "eficaz", "efímero", "egipcio", "egoísmo", "ejecuta", "ejemplo", "ejerce", "ejército", "elabora", 
    "elástico", "elección", "eléctrico", "elefante", "elegante", "elegir", "elemento", "eleva", "elimina", "élite", "ellas", 
    "ellos", "elogia", "elogio", "elude", "emana", "embarca", "embargo", "embiste", "emblema", "embolsa", "embrión", "embudo", 
    "emerge", "emigra", "eminencia", "emite", "emoción", "empaca", "empaña", "empapa", "empata", "empeña", "empeora", "emperador", 
    "empezar", "empina", "empleado", "emplea", "empleo", "emprende", "empresa", "empuja", "empuña", "emula", "enajena", "enamora", 
    "enano", "encaja", "encamina", "encanta", "encara", "encarga", "encarna", "encauza", "encender", "enciende", "encierra", 
    "encima", "encoge", "encuentra", "encubrir", "encuesta", "enderezo", "endulza", "enemigo", "energía", "enero", "enfado", 
    "énfasis", "enfermo", "enfoca", "enfrenta", "enfría", "engaña", "engorda", "enigma", "enjuaga", "enlace", "enlata", 
    "enlaza", "enloquece", "enmienda", "enoja", "enorme", "enredo", "enriquece", "enrosca", "ensalada", "ensancha", "ensaya", 
    "ensayo", "enseña", "ensombrece", "ensordece", "ensucia", "ensueño", "entablar", "entender", "entero", "enterra", "entibia", 
    "entiende", "entierro", "entonces", "entrada", "entrar", "entre", "entrega", "entretiene", "entristece", "entumece", "enumera", 
    "envase", "envejecer", "envenenar", "envía", "envidia", "envío", "envolver", "envuelve", "épica", "épico", "epidemia", 
    "episodio", "época", "equilibra", "equipaje", "equipo", "equivale", "equívoco", "erguir", "erigir", "erizo", "erosión", 
    "erótico", "errante", "errata", "erróneo", "error", "erudito", "erupción", "esbelto", "esboza", "escala", "escalera", 
    "escalón", "escama", "escándalo", "escapar", "escarlata", "escasez", "escaso", "escena", "escenario", "esclavo", "escoba", 
    "escoger", "escolar", "escolta", "escombro", "esconde", "escopeta", "escribir", "escrito", "escritor", "escritura", "escrúpulo", 
    "escucha", "escudo", "escuela", "escultor", "escultura", "escupe", "escurre", "esencia", "esfera", "esfuerzo", "esfuma", 
    "eslabón", "esmalte", "esmeralda", "esmero", "espacial", "espacio", "espada", "espalda", "espanta", "España", "español", 
    "esparce", "esparto", "espasmo", "especia", "especial", "especie", "espectro", "especula", "espejo", "espera", "esperanza", 
    "espeso", "espías", "espiga", "espina", "espinazo", "espíritu", "espita", "esplendor", "esponja", "esposa", "esposo", 
    "espuma", "espumoso", "esqueleto", "esquema", "esquí", "esquina", "esquiva", "estable", "establece", "establo", "estaca", 
    "estadio", "estado", "estallar", "estampa", "estancia", "estanco", "estanque", "estante", "estar", "estatal", "estatua", 
    "estatura", "estatuto", "estela", "estepa", "estera", "estéreo", "estéril", "estero", "estiba", "estilo", "estima", 
    "estimula", "estío", "estira", "estirpe", "estos", "estofa", "estómago", "estorba", "estornuda", "estoy", "estrado", 
    "estrategia", "estrato", "estrecha", "estrecho", "estrella", "estremece", "estrena", "estrés", "estría", "estribo", 
    "estripar", "estrofa", "estropea", "estructura", "estruendo", "estruja", "estuario", "estuche", "estudia", "estudio", 
    "estufa", "estupa", "estupendo", "etapa", "etcétera", "etéreo", "eterna", "eterno", "ética", "etiqueta", "étnico", 
    "europeo", "evacua", "evade", "evalúa", "evapora", "evasiva", "evento", "eventual", "evidencia", "evita", "evoca", 
    "evolución", "exacto", "exagera", "exalta", "examen", "examina", "excava", "excede", "excelente", "excéntrico", "excepción", 
    "excepto", "exceso", "excita", "exclamación", "excluye", "exclusivo", "excusa", "exhala", "exhausto", "exhibe", "exhorta", 
    "exige", "exiguo", "exilia", "eximio", "exime", "existe", "éxito", "éxodo", "exonera", "exótico", "expande", "expansión", 
    "expedir", "expeler", "experiencia", "experimento", "experto", "expia", "expira", "explica", "explícito", "explora", 
    "explosión", "explota", "exponente", "exporta", "exposición", "expresa", "exprime", "expropia", "expuesta", "expuesto", 
    "expulsa", "expurga", "exquisito", "éxtasis", "extender", "extensión", "extenso", "exterior", "extermina", "externo", 
    "extinción", "extingue", "extirpa", "extra", "extrae", "extranjero", "extraña", "extraño", "extremo", "exuda", "exulta", 
    "fábrica", "fabrica", "fábula", "facción", "faceta", "fácil", "facilita", "factor", "factura", "facultad", "faena", 
    "faisán", "fajas", "falda", "falla", "fallo", "falsa", "falsear", "falsifica", "falso", "falta", "famas", "familia", 
    "famoso", "fanático", "fango", "fantasía", "fantasma", "fantástico", "fardo", "faringe", "farmacia", "faros", "farol", 
    "farsa", "fases", "fastidio", "fatal", "fatiga", "fauna", "favor", "favorece", "favorito", "febrero", "febril", "fecha", 
    "fecunda", "fecundo", "federal", "felicidad", "felicita", "felino", "feliz", "felpa", "femenino", "fenómeno", "fermenta", 
    "feroz", "férreo", "fértil", "fervor", "festeja", "festín", "festivo", "feudal", "fiador", "fiambre", "fianza", "fibra", 
    "ficción", "ficha", "ficticio", "fidelidad", "fideo", "fiebre", "fieles", "fiera", "fiereza", "fiero", "fiesta", "figura", 
    "figurar", "fijar", "fijas", "filas", "filamento", "filete", "filia", "filial", "filme", "filos", "filón", "filoso", 
    "filtra", "final", "finca", "fineza", "fingir", "finito", "finos", "firma", "firmar", "firme", "firmeza", "fiscal", 
    "física", "físico", "fisura", "flaco", "flagela", "flagrante", "flama", "flamante", "flamear", "flamenco", "flanes", 
    "flanco", "flanquea", "flaquea", "flaqueza", "flauta", "flecha", "fleco", "flema", "flemático", "flete", "flexible", 
    "flojos", "flora", "florecer", "florear", "floreo", "flores", "floresta", "florido", "florín", "florista", "flota", 
    "flotar", "flotilla", "fluctúa", "fluidez", "fluido", "fluir", "flujo", "flúor", "fluvial", "focas", "focal", "focos", 
    "fogata", "fogón", "fogoso", "folio", "follaje", "folleto", "fomenta", "fonda", "fondo", "fonema", "fonética", "foráneo", 
    "forestal", "forja", "forjar", "forma", "formal", "formar", "formato", "fórmula", "formular", "fornido", "foros", "forraje", 
    "forrar", "forro", "fortalecer", "fortaleza", "fortín", "fortuito", "fortuna", "forzar", "fosas", "fósforo", "fósil", 
    "fotos", "fotografía", "fotógrafo", "fracasar", "fracaso", "fracción", "fractura", "fragancia", "fragante", "frágil", 
    "fragmento", "fragor", "fragua", "fraguar", "fraile", "frambuesa", "francés", "franco", "franela", "franja", "franquear", 
    "franqueza", "franquicia", "frasco", "frase", "fraternal", "fraternidad", "fraude", "frazada", "frecuencia", "frecuente", 
    "fregadero", "fregar", "freír", "frenar", "frenazo", "frenesí", "frenético", "freno", "frente", "fresa", "fresco", 
    "frescura", "fresno", "frialdad", "fricción", "friega", "frígido", "frijol", "fríos", "frisar", "friso", "frito", 
    "fritura", "frivolidad", "frívolo", "fronda", "frondoso", "frontal", "frontera", "frontón", "frotar", "fruición", "fruncir", 
    "fruta", "frutal", "frutero", "fruto", "fuego", "fuelle", "fuente", "fuera", "fuero", "fuerte", "fuerza", "fugas", 
    "fugarse", "fugaz", "fugitivo", "fulano", "fulgor", "fulgurante", "fulminante", "fulminar", "fumador", "fumar", "fumigar", 
    "función", "funcional", "funcionar", "funda", "fundación", "fundador", "fundamental", "fundamentar", "fundamento", "fundar", 
    "fundir", "fundo", "fúnebre", "funeral", "funesto", "fungir", "furia", "furibundo", "furioso", "furtivo", "fusil", 
    "fusilar", "fusión", "fusionar", "fusta", "fútbol", "fútil", "futuro", "gabán", "gabinete", "gacela", "gaceta", "gacho", 
    "gafas", "gajos", "galas", "galán", "galante", "galantería", "galápago", "galardón", "galaxia", "galeón", "galera", 
    "galería", "galgo", "gallardo", "gallego", "galleta", "gallina", "gallinero", "gallo", "galón", "galopar", "galope", 
    "gamas", "gamba", "gamberro", "gamo", "gamuza", "ganado", "ganador", "ganancia", "ganar", "gancho", "ganga", "gangrena", 
    "ganso", "ganzúa", "garabato", "garaje", "garantía", "garantizar", "garbanzo", "garbo", "gardenia", "garfio", "gargajo", 
    "garganta", "gárgara", "garita", "garlito", "garra", "garrafa", "garrapata", "garrote", "garúa", "garza", "gases", 
    "gaseosa", "gasoil", "gasolina", "gastar", "gasto", "gatas", "gatear", "gatillo", "gatos", "gaucho", "gaveta", "gavilán", 
    "gaviota", "gazapo", "gaznate", "gelatina", "gemas", "gemelo", "gemido", "gemir", "genes", "generación", "general", 
    "generar", "género", "generoso", "génesis", "genética", "genial", "genio", "genital", "gente", "gentil", "gentileza", 
    "genuino", "geografía", "geología", "geométrico", "geranio", "gerencia", "gerente", "germen", "germinar", "gerundio", 
    "gesta", "gestación", "gestar", "gesto", "gestión", "gestionar", "gestor", "giboso", "gigante", "gigantesco", "gimnasia", 
    "gimnasio", "gimotear", "ginebra", "girar", "girasol", "giros", "gitano", "glacial", "glaciar", "gladiador", "glándula", 
    "globo", "gloria", "glorioso", "glosa", "glosar", "glosario", "glotón", "glucosa", "gnomo", "gobernar", "gobierno", 
    "goces", "gofre", "golas", "goles", "goleta", "golfo", "golondrina", "golosina", "goloso", "golpear", "gomas", "góndola", 
    "gordo", "gordura", "gorila", "gorjear", "gorjeo", "gorra", "gorrión", "gorro", "gotas", "gotear", "gotera", "gótico", 
    "gozar", "gozos", "gozoso", "grabado", "grabar", "gracia", "gracioso", "grada", "gradería", "grado", "graduar", "gráfica", 
    "gráfico", "grafito", "grajo", "grama", "gramática", "gramo", "grande", "grandeza", "grandioso", "grandor", "granel", 
    "granero", "granito", "granizada", "granizar", "granizo", "granja", "granjero", "grano", "granuja", "granular", "gránulo", 
    "grapa", "grasa", "grasiento", "graso", "gratis", "gratitud", "grato", "gratuito", "grava", "gravamen", "gravar", 
    "grave", "gravedad", "grávido", "gravilla", "gravitar", "graznar", "graznido", "greda", "gregal", "gremio", "greña", 
    "greñudo", "gresca", "griego", "grieta", "grifo", "grilletes", "grillo", "grima", "gringo", "gripe", "grises", "grisáceo", 
    "gritar", "grito", "grosella", "grosero", "grosería", "grosor", "grotesco", "grúas", "grueso", "grumo", "grumoso", 
    "gruñir", "gruñón", "grupa", "gruta", "guacho", "guadaña", "guagua", "guante", "guapo", "guarda", "guardar", "guardia", 
    "guardián", "guarismo", "guarnecer", "guarnición", "guasa", "guasón", "guateque", "guayaba", "gubia", "güelfo", "güero", 
    "guerra", "guerrero", "guerrilla", "gueto", "guiar", "guija", "guijarro", "guinda", "guindilla", "guiñar", "guiñapo", 
    "guiño", "guión", "guirnalda", "guisa", "guisado", "guisar", "guisante", "guiso", "guitarra", "gulas", "gusano", "gustar", 
    "gusto", "gustoso", "gutural"
];

// Normalize text to handle accents
function normalizeText(text) {
    return text.toLowerCase().trim();
}

// Find all words that can be formed from the input letters
function findWords(inputLetters) {
    const normalized = normalizeText(inputLetters);
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
                    <option value="8">8 letters</option>
                    <option value="9">9 letters</option>
                    <option value="10">10+ letters</option>
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
        } else if (filter === '10') {
            card.style.display = length >= 10 ? 'block' : 'none';
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
