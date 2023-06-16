import BarraMenu from "./Componentes/BarraMenu";
import "./styles.css";
import ContainerPrincipal from "./Componentes/ContainerPrincipal";
import CardView from "./Componentes/CardView";

export default function App() {
  return (
    <div className="App">
      <BarraMenu />
      <ContainerPrincipal>
        <CardView />
        <CardView />
        <CardView />
      </ContainerPrincipal>
    </div>
  );
}
