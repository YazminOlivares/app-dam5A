function MyFunctions() {

    function fcnSumarUno( numero, fcnResultadoCallBack ){
        //return numero + 1;
        setTimeout (function(){
            fcnResultadoCallBack( numero + 1);
        },800);
    }

    console.log("Programa de Funciones");

    //let Resultado = fcnSumarUno (5);
    //console.log(Resultado);

    fcnSumarUno(5, function(nuevoValor1){
        //console.log("Resultado:", nuevoValor1);
        fcnSumarUno(nuevoValor1, function(nuevoValor2){
            console.log("Resultado:", nuevoValor2);
        });
    });

    return (
        <>
            <div>
                <h1>Programa de Funciones</h1>
            </div>
        </>
    );
};

export default MyFunctions