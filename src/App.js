import BarraMenu from "./Componentes/BarraMenu";
import "./styles.css";
import CardLista from "./Componentes/CardLista";
import ContainerPrincipal from "./Componentes/ContainerPrincipal";

export default function App() {
  return (
    <div className="App">
      <BarraMenu />
      <ContainerPrincipal>
        <CardLista />
      </ContainerPrincipal>
    </div>
  );
}
