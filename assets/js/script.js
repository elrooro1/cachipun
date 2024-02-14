function jugarCachipun() {
    const opciones = ["PIEDRA", "PAPEL", "TIJERA"];
    
    // Solicitar al usuario las veces que desea jugar
    const vecesAJugar = parseInt(prompt("¿Cuántas veces deseas jugar contra la computadora?"));
    
    for (let i = 0; i < vecesAJugar; i++) {
      // Solicitar al usuario su jugada
      const jugadaUsuario = prompt("Elige tu jugada (PIEDRA, PAPEL o TIJERA):").toLowerCase();
      
      // Generar jugada automática para la máquina
      const jugadaMaquina = opciones[Math.floor(Math.random() * 3)];
      
      // Definir al ganador
      let resultado = "";
      
      if (jugadaUsuario === jugadaMaquina) {
        resultado = "¡Es un empate!";
      } else if (
        (jugadaUsuario === "PIEDRA" && jugadaMaquina === "TIJERA") ||
        (jugadaUsuario === "PAPEL" && jugadaMaquina === "PIEDRA") ||
        (jugadaUsuario === "TIJERA" && jugadaMaquina === "PAPEL")
      ) {
        resultado = "¡Felicidades! Ganaste contra la máquina.";
      } else {
        resultado = "Has perdido contra la máquina. ¡Mejor suerte la próxima vez!";
      }
      
      // Mostrar el resultado
      document.write(`<p>Usuario: ${jugadaUsuario} vs Máquina: ${jugadaMaquina} - ${resultado}</p>`);
    }
    }
  // Llamar a la función para iniciar el juego
  jugarCachipun();
  
