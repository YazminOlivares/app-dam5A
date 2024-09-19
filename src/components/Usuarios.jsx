import reqRespApi from "../api/reqRes"
import { useEffect } from "react"

export const Usuarios = () => {

    useEffect( () => {
        reqRespApi.get('/users').
        then( resp => {
            console.log(resp.data.data);
        }).catch( err => console.log(err))
    },[]);

    return (
        <>
            <h3>Usuarios</h3>
            <table className = "table">
                <thead>
                    <tr>
                        <th>
                            Avatar
                        </th>
                        <th>
                            Nombre
                        </th>
                        <th>
                            email
                        </th>
                    </tr>
                </thead>
            </table>
        </>
    )
}