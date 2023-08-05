const url="localhost:8081/API/Inventario/vehiculos"

async function getAll() {
    return await fetch(url).then(r=>r.data)
}