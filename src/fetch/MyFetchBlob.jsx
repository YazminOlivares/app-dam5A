function MyFetchBlob(){

    fetch('src/images/imagen1.jpeg')
    .then(resp => resp.blob())
    .then(image => {
        document.getElementById("IdImg1").src = URL.createObjectURL(image);
    });

    fetch('src/images/imagen2.jpeg')
    .then(resp => resp.blob())
    .then(image => {
        document.getElementById("IdImg2").src = URL.createObjectURL(image);
    });

    return(
        <>
            <div>
                <h1>Programa para FETCH API BLOB</h1>
            </div>
        </>
    );
}

export default MyFetchBlob