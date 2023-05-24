import './App.css';
import React, { useState } from "react";
import JokeInput from "./component/JokeInput";
import JokeOutput from "./component/JokeOutput";
import JokeCategoryLIst from './component/JokeCategoryLIst';
// import JokeCardList from './component/JokeCardList';


export default function App() {
  const [jokeOutput, setjokeOutput] = useState(null);
  const categoryList =["programming","kids","study","RelationsShip"];
  return (
    <div className="p-5" style={{ backgroundColor:'#b2d1bc', height:'100vh'}}>
    <h1 style={{textAlign:'center',fontStyle:'italic', textShadow:'2px 2px 4px #000000',}}>Laughing Factory</h1>
    <p style={{textAlign:'center',fontSize:'20px',textShadow:'2px 2px 4px' }}>
      <i>Where Comedy is Crafted and Laughter is Manufactured!</i>{" "}
    </p>
    <JokeInput categoryList={categoryList} setjokeOutput={setjokeOutput}  />
    <JokeOutput jokeOutput={jokeOutput} />
    <div className="row">
    <h1 style={{textAlign:"center"}}>Find Joks</h1>
      <div className="col">
        
      <JokeCategoryLIst categoryList={categoryList}/>
      </div>
      {/* <div className="col">
      <JokeCardList/>
      </div> */}
    </div>
  
   
  </div>
  );
}


