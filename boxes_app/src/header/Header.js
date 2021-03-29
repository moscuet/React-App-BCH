import Logo from './logo.svg';
import './header.css'
function Header() {
    return (
      <div className = 'header'>
         <div> <img src={Logo} alt = 'portfolio_logo'/> </div>
         <div>
         <nav>
           <ul>
             <li>Home</li>
             <li>about</li>
             <li>contact</li>
           </ul>
         </nav>
         </div>
      </div>
    );
  }
  export default Header 