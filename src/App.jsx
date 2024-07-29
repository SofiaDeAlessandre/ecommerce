import './App.css'
import { Header } from './layout/Header';
import { Footer } from './layout/Footer';
import { Register } from './pages/Register';
import { CardsContainer } from './components/CardsContainer';
function App() {
return (
  <>
  <Header/>
 <CardsContainer/>
  <Register/>
  <Footer/>
  </>
);
}
export default App;
