import NavBar from "./componentes/NavBar/NavBar"
import TituloPrincipal from "./componentes/TituloPrincipal/TituloPrincipal"
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer"

const App = () => {
  return (
    <div>
      <NavBar/>
      <TituloPrincipal texto= "BIENVENIDOS A LA TIENDA"/>
      <ItemListContainer greeting="GRACIAS POR VISITAR NUESTA TIENDA"/>
    </div>
    
  )
}

export default App