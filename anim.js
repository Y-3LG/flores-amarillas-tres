// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Qué rico sería", time: 9 },
  { text: "Intercambiar energías", time: 11 },
  { text: 'Prender sin decir: "buenos días"', time: 14 },
  { text: "Hacer el amor y después preguntarte", time: 17 },
  { text: "¿Cómo dormiste, bebé?", time: 19 },
  { text: "Si me soñaste", time: 22 },
  { text: "Quiero saber si con más ganas despertaste", time: 22 },
  { text: "¿Cómo dormiste, bebé?", time: 28 },
  { text: "Si me soñaste", time: 32 },
  { text: "Quiero saber si con más ganas des, mmm", time: 33 },
  { text: "Mami, respect", time: 38 },
  { text: "Ese culo tú lo mueves nivel expert", time: 39 },
  { text: "Hecha de laboratorio como Dexter", time: 44 },
  { text: "Vivir dentro de ti, mami, quiero ser tu huésped", time: 46 },
  { text: "So fresh, so juicy, so clean", time: 49 },
  { text: "Eso de abajo se lo sobo con cream", time: 51 },
  { text: "Sabe qué pasa si le quito ese jean", time: 54 },
  { text: "Se le quedó el cachete rojo, supreme (supreme)", time: 56 },
  { text: "A ella le gusta agresivo", time: 59 },
  { text: "Que la calienten con dembow", time: 62 },
  { text: "Y yo soy fan de ese pussy rose", time: 64 },
  { text: "La puse a gritar, se quedó sin voz", time: 66 },
  { text: "En la calle una dama", time: 69 },
  { text: "Pero pone cara 'e puta cuando me lo mama", time: 71 },
  { text: "A mí no, pero a mi bicho lo ama", time: 73 },
  { text: "Perdona groserías, se me olvida preguntarte", time: 76 },
  { text: "¿Cómo dormiste, bebé?", time: 80 },
  { text: "Si me soñaste", time: 82 },
  { text: "Quiero saber si con más ganas despertaste", time: 85 },
  { text: "¿Cómo dormiste, bebé?", time: 89 },
  { text: "Si me soñaste", time: 92 },
  { text: "Quiero saber si con más ganas de mmm", time: 94 },
  { text: "Yeah-yeah, ah", time: 99 },
  { text: "Skinny", time: 101 },
  { text: "Oh, eh, ja", time: 102 },
  { text: "Oh-yeah, oh-yeah, mmm", time: 106 },
];

// Animar las letras
function updateLyrics() {
  var time = audio.currentTime;
  // Buscar el índice de la línea enfocada (la más cercana pero no mayor al tiempo actual)
  var focusIdx = lyricsData.findIndex((line, i) => {
    var next = lyricsData[i + 1];
    return time >= line.time && (!next || time < next.time);
  });

  // Tomar la línea anterior, la enfocada y la siguiente
  var lines = [];
  if (focusIdx > 0) lines.push({text: lyricsData[focusIdx - 1].text, class: 'lyrics-prev'});
  if (focusIdx >= 0) lines.push({text: lyricsData[focusIdx].text, class: 'lyrics-focus'});
  if (focusIdx >= 0 && focusIdx < lyricsData.length - 1) lines.push({text: lyricsData[focusIdx + 1].text, class: 'lyrics-next'});

  if (lines.length > 0) {
    var html = `<div class="lyrics-scroll">` +
      lines.map(l => `<div class="${l.class}">${l.text}</div>`).join('') +
      `</div>`;
    if (lyrics.innerHTML !== html) {
      lyrics.innerHTML = html;
      lyrics.classList.remove('lyrics-animate');
      void lyrics.offsetWidth;
      lyrics.classList.add('lyrics-animate');
    }
    lyrics.style.opacity = 1;
  } else {
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
    lyrics.classList.remove('lyrics-animate');
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);