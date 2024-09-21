import { useState } from "react"

export const useForm = ( initFormulario = {} ) => {

    const [formulario, setFormulario] = useState(initFormulario)

    const onChange = ( value, campo ) => {
        setFormulario({
            ...formulario,
            [campo]: value
        });
    }

    return {
        ...formulario,
        formulario,
        onChange
    }
}