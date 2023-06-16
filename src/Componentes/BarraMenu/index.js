import React from "react";
import styled from "styled-components"; 

const Nav = styled.nav`
  padding: 15px;
  background-color: #333;
  color: #fff;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

const MenuList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: left;
`;

const MenuItem = styled.li`
  margin: 0 10px;
`;

const MenuLink = styled.a`
  color: #fff;
  text-decoration: none;
  padding: 10px;
  border-radius: 5px;

  &:hover {
    background-color: #555;
  }
`;

class BarraMenu extends React.Component {
  render() {
    return (
      <Nav>
        <MenuList>
          <MenuItem>
            <MenuLink href="#">Home</MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink href="#">Sobre</MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink href="#">Serviços</MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink href="#">Contato</MenuLink>
          </MenuItem>
        </MenuList>
      </Nav>
    );
  }
}

export default BarraMenu;
