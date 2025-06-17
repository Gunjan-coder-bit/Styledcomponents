import styled from "styled-components";
import { FaCircleDot } from "react-icons/fa6";
import { IoMdArrowDropdown } from "react-icons/io";
import { useState } from "react";
import Table from "./Table";



const StyleContent = styled.section`
  display: flex;
  height: 100vh;
  gap: 16px;
  padding: 16px;
  background-color: #f4f6f8;
`;

const StyleBlock = styled.div`
  background-color: midnightblue; 
  width: 22%;
  padding: 20px 0;
  border-radius: 8px;
  overflow-y: auto;
`;

const StyledBlock2 = styled.div`
  background-color: #f4f34f45;
  width: 78%;
  padding: 30px;
  border-radius: 8px;
  overflow-y: auto;
  text-align:center;
`;

const StyleHeading = styled.h2`
  font-size: 20px;
  color: #ffffff;
  text-align: left;
  padding: 0 24px;
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
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
const arr=[{ "cs_score": 1, "csc_friendlyName": "Unacceptable", "cs_friendlyName": "Broken", "name": "TLS 1.0", "csc_name": "UNACCEPTABLE", "id": 4, "cs_type": "protocol", "cs_name": "BROKEN", "group": ["Connection"] }, 
    { "cs_score": 1, "csc_friendlyName": "Unacceptable", "cs_friendlyName": "Broken", "name": "TLS_KRB5_WITH_3DES_EDE_CBC_MD5", "csc_name": "UNACCEPTABLE", "id": 36, "cs_type": "cipherSuite", "cs_name": "BROKEN", "group": ["Connection"] }, 
    { "cs_score": 502, "csc_friendlyName": "Caution", "purpose": 4, "cs_friendlyName": "Unknown or Custom", "csc_name": "CAUTION", "oid": null, "cryptoAlgorithm": 59, "cs_name": "UNKNOWN_OR_CUSTOM", "isDefault": false, "name": "KRB5", "variant": null, "id": 372, "friendlyName": "KRB5", "cs_type": "cryptoPrimitive", "group": ["Connection"] }, 
    { "cs_score": 1504, "csc_friendlyName": "Quantum Safe", "purpose": 2, "cs_friendlyName": "QS - Security Level 5", "csc_name": "STRONG_QSC", "oid": null, "cryptoAlgorithm": 107, "cs_name": "QS - Security Level 5", "isOverriden": false, "isDefault": true, "name": "3DES", "variant": null, "id": 523, "friendlyName": "3DES", "cs_type": "cryptoPrimitive", "group": ["Connection"] },
     { "cs_score": 3, "csc_friendlyName": "Unacceptable", "purpose": 6, "cs_friendlyName": "Misused", "csc_name": "UNACCEPTABLE", "oid": null, "cryptoAlgorithm": 17, "cs_name": "MISUSED", "isOverriden": false, "isDefault": true, "name": "CBC", "variant": null, "id": 66, "friendlyName": "CBC", "cs_type": "cryptoPrimitive", "group": ["Connection"] }, 
     { "cs_score": 1, "csc_friendlyName": "Unacceptable", "purpose": 3, "cs_friendlyName": "Broken", "csc_name": "UNACCEPTABLE", "oid": null, "cryptoAlgorithm": 64, "cs_name": "BROKEN", "isDefault": false, "name": "MD5", "variant": null, "id": 387, "friendlyName": "MD5", "cs_type": "cryptoPrimitive", "group": ["Connection"] }, 
     { "cs_score": 3, "csc_friendlyName": "Unacceptable", "purpose": 5, "cs_friendlyName": "Misused", "csc_name": "UNACCEPTABLE", "oid": null, "cryptoAlgorithm": 52, "cs_name": "MISUSED", "isDefault": false, "name": "HMAC-MD5-LT-128", "variant": null, "id": 355, "friendlyName": "HMAC-MD5-LT-128", "cs_type": "cryptoPrimitive", "group": ["Connection"] }]
   
  

   

function Content() {
    const [visible, setVisible] = useState(false);
      const toggleMenu = () => {
        setVisible(!visible);
        

        ;
        };

  return (
    <StyleContent>
      <StyleBlock>
        <StyleHeading>Connection Crypto<Button onClick={toggleMenu}
        ></Button> </StyleHeading>
        {visible &&(
        <>
        <StyleItem>Unacceptable<StyleIcon /></StyleItem>
        <StyleItem>Cautions <StyleIcon /></StyleItem>
        <StyleItem>Strong <StyleIcon /></StyleItem>
        <StyleItem>Quantum Safe <StyleIcon /></StyleItem>
        <StyleItem>Not scored <StyleIcon /></StyleItem>
        </>
        )}
        <StyleHeading>Crypto Primitives</StyleHeading>
        <StyleItem>Signature <StyleIcon /></StyleItem>
        <StyleItem>MAC <StyleIcon /></StyleItem>
        <StyleItem>Higher Scale <StyleIcon /></StyleItem>

        <StyleHeading>Network Details</StyleHeading>
        <StyleItem>Protocol <StyleIcon /></StyleItem>
        <StyleItem>Protocol Type <StyleIcon /></StyleItem>

        <StyleHeading>Incoming Zone</StyleHeading>
        <StyleItem>Zone In <StyleIcon /></StyleItem>

        <StyleHeading>Outgoing Zone</StyleHeading>
        <StyleItem>Zone Out <StyleIcon /></StyleItem>
      </StyleBlock>

      <StyledBlock2>DATA
      <Table data={arr} />
      </StyledBlock2>
     
    </StyleContent>
  );
}

export default Content;
