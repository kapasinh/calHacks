import logo from './logo.svg';
import './App.css';
import { ChakraProvider } from '@chakra-ui/react'
import Navbar from './components/Navbar'
import LandingPage from './components/LandingPage';

function App() {
  return (
      <div className="App">
        <Navbar/>
      </div>
  );
}

export default App;
