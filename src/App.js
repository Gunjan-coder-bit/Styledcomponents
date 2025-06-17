
// import Header from "./styledComponent/styleHeader"
// import Content from "./styledComponent/styleContent"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
// import Home2 from "./Pages/Home2";
// import Home3 from "./Pages/Home3";


function App() {
  return (
    <>
    <BrowserRouter>
     <Routes>
    <Route path="/" element={<Home/>}/>
    {/* <Route path="/home2" element={<Home2/>}/> */}
    {/* <Route path="/home3" element={<Home3/>}/> */}
     {/* <Route path="/" element={ <Header backgroundColor="pink" > </Header> }/> */}
     {/* <Route path="/Content" element={<Content></Content>}/> */}
     </Routes>
     </BrowserRouter>
    
    </>
    
  );
}

export default App;
