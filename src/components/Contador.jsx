import React from "react";
import { useState } from "react";

export const Contador = () => {

    const [valor, setValor] = useState(0);

    const acumular = () => {
        setValor( valor + 1 );
    };

    const decrementar = () => {
        setValor( valor - 1 );
    };

    console.log(valor);

    return(
        <div>
            <h1>Aprender useState</h1>
            <h2>Contador: <small>{valor}</small></h2>
            <button onClick={() => acumular()}>Sumar (+1)</button>
            &nbsp;
            <button onClick={() => decrementar()}>Restar (-1)</button>
        </div>
    )
};