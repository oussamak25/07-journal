 


//aqui importamos todos los archivo saction mutation etc del 

 
import * as actions from './actions'
import * as getters from './getters'
import * as mutations from './mutations'
import state from './state'

//esto es lo unico que cambia cmabir el nombre y la export
const dayBook = {

    namespaced: true,
    actions,
    getters,
    mutations,
    state
}


export default dayBook