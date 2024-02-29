const listCharacter = document.getElementById("character-list");
const btnPrev = document.getElementById("prev-page");
const btnNext = document.getElementById("next-page");
const apiURL = "https://rickandmortyapi.com/api/character";
let page = 1;


// Función para obtener datos de la API

function fetchData(url) {
  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Error en la solicitud al servidor");
      }
      return response.json();
    })
    .then((data) => {
      showChars(data.results)
      console.log(data);
    })
    .catch((error) => {
      console.error("Error al obtener datos de la API!!!:", error);
    });
}

// Llamada a la función con la URL de la API

fetchData(apiURL);

// Eventos de los botones

btnPrev.addEventListener("click", () => {
  if (page > 1) {
    page--;
    fetchData(getPageUrl(page));
  }
});

btnNext.addEventListener("click", () => {
  page++;
  fetchData(getPageUrl(page));
});

// Función para construir la URL de la página

function getPageUrl(page) {
  listCharacter.innerHTML = "";
  return `https://rickandmortyapi.com/api/character/?page=${page}`; // repasar
}

// Función para mostrar los personajes DOM 

function showChars(characters) {
  characters.forEach((element) => {
    
    const liChar = document.createElement("li");
    const imgChar = document.createElement("img");
    imgChar.src = element.image;

    const nameChar = document.createElement("h3");
    const nameText = document.createElement("span")
    nameText.innerText = "Name: ";
    const nameValue = document.createTextNode(element.name) //repasar
    nameChar.appendChild(nameText);
    nameChar.appendChild(nameValue);

    const speciesChar = document.createElement("h3");
    const speciesText = document.createElement("span");
    speciesText.innerText = "Species: ";
    const speciesValue = document.createTextNode(element.species) // repasar
    speciesChar.appendChild(speciesText);
    speciesChar.appendChild(speciesValue);

    liChar.appendChild(imgChar);
    liChar.appendChild(nameChar);
    liChar.appendChild(speciesChar);
    listCharacter.appendChild(liChar);

  });
}
