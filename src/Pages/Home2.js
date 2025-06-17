import LeftPanel from "../styledComponent/Leftpanel";
import Header from "../styledComponent/styleHeader";
// import Table from "../styledComponent/Table";

function Home2() {
  return (
    <>
      <Header backgroundColor="green" />
      <LeftPanel 
        panelList={{
          cryptoTitle: 'Connection Crypto',
          cryptoItems: ['Unacceptable', 'Cautions', 'Strong', 'Quantum Safe', 'Not scored'],
        }} 
      />
      
    </>
  );
}

export default Home2;
