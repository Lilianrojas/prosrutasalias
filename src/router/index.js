import Vue from "vue"
import Router from "vue-router"
//import Inicio from "../views/inicio.vue"
//import SobreMi from "../views/sobreMi.vue"
//import Contacto from "../views/contacto.vue"
//import Post from "../views/post.vue"
import Administrador from  "../views/administrador.vue"
import Inexistente from "../views/inexistente.vue"


Vue.use(Router)
export default new Router ({
    mode:'history',
    routes:[
        {
            path:'/',
            component: ()=>import("../views/inicio.vue"), /* para que se cargue mas rapido, divide en varios partes*/ 
            name: "Inicio"

        },
        { //redireccion
            path:'/home',
            redirect:'/'
        },
        {  // otra forma de redireccionar con el name
            path:'/inicio',
            redirect: {name:'Inicio'}
        },
        {
            path:'/portada',
            redirect:'/',
        },
        {
            path:'/contacto',
            component: ()=>import("../views/contacto.vue"),
            name: "Contacto",
            alias:['/contactame']
        },
        {
            path:'/sobreMi',
            component: ()=>import("../views/sobreMi.vue"),
            name: "Sobre-mi",
            alias:['/acerca'],
        },
        {
            path:'/post',
            component: ()=>import("../views/post.vue"),
            name: "Post",
            children: [{
                path:':articulo', // se hace coincidir con cualquier palabra que venga despues del /post
                component: ()=> import ("../components/articulo.vue")
            }]
        },
        {
            path:'/administrador/:entrada',
            component: Administrador, 
            props: true,
            name:"Administrador"
        },   
        {
            path:'*',
            component: Inexistente
        }
    ]
})
