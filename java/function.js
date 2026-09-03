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

    //NUEVO 🙀

    function actuaizarContador(){
        const contadorElemento = document.getElementById("contadorCarrito");
        if (contadorElemento) {
            let carritoActual = JSON.parse(localStorage.getItem("carrito")) || [];
            contadorElemento.textContent = carritoActual.length > 0 ? `(${carritoActual.length})` : "";
        }
    }
    function agregarAlCarrito(producto){
        let carritoActual = JSON.parse(localStorage.getItem("carrito")) || [];
        carritoActual.push(producto);
        localStorage.setItem("carrito", JSON.stringify(carritoActual))
        actuaizarContador();
        alert(producto.nombre + "se ha añadido al carrito.");
    }
    
const section = document.getElementById("productosEstrella");
if (section) {
    const contenedorCards = document.createElement("div");
    contenedorCards.className = "contenedor-cards row g-3 justify-content-center";
    section.appendChild(contenedorCards);

    for (const i of productosEstrellas) {
        const col = document.createElement("div");
        col.className = "col-12 col-sm-6 col-md-4 col-lg-2";

        const card = document.createElement("div");
        card.className = "card h-100 d-flex flex-column text-center p-2";
        
        const nombreProducto = document.createElement("h5");
        nombreProducto.textContent = i.nombre;
        nombreProducto.className = "titulo-producto fs-6 fw-bold";
        card.appendChild(nombreProducto);

        const imagenProducto = document.createElement("img");
        imagenProducto.src = i.imagen;
        imagenProducto.className = "img-fluid mb-2";
        imagenProducto.style.maxHeight = "100px";
        imagenProducto.style.objectFit = "contain";
        card.appendChild(imagenProducto);

        const precioProducto = document.createElement("p");
        precioProducto.className = "precio-producto text-success fw-bold mt-1 mb-2";
        precioProducto.textContent = "$ " + i.precio;
        card.appendChild(precioProducto);

        const contenedorBoton = document.createElement("div"); 
        contenedorBoton.className = "contenedor-boton mt-auto";

        
        const botonAgregar = document.createElement("button");
        botonAgregar.textContent = "Añadir";
        botonAgregar.className = "btn btn-success btn-sm w-100";
        botonAgregar.addEventListener("click", function(){
            agregarAlCarrito(i);
        });

        contenedorBoton.appendChild(botonAgregar);
    
    
        card.appendChild(contenedorBoton)
        col.appendChild(card);
        contenedorCards.appendChild(col);
    }
}

actuaizarContador();

const contenedorCarrito = document.getElementById("contenedorCarrito");
const totalPagarElemento = document.getElementById("totalPagar")

if (contenedorCarrito) {
    let carritoGuardado = JSON.parse(localStorage.getItem("carrito")) || [];
    let total = 0;
    contenedorCarrito.innerHTML = "";

    if (carritoGuardado.length === 0){
        const mensajeVacio = document.createElement("p");
        mensajeVacio.textContent = "Tu carrito esta vacio";
        mensajeVacio.className = "text-center fs-4 mt-4 text-muted";
        contenedorCarrito.appendChild(mensajeVacio);
    } else {
        for (const item of carritoGuardado){
            total += item.precio;

            const card = document.createElement("div");
            card.className = "card mb-3 w-100 shadow-sm";
            card.style.maxWidth = "500px";

            const row = document.createElement("div");
            row.className = "row g-0 align-items-center p-2";
            card.appendChild(row);

            const colImg = document.createElement("div");
            colImg.className = "col-4 text-center";
            const img = document.createElement("img");
            img.src = item.imagen;
            img.className = "img-fluid rounded";
            img.style.maxHeight = "80px";
            colImg.appendChild(img);
            row.appendChild(colImg);

            const colText = document.createElement("div");
            colText.className = "col-8";

            const cardBody = document.createElement("div");
            cardBody.className = "card-body py-1";

            const titulo = document.createElement("h5");
            titulo.className = "card-tittle mb-1";
            titulo.textContent = item.nombre;

            const precio = document.createElement("p");
            precio.className = "card-text fw-bold text-success mb-0";
            precio.textContent = "$ "+item.precio;

            cardBody.appendChild(titulo);
            cardBody.appendChild(precio);
            colText.appendChild(cardBody);
            row.appendChild(colText);

            contenedorCarrito.appendChild(card);
        }
    }
    if (totalPagarElemento) {
        totalPagarElemento.textContent = "Total: $" + total;
    }
}
//NUEVO 🙀


