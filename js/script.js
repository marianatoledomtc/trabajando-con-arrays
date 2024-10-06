// Array extraño
const strangeArray = [
  "Zero",
  function () {
    alert("Hola soy una función en un array");
  },
  22,
  null,
  "Go lang",
  undefined,
  "Cobol",
  "I'm programmer",
  -2000,
  "Hello world",
  `One is ${1}`,
  { name: "Info", lastname: "last info" },
  () => true,
  function showNumbers() {
    return "1, 2, 3, 4";
  },
  "Another String",
  ["Hola mundo!"],
  "b is a letter",
  "JavaScript",
];

// Función que recibe por parámetro un array y muestra sus elementos en pantalla
function showList(array) {
  const container = document.getElementById("list");
  container.innerHTML = "";
  // Más info de forEach => https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
  array.forEach((element) => {
    const li = document.createElement("li");
    li.appendChild(document.createTextNode(element));
    container.appendChild(li);
  });
}

document.addEventListener("DOMContentLoaded", (e) => {
  // Escribe tu solución aquí

// Filtro solo los elementos que son strings
const stringArray = strangeArray.filter(item => typeof item === 'string');

// Ordeno alfabéticamente
const sortedStringArray = stringArray.sort();

// Muestro en consola
console.log(sortedStringArray);

// Obtengo el elemento <ul> por su ID
const ulElement = document.getElementById('list');

// Añado cada string del array como un <li> dentro del <ul>
sortedStringArray.forEach(item => {
    const liElement = document.createElement('li');
    liElement.textContent = item;
    ulElement.appendChild(liElement);
});

});
