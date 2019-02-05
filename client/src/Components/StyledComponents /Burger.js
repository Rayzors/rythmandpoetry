import styled from 'styled-components';

const Burger = styled.button`
  width: 42px;
  height: 42px;
  background: ${ props => props.isActive ? '#FFF' : "#000" };
  border-radius: 21px;
  z-index: "999";
  outline: none;
  border: none;
  position: fixed;
  z-index: 999;
  right: 100px;
  top: 65px;
  transition: all ease-in-out .2s;

  ${Burger}:hover{
   background: #FFF;
  }



`;

export default Burger;