import Header from './header/Header'
import './App.css'
import Main from './main/Main'
import Footer from './footer/Footer'
import Counter from './counter/Counter'
function App() {
  return (
    <div className = 'wrapper'> 
      <Header/>
      <Main/>
      <Counter/>
      <Footer/>
    </div>
  );
}

export default App;
