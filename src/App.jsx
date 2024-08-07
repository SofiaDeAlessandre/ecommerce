import './App.css'
import { Header } from './layout/Header';
import { Footer } from './layout/Footer';
import { Register } from './pages/Register';
import { Login } from './pages/Login'
import { CardsContainer } from './components/CardsContainer';
import { Main } from './layout/Main';
import { InfinitySlide } from './components/infinitySlide/InfinitySlide';
function App() {
return (
  <>
  
  <Header/>
  <InfinitySlide/>
 <Main/>
  <Footer/>
  </>
);
}
export default App;

