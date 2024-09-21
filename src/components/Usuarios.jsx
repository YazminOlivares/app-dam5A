import { useUsuarios } from "../components/hooks/useUsuarios";

export const Usuarios = () => {

    const [usuarios, paginaAnterior, paginaSiguiente] = useUsuarios([]);

    return (
        <>
            <h3>Usuarios</h3>
            <table className = "table" border="2">
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
                <tbody>
                    {
                        usuarios.map( usuario => (
                            <tr key={usuario.id}>
                                <td>
                                    <img
                                        src={usuario.avatar}
                                        style={{ width: 50 }}
                                    />
                                </td>
                                <td> {usuario.first_name} </td>
                                <td> {usuario.email} </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            <button className="btn btn-primary" onClick={paginaAnterior}> Anterior </button>
            <button className="btn btn-primary" onClick={paginaSiguiente}> Siguiente </button>
        </>
    )
}