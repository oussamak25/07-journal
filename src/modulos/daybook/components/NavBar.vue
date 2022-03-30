<template>
    <nav class="navbar bg-primary">
        <a class="navbar-brand text-white" href="">
              <!-- cuando pornes en el src el logo al pinchar encima de este nos redirige a la pagina principal -->
            <img src="@/assets/logo.png" 
                 alt="Vue logo" 
                 height="24"
                 class="d-inline-block align-text-top mx-2"/>

            DayBook


        </a>

        <div class="d-flex">
            <button  class="btn btn-outline-info mx-2">
                <!-- icono de font awesom mirar el cdn importado en public/index.html -->
                <i class="fa-solid fa-arrow-right-from-bracket"></i>            
            </button>


        </div>
    </nav>
</template>