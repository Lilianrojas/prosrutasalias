<template>
    <div>
        <br><br><br>
        <h1>{{mensaje}}</h1>
    </div>
</template>

<script>
    export default {
        computed:{
            mensaje(){
                if(this.entrada=="simple"){
                    return "Bienvenido a la página de Administrador"
                }
                if(this.entrada=="avanzado"){
                    return "Esta página de administración está en construcción. Intente como administrador simple"
                }
                return "Ruta inexistente"
            }
         
        },
        props:[
            "entrada"
        ]
    }
</script>
