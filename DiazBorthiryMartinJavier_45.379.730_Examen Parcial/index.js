const productos = [];

let contadorID = 1;

const agregarbtn = document.getElementById("agregar")

function category(id) {
    switch (id) {
        case "1":
            return "Notebooks";
        case "2":
            return "Escritorio";
        case "3":
            return "Accesosorios";
        }
    }

agregarbtn.addEventListener("click",e=>{{
    const nombre = document.getElementById("name").value;
    const precio = parseFloat(document.getElementById("price").value);
    const descripcion = document.getElementById("desc").value;
    const categoria = document.getElementById("category").value;
    const estado = true; 

    if (nombre && categoria) {
      
        const id = contadorID;
        contadorID++;   
        const producto = {
            id: id,
            nombre: nombre,
            precio: precio,
            descripcion: descripcion,
            categoria: categoria,
            estado: estado
        }
        productos.push(producto);


        document.getElementById("name").value = "";
        document.getElementById("price").value = "";
        document.getElementById("desc").value = "";
        actualizarListaProductos()
;}}});

function actualizarListaProductos() {
            const listaProductos = document.getElementById("productosLista");
            listaProductos.innerHTML = "";
        
            for (const producto of productos) {
                if (producto.estado) {
                    const li = document.createElement("li");
                    li.classList.add("card");
                    li.innerHTML = `
                    <div id = "carta2">
                        <label>Nombre:</label> ${producto.nombre}
                        <label>Precio:</label> $${producto.precio.toFixed(2)}
                        <label>Descripción:</label> ${producto.descripcion}
                        <label>Categoría:</label> ${category(producto.categoria)}
                        <button id = "eliminar">Eliminar</button>
                    </div>
                    `;
                    listaProductos.appendChild(li);
                } else {
                    li.remove();                              
                }
            }
        }
const eliminarbtn = document.getElementById("eliminar")

eliminarbtn.addEventListener("click",e=>{
    const producto = productos.find(p => p.id === id);
    if (producto) {
        producto.estado = false
        actualizarListaProductos(); 
        }})
