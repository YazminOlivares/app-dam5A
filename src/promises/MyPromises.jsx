function MyPromises() {

    console.log('Programa de promesas');
    
    function fcnSumarUno( numero ){
        /*setTimeout(function(){
        return numero + 1;
        fcnResultadoCallBack( numero + 1 );
        }, 800);*/
        var promesa = new Promise(function(resolve, reject){
            if (numero >= 10 ){
                reject('El número ya es muy alto');
            }
            setTimeout(function(){
                resolve( numero + 1 );
                }, 800);
        });
      return promesa;
    };
   
    /*fcnSumarUno(5).then( function(nuevoNumero){
        console.log(nuevoNumero);
    });

    fcnSumarUno(5).then( nuevoNumero=>{
        console.log(nuevoNumero);
    });

    fcnSumarUno(5).then( nuevoNumero=>{
        console.log("Resultado:",nuevoNumero);
        return fcnSumarUno(nuevoNumero);
    }).then( nuevoNumero=>{
        console.log("Resultado:",nuevoNumero);
        return fcnSumarUno(nuevoNumero);
    }).then( nuevoNumero=>{
        console.log("Resultado:",nuevoNumero);
    });*/

    fcnSumarUno(5)
    .then( fcnSumarUno)
    .then( fcnSumarUno)
    .then( nuevoNumero=>{
        console.log("Resultado:",nuevoNumero);
    }).catch(error =>{
        console.log('Error en la Promesa', error);
    });

    return (
        <>
            <div>
                <h1>
                    Programa de Funciones con Promesas
                </h1>
            </div>
       
        </>
    );
};


export default MyPromises;