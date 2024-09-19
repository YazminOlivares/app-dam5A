import { useEffect, useReducer } from "react";

const initialState ={
    validando: true,
    token: null,
    username: '',
    nombre: ''
};

function authReducer(state, action){

    switch (action.type) {
        case 'logout':
            return {
                validando: false,
                token: null,
                username: '',
                nombre: ''
            }
        case 'login':
            const {nombre, username} = action.payload;
            return {
                validando: false,
                token: 'MITOKEN1234567890',
                username,
                nombre,
            }
        default:
            return initialState;
    }
}

export const Login = () => {

    const [state, dispatch] = useReducer(authReducer, initialState);

    useEffect( () => {
        setTimeout(() => {
            dispatch({type:'logout'});
        }, 2500);
    }, []);

    if (state.validando){
        return(
            <>
                <h1>Login</h1>
                <div className="alertInfo">
                    Validando Información...
                </div>
            </>
        );
    }

    const login = () => {
        dispatch({
            type: 'login',
            payload: { username: 'Yazmin', nombre:'Yazmin'}
        });
    };

    const logout = () => {
        dispatch({ type: 'logout' });
    };

    return (
        <>
            <h1>Login</h1>
            {
                (state.token)
                ?
                (
                    <div className="alertSucces">
                        Autenticado como: { state.nombre }
                    </div> 
                )
                :
                (
                    <div className="alertDanger">
                        No Autenticado...
                    </div>
                )
            }
            {
                (state.token)
                ?
                (
                    <button className="logoutBtn" onClick={logout}>
                        Logout
                    </button> 
                )
                :
                (
                    <button className="loginBtn" onClick={login}>
                        Login
                    </button>
                )
            }
        </>
    )
}