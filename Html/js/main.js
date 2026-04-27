import { categorias } from "./data.js"

function cargarCategorias(){
    const lista = document.getElementById("lista-categorias");
    //const categorias = ["Hamburguesas", "Pizzas", "Postres", "Bebidas"];
    categorias.forEach(categoria => {
        const li = document.createElement("li");
        const a = document.createElement("a");

        a.textContent = categoria;
        a.href = "#";

        li.appendChild(a);
        lista.appendChild(li);
    });
}

cargarCategorias();

import { productos } from "./data.js";

function cargarProductos() {
    const contenedor = document.getElementById("productos");

    productos.forEach(producto => {
        
        const article = document.createElement("article");
        article.classList.add("producto");

        // estructura interna del producto
        article.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.nombre}">
            <h4>${producto.nombre}</h4>
            <p>${producto.descripcion}</p>
            <p><strong>$${producto.precio}</strong></p>
            <button>Agregar</button>
        `;

        // evento boton
        const boton = article.querySelector("button");
        boton.addEventListener("click", () => {
            alert("Agregaste: " + producto.nombre);
        });

        // insertar producto en el DOM
        contenedor.appendChild(article);
    });
}

cargarProductos();