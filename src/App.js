import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import './App.css';
import Features from './components/Features';



const App = () => {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/Features' element={<Features />} />

      </Routes>

    </>
  )
}

export default App;
