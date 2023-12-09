const productos = [
  {nombre: "Zapato negro", tipo: "zapato", color: "negro", img: "./taco-negro.jpg"},
  {nombre: "Zapato azul", tipo: "zapato", color: "azul", img: "./taco-azul.jpg"},
  {nombre: "Bota negra", tipo: "bota", color: "negro", img: "./bota-negra.jpg"},
  {nombre: "Bota azul", tipo: "bota", color: "azul", img: "./bota-azul.jpg"},
  {nombre: "Zapato rojo", tipo: "zapato", color: "rojo", img: "./zapato-rojo.jpg"}
];

// getElementById para el elemento de lista
const lista = document.getElementById("lista-de-productos"); // lista en vez de li
const input = document.querySelector('.input'); // input en vez de $i

function displayProductos(productos) {
  for (let i = 0; i < productos.length; i++) {
    var divProducto = document.createElement("div");
    divProducto.classList.add("producto");

    var parrafoTitulo = document.createElement("p");
    parrafoTitulo.classList.add("titulo");
    parrafoTitulo.textContent = productos[i].nombre;

    var imagen = document.createElement("img");
    imagen.setAttribute('src', productos[i].img);

    divProducto.appendChild(parrafoTitulo);
    divProducto.appendChild(imagen);

    lista.appendChild(divProducto);
  }
}

displayProductos(productos);

const botonDeFiltro = document.querySelector("button");

botonDeFiltro.onclick = function() {
  while (lista.firstChild) {
    lista.removeChild(lista.firstChild);
  }

  const texto = input.value;
  console.log(texto);
  const productosFiltrados = filtrado(productos, texto);

  displayProductos(productosFiltrados);
};

const filtrado = (productos = [], texto) => {
  return productos.filter(item => item.tipo.includes(texto) || item.color.includes(texto));
};
