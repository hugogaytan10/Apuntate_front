

import './App.css'
import AppProvider from './Components/Contexto/AppContext'
import { Rutas } from './Components/Rutas/Rutas'

function App() {

  return (
    <AppProvider>
      <Rutas />
    </AppProvider>
  )
}

export default App
