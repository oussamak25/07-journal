<template>

  <div class="entry-list-container">
      <div class="px-2 pt-2">
          <input type="text" class="form-control" placeholder="Buscar entrada"/>
      </div>

      <div class="entry-scrollarea">
        <Entry v-for="item in 100" :key="item"/>
          
          

        
      </div>
  </div>
</template>

<script>
 import {defineAsyncComponent} from 'vue'

export default {
   components: {
    Entry: defineAsyncComponent(()=> import('../components/Entry.vue')),
  }
}
</script>



<style lang="scss" scoped>
/* Hay distintos tipos de style elegimos el style lang:"scss" */


/*  en sass podemo crear funciones para calcular pj el ancho etc como vemo sabajo 
en height calulamos el 100 por 100 del view padre  menos la distancia que indicamos  */
.entry-list-container{
  border-right: 1px solid red;
  height: calc(100vh - 56px);
}

.entry-scrollarea{
  height: calc( 100vh - 105px);
  overflow: scroll;
}

</style>