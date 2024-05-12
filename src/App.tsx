import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { AppDispatch } from './state/store';
import { useEffect } from 'react';
import { fetchData, selectData } from './state/apiSlice';

function App() {
const dispatch=useDispatch<AppDispatch>();
useEffect(()=>{
  dispatch(fetchData());
},[dispatch]);
const data =useSelector(selectData);
  return (
		<>
			{data.map((item, index) => (
				<ol key={index}>
					<li>{item.name}</li>
					<li>{item.price}</li>
					<img src={item.image}></img>
				</ol>
			))}
			;
		</>
	);
}

export default App
