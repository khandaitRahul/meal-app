import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AreaMeal from './Components/ByAreaMealPage/AreaMeal';
import ByCategoryMeal from './Components/ByCategoryMealPage/CategoryMeal';
// import Header from './Components/Header';
import Ingredients from './Components/IngredientPage/Ingredients';
import Landing from './Components/LandingPage/Landing';
import Login from './Components/Login/Login';
import SignUp from './Components/SignUp/SignUp';



function App() {
  return (
    <BrowserRouter>
      {/* <Header /> */}
      <Routes>
        <Route path='/home' element={<Landing />} />
        <Route path='/ingredients' element={<Ingredients />} />
        <Route path='/area' element={<AreaMeal />} />
        <Route path='/category/:name' element={<ByCategoryMeal />} />
        <Route path='/' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
      </Routes>
    </BrowserRouter>



    // <div>
    //   <Landing />
    // </div>
  );
}

export default App;
