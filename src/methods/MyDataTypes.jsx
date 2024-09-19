function MyDataTypes() {
   
    let IdNombre = 'Frank';
    IdNombre = 706;

    const nombre = "Yazmin";
    const apellidos = "Olivares Berdusco";
    const numctrl = 20400787;
    const fecha = new Date();

    const numctrl2 = 20;
    const experiencia = 25;
    const estatus = "Activo";
    console.log("IdNombre:", IdNombre);
    
    return (
        <>
            <div>
                <h1>
                    Programa para conocer diferentes Tipos de de Datos
                </h1>
                Alias: {IdNombre} <br/>
                Nombre: {nombre} <br/>
                Apellidos: {apellidos} <br/>
                No. control: {numctrl} <br/>
                No. control2: {numctrl2} <br/>
                Fecha de registro: {fecha.toString()} <br/>
                Años experiencia: {experiencia} <br/>
                Estatus: {estatus} <br/>
            </div>
       
        </>
    );
};
export default MyDataTypes;