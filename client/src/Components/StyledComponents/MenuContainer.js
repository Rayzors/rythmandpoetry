import styled from 'styled-components';

const MenuContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr); 
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 40px;
  grid-row-gap: 40px;
  width: 80vw;
  height: 80vh; 
  margin-top: 100px;
  align-self: center;
`;

export default MenuContainer;