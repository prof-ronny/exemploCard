import BarraMenu from "./Componentes/BarraMenu";
import "./styles.css";
import ContainerPrincipal from "./Componentes/ContainerPrincipal";
import CardView from "./Componentes/CardView";

export default function App() {
  return (
    <div className="App">
      <BarraMenu />
      <ContainerPrincipal>
        <CardView Titulo="Meu Titulo">Meu Conteudo</CardView> 
        <CardView Titulo="Meu Segundo Titulo">Meu segundo conteudo</CardView>
        <CardView Titulo="Meu Terceiro Titulo"> <img src="/img/image1.jpg" style={{width: '100%'}}></img></CardView> 
      </ContainerPrincipal>
    </div>
  );
}
