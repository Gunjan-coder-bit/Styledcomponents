import styled from "styled-components";
import { FaCircleDot } from "react-icons/fa6";
import { IoMdArrowDropdown } from "react-icons/io";
import { useState } from "react";

const StyleContent = styled.section`
  background-color: gray;
  padding: 10px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const StyleBlock = styled.div`
  background-color: midnightblue;
  width: 20%;
`;

const StyleHeading = styled.h2`
  font-size: 24px;
  color: white;
  text-align: left;
  padding: 0px 30px;
`;

const StyleItem = styled.div`
  padding: 10px 12px;
  width: 86%;
  color: #fff;
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyleIcon = styled(FaCircleDot)`
  height: 10px;
  width: 20px;
  color: white;
`;
const Button=styled(IoMdArrowDropdown)`
  padding:10px 15px;

`

function LeftPanel(plList) {
    
    // console.log("List items",plList.panelList[0].cryptoTitle)
    const [visible, setVisible] = useState(false);
    const toggleMenu = () => {
        setVisible(!visible);
      }
return (
    <StyleContent>
      <StyleBlock>

        <StyleHeading>{plList.panelList.cryptoTitle},
        <Button onClick={toggleMenu}
        ></Button> </StyleHeading>
        {visible &&(
        <>            
        {plList.panelList.cryptoItems.map((item,index)=>
         <StyleItem key={index}> 
         {item}
         <StyleIcon /></StyleItem>)}
        </>
        )}
        </StyleBlock>
    </StyleContent>
  );
}

export default LeftPanel;
