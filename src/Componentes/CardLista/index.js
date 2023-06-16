import React from "react";
import { useState } from "react";
import CardView from "../CardView";

function CardLista(props) {
  fetch("https://jsonplaceholder.typicode.com/posts") // Substitua pela URL do webservice real
    .then((response) => response.json())
    .then((data) => {
      setDados(data);
    })
    .catch((error) => {
      console.error("Erro ao obter dados do webservice:", error);
    });

  const [dados, setDados] = useState([]);

  return (
    <div>
      {dados.map((card) => (
        <CardView
          key={card.id}
          Titulo={card.title}
          Conteudo={card.body}
        ></CardView>
      ))}
    </div>
  );
}

export default CardLista;
