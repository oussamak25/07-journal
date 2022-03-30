import { createStore } from 'vuex'

//importamos el store de dayBook
import dayBook from '@/modulos/daybook/store/dayBook'
// Create a new store instance.

//una vez hecho esto debemos poner nuesto store en el punto mas alto de nuesta app 
//es decir en el main
const store = createStore({
    modules: {  
        dayBook: dayBook
    }
})

export default store