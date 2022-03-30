import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Search from './components/Search/Search';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Search></Search>}></Route>
      </Routes>
    </div>
  );
}

export default App;
