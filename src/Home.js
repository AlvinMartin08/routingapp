import React, { useState } from 'react';
import Timer from './Timer';
import './App.css';
const Home=()=>{
    const [color, setColor] = useState("green");
   
    return (
        <div>
            <h1 className="App">This is Home Page</h1>
            <hr />
            <Timer />
            <hr />
            <h2>Color Name : {color}</h2>
            <button onClick={()=>setColor("blue")}>Bule</button>
            <button onClick={()=>setColor("green")}>Green</button>
            <button onClick={()=>setColor("red")}>Red</button>
        </div>
    );
}

export default Home;