import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Search from './components/Search/Search';
import NotFound from './components/NotFound/NotFound';
import Header from './components/Header/Header';
import Contact from './components/Contact/Contact';
import SearchDetails from './components/SearchDetails/SearchDetails';
import MealDB from './components/MealDB/MealDB';
import MealDbDetails from './components/MealDbDetails/MealDbDetails';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Search></Search>}></Route>
        <Route path='/search-details:id' element={<SearchDetails></SearchDetails>}></Route>
        <Route path='/meal-db' element={<MealDB></MealDB>}>
          <Route path=':details' element={<MealDbDetails></MealDbDetails>}></Route>
        </Route>


        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
