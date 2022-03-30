<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">

    <h1> Hola mundo </h1>
    <button @click="goToDayBook" class="btn btn-primary">Primero</button>
    <button @click="goToDayBook" class="btn btn-secondary">Segundo</button>
    <button @click="goToDayBook" class="btn btn-success">Success</button>


    
  </div>
</template>

<script>
export default ({
  //comprobacion de que podemos accceder a la pagina del modulo del dayBook
  //usando el nombe y todo esto desde una pagina desde la raiz 
  //usando  $router pq es un plugin añadido al main y push para abrir la pagina
  //con el nombre 
  methods: {
    //redireccionamos al no-entrry que es el que sale por defecto
    goToDayBook(){
      this.$router.push({name: 'no-entry'})
    }
  }



})
</script>


