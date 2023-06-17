const urlBase = "https://swapi.dev/api/people/";

const fetchData = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

const createCard = (nombre, estatura, masa) => {
  const card = document.createElement("div");
  card.classList.add("card");
  card.innerHTML = `
    <div class="circle"></div>
    <p>
      <h4>${nombre}</h4>
      <br>
      <b>Estatura ${estatura}cm <br> Peso ${masa}kg</b>
    </p>`;
  return card;
};

const showCharacters1 = async (idInicio, idTermino) => {
  const container = document.getElementById("personajesContainer1");

  // Verificar si el contenedor ya tiene tarjetas
  if (container.hasChildNodes()) {
    return; // Detener la función si ya hay tarjetas presentes
  }

  for (let i = idInicio; i <= idTermino; i++) {
    const data = await fetchData(urlBase + i);
    const personaje = new Personaje(data.name, data.height, data.mass);
    const card = createCard(personaje.nombre, personaje.estatura, personaje.masa);
    container.appendChild(card);
  }
};

const showCharacters2 = async (idInicio, idTermino) => {
  const container = document.getElementById("personajesContainer2");

  // Verificar si el contenedor ya tiene tarjetas
  if (container.hasChildNodes()) {
    return; // Detener la función si ya hay tarjetas presentes
  }

  for (let i = idInicio; i <= idTermino; i++) {
    const data = await fetchData(urlBase + i);
    const personaje = new Personaje(data.name, data.height, data.mass);
    const card = createCard(personaje.nombre, personaje.estatura, personaje.masa);
    container.appendChild(card);
  }
};

const showCharacters3 = async (idInicio, idTermino) => {
  const container = document.getElementById("personajesContainer3");

  // Verificar si el contenedor ya tiene tarjetas
  if (container.hasChildNodes()) {
    return; // Detener la función si ya hay tarjetas presentes
  }

  for (let i = idInicio; i <= idTermino; i++) {
    const data = await fetchData(urlBase + i);
    const personaje = new Personaje(data.name, data.height, data.mass);
    const card = createCard(personaje.nombre, personaje.estatura, personaje.masa);
    container.appendChild(card);
  }
};

class Personaje {
  constructor(nombre, estatura, masa) {
    this.nombre = nombre;
    this.estatura = estatura;
    this.masa = masa;
  }
}

document.getElementById("btn1").addEventListener("mouseenter", () => {
  showCharacters1(1, 5);
});

document.getElementById("btn2").addEventListener("mouseenter", () => {
  const randomStart = Math.random() < 0.5 ? 6 : 7;
  const randomEnd = randomStart + 4;
  showCharacters2(randomStart, randomEnd);
});

document.getElementById("btn3").addEventListener("mouseenter", () => {
  showCharacters3(12, 16);
});

// Ocultar las tarjetas al retirar el mouse
document.getElementById("btn1").addEventListener("click", () => {
  const container = document.getElementById("personajesContainer1");
  container.innerHTML = "";
});

document.getElementById("btn2").addEventListener("click", () => {
  const container = document.getElementById("personajesContainer2");
  container.innerHTML = "";
});

document.getElementById("btn3").addEventListener("click", () => {
  const container = document.getElementById("personajesContainer3");
  container.innerHTML = "";
});
