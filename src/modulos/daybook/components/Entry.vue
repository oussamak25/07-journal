<template>
<!-- cuando se hace click en el div habrimos cargamos la ruta del entryt usando el nombre y pasando el parametro
10 ya que lo hemos definido como id -->
  <div @click="$router.push({ name: 'entry', params: {id: 10}})" class="entry-container mb-3 pointer p-2">

    <div class=" entry-title d-flex">
        <!-- espacio para el titulo -->
        <span class="text-success fs-5 fw-bold">30</span>
        <span class="mx-1 fs-5">Marzo</span>

        <span class="mx-1 fs-light">2022, Miercoles</span>


    </div>

    <div class="entry-description">
        Enim excepteur quis tempor dolore elit. Voluptate amet culpa duis voluptate sit ex adipisicing eu ea. Voluptate in ut pariatur excepteur esse nulla enim pariatur voluptate incididunt anim. Ut amet laboris occaecat sit. Excepteur Lorem tempor voluptate sunt ipsum voluptate labore esse cupidatat cupidatat eiusmod dolor irure proident. Qui fugiat aliquip elit magna excepteur adipisicing culpa ad aliquip id anim elit ullamco.

    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped >
.entry-container{
    border-bottom: 1px solid black;
    transition: 0.2s all ease-in;

    /* asi podemos poner unhover detro de una clase */
    &:hover{
        background-color: lighten($color: grey, $amount: 45);
        transition: 0.2s all ease-in;

    }

    /* podemos tambien crear una clase dentro de un contener */
    .entry-description{
        font-size: 12px;
    }


}
</style>