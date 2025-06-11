import logo from '../assets/logo.jpg';
import '../App.css';

function Header() {
  return (
    <>
    <div className="header">
      <a href="/"><img src={logo} className="logo"></img>Logo</a>
      <div className="content">
        <a href="">Dashboard</a>
        <a href="">TLS Validator</a>
        <a href="">Reports</a>
        <a href="">Admin Center</a>
        <a href="">Fred</a>
        
      
      </div>

      
    </div>
    </>
  )
    }
    export default Header;