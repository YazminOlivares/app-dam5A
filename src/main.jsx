import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import App from './App.jsx'
import './index.css'

import Funcion from './funtions/MyFunctions.jsx'
import Promesa from './promises/MyPromises.jsx'
//import MyPromisesAll from './promises/MyPromisesAll.jsx'
//import MyPromisesRace from './promises/MyPromisesRace.jsx'
//import MyFetchsAPIs from './fetch/MyFetchAPIs.jsx'
import MyFetchsAPIs from './fetch/MyFetchs.jsx'
import MyFetchPut from './fetch/MyFetchPut.jsx'
import MyFetchPost from './fetch/MyFetchPost.jsx'
import MyFetchBlob from './fetch/MyFetchBlob.jsx'
import MyDataTypes from './methods/MyDataTypes.jsx'
import MyObjects from './methods/MyObjects.jsx'
import { Contador } from './components/Contador.jsx'
import { Login } from './components/Login.jsx'
import { ContadorHook } from './components/ContadorHook.jsx'
import { Usuarios } from './components/Usuarios.jsx'
import { Formularios } from './components/Formularios.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Formularios/>
  </StrictMode>
)
