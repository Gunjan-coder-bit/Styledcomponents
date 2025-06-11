
import styled from "styled-components";

const StyleHeader = styled.div`
  background-color: ${(props) => props.bgcolor}; 
  padding: 20px 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  height: 50px;
  width: 100%;
`;

const StyleImage = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 10px;
`;


function Header({ backgroundColor, Logosrc }) {
  return (
    <StyleHeader bgcolor={backgroundColor}>
      Hello World! {backgroundColor}
      <StyleImage src={Logosrc} alt="Logo" />
    </StyleHeader>
  );
}




export default  Header;
