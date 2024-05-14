import './App.css'
import { Footer } from './components/Footer';
import { useEffect } from 'react';
import { fetchData } from './state/apiSlice';
import { useDispatch } from 'react-redux';
import { AppDispatch } from './state/store';
import Api from './ApiData'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from './components/Route';
import CartPage from './components/Cart';
import { NavBar } from './components/Header';
import CartPagee from './components/CartPage';
function App() {
const dispatch=useDispatch<AppDispatch>();

useEffect(()=>{
  dispatch(fetchData());
},[dispatch]);
  return (
		<>
		<BrowserRouter>
		<NavBar/>
		
		<Routes>
			<Route path='/' element={<LandingPage/>}/>
			<Route path='/cart' element={<CartPagee/>}/>
			<Route path ='/shop' element={<Api/>}/>
		</Routes>

		
		<Footer/>
		</BrowserRouter>
		</>
	);
}

export default App;
