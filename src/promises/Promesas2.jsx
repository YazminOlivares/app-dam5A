function fcnSumarLento( numero ){
    return new Promise( function( resolve, reject ){
        setTimeout( function(){
            resolve( numero + 1);
        }, 800);
    });
}