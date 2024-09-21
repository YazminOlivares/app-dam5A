import { useEffect, useRef, useState } from "react";
import reqRespApi from "../../api/reqRes";

export const useUsuarios = () => {

const [usuarios, setUsuarios] = useState([]);

    const cargaUsuarios = async () => {
        const response = await
        reqRespApi.get('/users', {
            params: {
                page: refPage.current
            }
        }).
        then( resp => {

            if ( resp.data.data.length > 0 ) {
                setUsuarios(resp.data.data);
            }else{
                alert('No hay más registros');
            }

        }).catch( err => console.log(err))
    }

    const refPage = useRef(0);

    useEffect( () => {
        cargaUsuarios();
    },[]);

    const paginaSiguiente = () => {
        refPage.current ++;
        cargaUsuarios();
    }

    const paginaAnterior = () => {
        refPage.current --;
        cargaUsuarios();
    }

    return [
        usuarios, 
        paginaAnterior,
        paginaSiguiente
    ];

}