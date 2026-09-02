console.log("hola");

var productosEstrellas = [
    {
        "id": 1,
        "nombre":"Manzana Fuji",
        "imagen":"../img/manzana.png",
        "precio":1200,
        "stock":150,
        "descripcion":"Manzanas Fuji crujientes y dulces, cultivadas en el Valle del Maule. Perfectas para meriendas saludables o como ingrediente en postres. Estas manzanas son conocidas por su textura firme y su sabor equilibrado entre dulce y ácido."

    },
    {
        "id": 2,
        "nombre":"Naranjas Valencia",
        "imagen":"../img/naranja.png",
        "precio":1000,
        "stock":200,
        "descripcion":"Jugosas y ricas en vitamina C, estas naranjas Valencia son ideales para zumos frescos y refrescantes. Cultivadas en condiciones climáticas óptimas que aseguran su dulzura y jugosidad."

    },
    {
        "id": 3,
        "nombre":"Plátanos Cavendish",
        "imagen":"../img/platano.png",
        "precio":800,
        "stock":250,
        "descripcion":"Plátanos maduros y dulces, perfectos para el desayuno o como snack energético. Estos plátanos son ricos en potasio y vitaminas, ideales para mantener una dieta equilibrada."

    },
    {
        "id": 4,
        "nombre":"Zanahorias Orgánicas",
        "imagen":"../img/zanahoria.png",
        "precio":900,
        "stock":100,
        "descripcion":"Zanahorias crujientes cultivadas sin pesticidas en la Región de O'Higgins. Excelente fuente de vitamina A y fibra, ideales para ensaladas, jugos o como snack saludable."

    },
    {
        "id": 5,
        "nombre":"Espinacas Frescas",
        "imagen":"../img/espinaca.png",
        "precio":700,
        "stock":80,
        "descripcion":"Espinacas frescas y nutritivas, perfectas para ensaladas y batidos verdes. Estas espinacas son cultivadas bajo prácticas orgánicas que garantizan su calidad y valor nutricional."

    },
    {
        "id": 6,
        "nombre":"Pimientos Tricolores",
        "imagen":"../img/pimenton.png",
        "precio":1500,
        "stock":120,
        "descripcion":"Pimientos rojos, amarillos y verdes, ideales para salteados y platos coloridos. Ricos en antioxidantes y vitaminas, estos pimientos añaden un toque vibrante y saludable a cualquier receta."

    }
]

const section = document.getElementById("productosEstrella");
console.log(section);

const contenedorCards = document.createElement("div");
contenedorCards.className = "contenedor-cards row g-3";

section.appendChild(contenedorCards);

for (const i of productosEstrellas){
    const col = document.createElement("div");
    col.className = "col-12 col-sm-6 col-md-4 col-lg-2";

    const card = document.createElement("div");
    card.className = "card h-100 d-flex flex-column test-center p-2";
    contenedorCards.appendChild(card);

    const nombreProducto = document.createElement("h5");
    nombreProducto.textContent = i.nombre;
    nombreProducto.className = "titulo-producto";
    card.appendChild(nombreProducto);

    const imagenProducto = document.createElement("img");
    imagenProducto.src = i.imagen;
    imagenProducto.className = "imagen-producto";
    card.appendChild(imagenProducto);

    const precioProducto = document.createElement("p");
    precioProducto.className = "precio-producto mt-auto mb-2";
    precioProducto.textContent = "$ "+i.precio+" x Kg";
    card.appendChild(precioProducto);

    const contenedorBoton = document.createElement("div");
    contenedorBoton.className = "contenedor-boton";
    card.appendChild(contenedorBoton);

    const botonIrAProducto = document.createElement("button");
    botonIrAProducto.textContent = "Ir a producto";
    botonIrAProducto.className = "btn btn-outline-success";
    botonIrAProducto.addEventListener("click", function(){
        ir(i);
    })
    contenedorBoton.appendChild(botonIrAProducto);

    col.appendChild(card);
    contenedorCards.appendChild(col);
}

