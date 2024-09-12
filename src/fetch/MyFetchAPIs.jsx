function MyFetchAPIs() {

    function fcnXMLHttpRequest() {
        console.log("¡API ejecutada por XMLHttpRequest!");
        var request = new XMLHttpRequest();
        request.open('GET', 'https://reqres.in/api/users', true );
        request.send(null);
       
        return new Promise(function(resolve, reject){
       
            request.onreadystatechange = function( state ){
           
                if (request.readyState === 4) {
                    
                    var resp = request.response;
                    var respObj = JSON.parse(resp);
                    resolve(respObj.data);

                };       
          };
        });
    };
 
    /*fcnXMLHttpRequest()
    .then (response=> {
            console.log('Response XMLHttp:', response);
    });*/

    function fcnFetchRequest(){

        console.log("Ejecutando API con Fetch");
        /*fetch('https://reqres.in/api/users')
        .then(resp => {

            //console.log("Respuesta del Fetch: ", resp);
            resp.json().then( respjson => {
                console.log("Respuesta del Fetch: ", respjson);
            });
        });*/

        fetch('https://reqres.in/api/users')
        .then(resp => resp.json())
        .then(respObj => {

            //console.log(respObj);
            //console.log(respObj.page);
            //console.log(respObj.per_page);
            console.log(respObj.data);

        });
    };

    fcnFetchRequest();

    return (
        <>
            <div>
                <h1>
                    Programa para FETCH APIs
                </h1>
            </div>
    
        </>
    );
};
export default MyFetchAPIs;