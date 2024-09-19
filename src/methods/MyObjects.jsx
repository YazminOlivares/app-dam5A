function MyObjects() {

    const person = {
        nombre: 'Yazmin',
        edad: 22,
        direccion: {
            pais: 'Mexico',
            estado: 'Nayarit',
            ciudad: 'Tepic',
            direccion: 'col.'
        }
    };

    console.log("JSON Person:", JSON.stringify(person, null, 2))

    return (
        <>
            <div>
                <h1>
                    Programa de Objectos Literales
                </h1>
                <h2>
                    <code> 
                        <pre> 
                            {JSON.stringify(person, null, 2)} 
                        </pre> 
                    </code> 
                </h2>
            </div>
       
        </>
    );
};

export default MyObjects;