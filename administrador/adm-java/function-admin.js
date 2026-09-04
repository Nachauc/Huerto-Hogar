let modalBootstrap = null;

const productosEstrellaIniciales = [
    {
        "id": 1,
        "nombre": "Manzana Fuji",
        "imagen": "/administrador/adm-img/manzana.png",
        "precio": 1200,
        "stock": 150,
        "descripcion": "Manzanas Fuji crujientes y dulces, cultivadas en el Valle del Maule. Perfectas para meriendas saludables o como ingrediente en postres. Estas manzanas son conocidas por su textura firme y su sabor equilibrado entre dulce y ácido."

    },
    {
        "id": 2,
        "nombre": "Naranjas Valencia",
        "imagen": "/administrador/adm-img/naranja.png",
        "precio": 1000,
        "stock": 200,
        "descripcion": "Jugosas y ricas en vitamina C, estas naranjas Valencia son ideales para zumos frescos y refrescantes. Cultivadas en condiciones climáticas óptimas que aseguran su dulzura y jugosidad."
    },
    {
        "id": 3,
        "nombre":"Plátanos Cavendish",
        "imagen":"/administrador/adm-img/platano.png",
        "precio":800,
        "stock":250,
        "descripcion":"Plátanos maduros y dulces, perfectos para el desayuno o como snack energético. Estos plátanos son ricos en potasio y vitaminas, ideales para mantener una dieta equilibrada."

    },
    {
        "id": 4,
        "nombre":"Zanahorias Orgánicas",
        "imagen":"/administrador/adm-img/zanahoria.png",
        "precio":900,
        "stock":100,
        "descripcion":"Zanahorias crujientes cultivadas sin pesticidas en la Región de O'Higgins. Excelente fuente de vitamina A y fibra, ideales para ensaladas, jugos o como snack saludable."

    },
    {
        "id": 5,
        "nombre":"Espinacas Frescas",
        "imagen":"/administrador/adm-img/espinaca.png",
        "precio":700,
        "stock":80,
        "descripcion":"Espinacas frescas y nutritivas, perfectas para ensaladas y batidos verdes. Estas espinacas son cultivadas bajo prácticas orgánicas que garantizan su calidad y valor nutricional."

    },
    {
        "id": 6,
        "nombre":"Pimientos Tricolores",
        "imagen":"/administrador/adm-img/pimenton.png",
        "precio":1500,
        "stock":120,
        "descripcion":"Pimientos rojos, amarillos y verdes, ideales para salteados y platos coloridos. Ricos en antioxidantes y vitaminas, estos pimientos añaden un toque vibrante y saludable a cualquier receta."
    }
];

function obtenerProductosEstrella() {
    let productos = JSON.parse(localStorage.getItem("productosEstrellas"));

    if (!productos || productos.length === 0) {
        localStorage.setItem("productosEstrellas", JSON.stringify(productosEstrellaIniciales));
        productos = productosEstrellaIniciales
    }
    return productos;
}

function renderizarTabla() {
    const productos = obtenerProductosEstrella();
    const tabla = document.getElementById("tablaProductosAdmin");

    if (!tabla) return;
    tabla.innerHTML = "";

    productos.forEach(producto => {
        const tr = document.createElement("tr");

        tr.innerHTML = `
        <td class="fw-bold">${producto.id}</td>
        <td>
            <img src="${producto.imagen}" alt="${producto.nombre}" style="width: 30px; heigth: 30px; object-fit cover; border-radius: 4px" onerror="this.onerror=null; this.src='https://via.placeholder.com/45?text=img';">
        </td>
        <td>${producto.nombre}</td>
        <td>${producto.precio.toLocaleString("cl-CL")}</td>
        <td>
            <span class="badge ${producto.stock <= 10 ? 'bg-danger' : 'bg-success'}">
                ${producto.stock} un.
            </span>
        </td>
        <td>
            <button class="btn btn-sm btn-outline-primary me-1" onclick="editarProducto('${producto.id}')">Editar</button>
            <button class="btn btn-sm btn-outline-danger" onclick="eliminarProducto(${producto.id})">Eliminar</button>
        </td>
    `;
        tabla.appendChild(tr);
    });
}

function abrirModalNuevoProducto(){
    document.getElementById("formProducto").reset();
    document.getElementById("editandoId").value = "";
    document.getElementById("prodId").disabled = false;
    document.getElementById("modalProductoLabel").textContent = "Nuevo producto";

    modalBootstrap.show();
}


document.addEventListener("DOMContentLoaded", () => {
    renderizarTabla();
});

function eliminarProducto(id) {
    if (confirm(`¿Seguro que deseas eliminar el producto ${id}?`)) {
        let productos = obtenerProductosEstrella();
        productos = productos.filter(p => p.id !== id);

        localStorage.setItem("productosEstrellas", JSON.stringify(productos));
        renderizarTabla();
    }
}

function editarProducto(id) {
    const productos = obtenerProductosEstrella();
    const producto = productos.find(p => p.id === parseInt (id));

    if (!producto) return;

    document.getElementById("editandoId").value = producto.id;
    document.getElementById("prodId").value = producto.id;
    document.getElementById("prodId").disabled = true;
    document.getElementById("prodNombre").value = producto.nombre;
    document.getElementById("prodImagen").value = producto.imagen;
    document.getElementById("prodPrecio").value = producto.precio;
    document.getElementById("prodStock").value = producto.stock;
    document.getElementById("prodDescripcion").value = producto.descripcion || "";
    document.getElementById("modalProductoLabel").textContent = "Editar Producto";

    modalBootstrap.show();
}

function guardarProducto(gp) {
    gp.preventDefault();

    const editandoId = document.getElementById("editandoId").value;
    const id = parseInt(document.getElementById("prodId").value);
    const nombre = document.getElementById("prodNombre").value.trim();
    const imagen = document.getElementById("prodImagen").value.trim();
    const precio = parseFloat(document.getElementById("prodPrecio").value);
    const stock = parseInt(document.getElementById("prodStock").value);
    const descripcion = document.getElementById("prodDescripcion").value.trim();

    let productos = obtenerProductosEstrella();
    if (editandoId) {
        productos = productos.map(p => {
            if (p.id === parseInt(editandoId)) {
                return { id: p.id, nombre, imagen, precio, stock, descripcion };
            }
            return p;
        });
    }else{
        if (productos.some(p => p.id === id)){
            alert("El Id ya existe. Ingrese un ID unico");
            return;
        }
        
        productos.push({id, nombre, imagen, precio, stock, descripcion});
    }
    
    localStorage.setItem("productosEstrellas", JSON.stringify(productos));
    renderizarTabla();
    modalBootstrap.hide();
}

document.addEventListener("DOMContentLoaded",() =>{
    modalBootstrap = new bootstrap.Modal(document.getElementById("modalProducto"));
    document.getElementById("btnAgregarProducto").addEventListener("click", abrirModalNuevoProducto);
    document.getElementById("formProducto").addEventListener("submit", guardarProducto)
    renderizarTabla();
})