import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Search from './components/Search/Search';
import NotFound from './components/NotFound/NotFound';
import Header from './components/Header/Header';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Search></Search>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
      </Routes>
    </div>
  );
}

export default App;
