import './App.css'
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { useEffect } from 'react';
import { fetchData } from './state/apiSlice';
import { useDispatch } from 'react-redux';
import { AppDispatch } from './state/store';
import Api from './ApiData'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { LandingPage } from './components/Route';
function App() {
const dispatch=useDispatch<AppDispatch>();

useEffect(()=>{
  dispatch(fetchData());
},[dispatch]);
  return (
		<>
		<BrowserRouter>
		<Header/>
		
		<Routes>
			<Route path='/home' element={<LandingPage/>}/>
		</Routes>
		
		<Api/>
		<Footer/>
		</BrowserRouter>
		</>
	);
}

export default App;
