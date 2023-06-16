import styled from "styled-components";

const Container = styled.div`
  margin: 0 auto;
  padding: 5;
  width: 70%;
  display: flex-box;
  flex-direction: row;
  flex-wrap: wrap;
  background-color: #eeeeee;
`;

function ContainerPrincipal(props) {
  return <Container>{props.children}</Container>;
}

export default ContainerPrincipal;
