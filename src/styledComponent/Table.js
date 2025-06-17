import styled from "styled-components"
const Tablenew = styled.table`

padding:50px;

  
  
`;
const TableContainer = styled.tbody`
  padding: 20px;
`;


const Tr = styled.tr`
  background: #f9f9f9;

  &:nth-child(even) {
    background: pink;
  }`
    ;
    const Th = styled.th`
    padding: 10px;
    border: 2px solid black;
  `;

const Td = styled.td`
  padding: 10px;
  border: 2px solid black;
`;

function Table({data}) {

    return (
        
        <Tablenew>
        <TableContainer>
        <Tr><Th>name</Th>
        <Th>cs_score</Th>
        <Th>cs_name</Th></Tr>
            <>
                {data.map((item, index) =>
               
                    
                    <Tr key={index} >
                        

                        <Td >
                            {item.cs_score}

                        </Td>
                        
                        <Td >
                            {item.name}

                        </Td>
                        
                        <Td >
                            {item.cs_score}

                        </Td>
                    </Tr>
             
          
            )}
            </>
        </TableContainer>
        </Tablenew>









    )
}
export default Table;