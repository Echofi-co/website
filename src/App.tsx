import './App.css';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { AboutPage } from './pages/aboutPage/AboutPage';
import { HomePage } from './pages/homePage/HomePage';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path="/" element={HomePage()}/>
        <Route path="/about" element={AboutPage()}/>        
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
