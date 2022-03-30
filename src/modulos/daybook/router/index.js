
/* exportamos por defecto  */
export default {

    name: 'dayBook',
    component: () => import(/* webpackChunkName: "daybook" */ '@/modulos/daybook/layouts/DayBookLayout.vue'),
    children: [
        //aqui pondriamos las rutas hijas
        {
                    
            path: '',
            name: 'no-entry',
            component: () => import(/* webpackChunkName: "noEntry" */ '@/modulos/daybook/views/NoEntrySelected.vue')
    
        },
        {
            //esta ruta recibe un id como argumento        
            path: ':id',
            name: 'entry',
            component: () => import(/* webpackChunkName: "Entry" */ '@/modulos/daybook/views/EntryView.vue')
    
        }
    
    ]
}