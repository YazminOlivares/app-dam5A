function MyPromisesAll() {
    return (
        <>
            <div>
                <h1>
                    Programa de Funciones con Promesas ALL
                </h1>
            </div>
       
        </>
    );
};

function fcnSumarLento(numero) {
    return new Promise( function( resolve, reject ){
        if(numero >= 5 ){
            reject('Sumar Lento Fallo');
        }
        setTimeout( function(){
            resolve( numero + 1);
        }, 800);
    });
}

let  fcnSumarRapido = (numero) => {
    return new Promise( function( resolve, reject ){
        setTimeout( function(){
            resolve( numero + 1 );
        }, 300);
    });
}

/*fcnSumarLento(5)
.then(respuesta=>{
    console.log('Respuesta Lenta:', respuesta);
});

fcnSumarRapido(10)
.then(respuesta=>{
    console.log('Respuesta Rapida:', respuesta);
});

Promise.all([fcnSumarLento(4), fcnSumarRapido(10)])
.then(respuestas =>{
    console.log('Respuestas:', respuestas);
})
.catch(error =>{
    console.log("Error en todas las promesas: ", error);
});*/

let arregloVarios = [fcnSumarLento(4), fcnSumarRapido(10), true, '¡Hola Mundo!'];

Promise.all(arregloVarios)
.then(respuestas =>{
    console.log('Respuestas:', respuestas);
})
.catch(error=>{
    console.log("Error en todas las promesas: ", error);
});

export default MyPromisesAll;