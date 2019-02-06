import styled from 'styled-components';

const Burger = styled.button`
  width: 42px;
  height: 42px;
  background: ${(props) => (props.isActive ? '#FFF' : '#000')};
  border-radius: 21px;
  z-index: '999';
  outline: none;
  border: none;
  position: fixed;
  z-index: 999;
  right: 5%;
  top: 65px;
  transition: all ease-in-out 0.2s;
  cursor: pointer;
  padding: 0;
  margin: 0;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;

  ${Burger} svg {
    stroke: ${(props) => (props.isActive ? '#000' : '#fff')};
    fill: ${(props) => (props.isActive ? '#000' : '#fff')};
    transition: all ease-in-out 0.2s;
  }

  ${Burger}:hover {
    background: #fff;
  }

  ${Burger}:hover svg {
    stroke: #000;
    fill: #000;
  }
`;

export default Burger;
