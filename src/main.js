import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// aqui debemos importar el scss para poder usarlo 

import './styles/styles.scss'

//una vez hecho esto nos dara un eroor (ERROR in ./src/main.js 5:0-30

/* Module not found: Error: Can't resolve 'sass-loader' in 'C:\Desarrollo\CodigoWeb\07-journal')
 */


//para solucionarlo debemos instalar una dependecia de desarrollo  para poder usar sass
//el @10 es pra indicar la version
//con el comando : npm install -D sass-loader@10 sass
//Una vez hecho esto ya tenemos los botones y todas las clases del boostrap


createApp(App).use(store).use(router).mount('#app')
