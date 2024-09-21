import { useState } from "react"

export const Formularios = () => {

    const [formulario, setFormulario] = useState({
        email: 'test@test.com',
        password: '123' 
    })

    const onChange = ( value, campo ) => {
        setFormulario({
            [campo]: value
        });
    }

    return (
        <>
          <h3>
                Formulario
            </h3>
            <input
                type="text"
                className="form-control"
                placeholder="Email"
                value={formulario.email}
                onChange={({target})=> onChange(target.value, 'email')}
            ></input> 
            <br></br>
            <input
                type="text"
                className="form-control mt-2 mb-2"
                placeholder="Password"
                value={formulario.password}
                onChange={({target})=> onChange(target.value, 'password')}
            ></input>

            <code>
                <pre>
                    {JSON.stringify(formulario, null, 2)}
                </pre>
            </code>
        </>
    )
}