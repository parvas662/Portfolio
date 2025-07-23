 
import { BrowserRouter, Route,Routes } from 'react-router' ;
import './App.css' ;
import Hero from './Components/Hero';
import Homepage from './Components/Homepage' ; 

function App() {  
  return ( 
    <BrowserRouter>
      <Routes>
        <Route path="/" element={< Hero />} />
        <Route path="/home" element={<Homepage />} />
        
      </Routes>
    </BrowserRouter>
  )
}

export default App
