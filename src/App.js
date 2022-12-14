import React from 'react';
import CustomCard from './components/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import { films } from './data';
import { useState } from 'react';
import CustomNavbar from './components/CustomNavbar';
import FormAdd from './components/FormAdd';

function App() {
  const [movies,setMovies]= useState(films)
  const [text,setText]=useState('')
  const [rate,setRate]=useState(0)

  return (

    <div className="App">
    {console.log(text)}
    <CustomNavbar 
    setText={setText}
    setRate={setRate}  
    />
    
    <div style={{display:"flex",flexWrap:"wrap",justifyContent:"space-around"}} className='container'>
    {movies.filter((elt)=>elt.title.toLocaleLowerCase().includes(text.toLocaleLowerCase())
    && elt.rate>=rate)
.map((elt)=><CustomCard key={elt.id} film={elt}/>)}
<FormAdd/>
     </div>
    </div>
  );
}

export default App

