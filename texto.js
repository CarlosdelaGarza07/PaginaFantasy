console.log("Bienvenido a mi pagina"); 
console.error("Error");
alert("Bienvenido a mi pagina");

document.title = "Indice";

function mostrarPalabraAlAzar() {
    // Lista de palabras
    const palabras = ["Ja'Marr Chase vs Ravens(5): 41.3 points", "Drake London vs Buccaneers(5): 33.4 points", "Nico Collins vs Jaguars(4): 33.1 points", "Derrick Henry vs Bills(4): 35.9 points", "Kenneth Walker @ Lions(4): 33.6 points", "Jauan Jennings @ Rams(3): 46.5 points", "Saquon Barkley @ Saints(3): 33.6 points", "Alvin Kamara @ Cowboys(2): 44 points", "Jayden Reed @ Eagles(1): 33.1 points"];

    // Obtener una palabra al azar
    const palabraAleatoria = palabras[Math.floor(Math.random() * palabras.length)];

    // Mostrar la palabra en un aviso
    alert("Palabra al azar: " + palabraAleatoria);
}