//import logo from './logo.svg';
import './App.css';
import NavBar from './NavbarComponent';
import LeftPannel from './leftPanel';
import MiddlePannel from './middlePannel';
import RightPannel from './rightPanel';
import FooterPannel from './footerPannel';

function Applet() {
  return (
    <div>
      <NavBar />

      <div style={{display:'flex'}}> 
      
      <LeftPannel />
      <MiddlePannel />
      <RightPannel />
      
      </div>
      <FooterPannel />
    </div>
  );
}

export default Applet;
