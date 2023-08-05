<template>
  <h1>Inventario</h1>
  <div class="container-tabla">
    <table>
      <thead>
        <th>ID</th>
        <th>Placa</th>
        <th>Marca</th>
        <th>Modelo</th>
        <th>Cilindraje</th>
        <th>Accion</th>
      </thead>
      <tbody v-for="vehiculo in vehiculos">
        <td>{{ vehiculo.id }}</td>
        <td>{{ vehiculo.placa }}</td>
        <td>{{ vehiculo.marca }}</td>
        <td>{{ vehiculo.modelo }}</td>
        <td>{{ vehiculo.cilindraje }}</td>

        <td><button @click="getOne(vehiculo.links)">Visualizar</button></td>
      </tbody>
    </table>
  </div>

  <div class="form-vehiculo">
    <label for="">Id</label>
    <input v-model="vehiculoForm.id" />
    <label for="">Placa</label>
    <input v-model="vehiculoForm.placa" />
    <label for="">Marca</label>
    <input v-model="vehiculoForm.marca" />
    <label for="">Modelo</label>
    <input v-model="vehiculoForm.modelo" />
    <label for="">Cilindraje</label>
    <input v-model="vehiculoForm.cilindraje" />
  </div>
</template>

<script>
//import vehiClient from VehiculoCliente.js;
const url = "http://localhost:8081/API/Inventario/vehiculos";

export default {
  mounted() {
    this.getAll();
  },
  methods: {
    async getAll() {
      const data = await fetch(url).then((r) => r.json());
      this.vehiculos = data;
    },
    async getOne(url) {
      const data = await fetch(url[0].href).then((r) => r.json());
      this.vehiculoForm.id = data.id;
      this.vehiculoForm.placa = data.placa;
      this.vehiculoForm.marca = data.marca;
      this.vehiculoForm.modelo = data.modelo;
      this.vehiculoForm.cilindraje = data.cilindraje;
    },
  },
  data() {
    return {
      vehiculos: null,
      vehiculoForm: {
        id: "",
        placa: "",
        marca: "",
        modelo: "",
        cilindraje: "",
      },
      vehiSelected: null,
    };
  },
};
</script>

<style scoped>
.container-tabla {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px;
}
table {
  width: 800px;
  border: solid 2px black;
  border-radius: 5px;
}
td {
  border: solid 2px black;
}
th {
  border: solid 2px black;
}
.form-vehiculo {
  display: grid;
  justify-content: center;
  align-items: center;

  margin: 20px;
}
input{
  border: solid 2px black;
  font-size: 15px;
}
thead{
    background-color: wheat;
}
</style>