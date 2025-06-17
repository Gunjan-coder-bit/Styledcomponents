
import styled from "styled-components";
import Logosrc from "../assets/logo.jpg"


const StyleHeader = styled.div`
  background-color: ${(props) => props.bgcolor}; 
  padding: 20px 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  height: 50px;
  width: 96%;
`;

const StyleImage = styled.img`
  width: 30px;
  height: 30px;
  margin-right:40px;

`;
const StyledList=styled.div`
display: flex;
  gap: 10px;
`;
const StyledlistItems=styled.a`
text-decoration: none;
  color: black;
  font-size: 14px;
  margin-right:20px
  padding:10px`;

function Header({ backgroundColor }) {
  return (
    <StyleHeader bgcolor={backgroundColor}>
      
      <StyleImage src={Logosrc} alt="Logo" />
      <StyledList>
        <StyledlistItems>Dashboard</StyledlistItems>
        <StyledlistItems>TLS Validator</StyledlistItems>
        <StyledlistItems>Reports</StyledlistItems>
        <StyledlistItems>Admin Center</StyledlistItems>
        <StyledlistItems> Fred</StyledlistItems>
      </StyledList>
      
    </StyleHeader>
  );
}





export  default Header;
