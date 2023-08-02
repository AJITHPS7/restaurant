
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import RestaurantCard from './components/RestaurantCard';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import { Container } from 'react-bootstrap';
import RestaurantDetails from './components/RestaurantDetails';

function App() {
  const name="ajith"
  return (
    <Router>
      <h1>{`my name is ${name}`}</h1>
      <Header />
      
      <main className='py-3'>
        <Container>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/details/:id' element={<RestaurantDetails />} />
          </Routes>
        </Container>
      </main>
     
      
    
    </Router>
   
    
  );
 
 
}

export default App;
