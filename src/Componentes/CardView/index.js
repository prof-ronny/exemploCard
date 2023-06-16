import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  display: inline-block;
  width: 300px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  padding: 16px;
  margin: 3px;
`;

const CardTitle = styled.h3`
  color: #333;
  font-size: 18px;
  margin-bottom: 8px;
`;

const CardText = styled.p`
  color: #666;
  font-size: 14px;
`;

function CardView() {
  return (
    <CardContainer>
      <CardTitle>Titulo</CardTitle>
      <CardText>Conteudo</CardText>
    </CardContainer>
  );
}

export default CardView;
