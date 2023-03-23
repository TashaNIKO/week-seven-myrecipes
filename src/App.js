import { useEffect, useState } from 'react';
import './App.css';
import video from './food.mp4';
import MyRecipesComponent from './MyRecipesComponent';

function App() {
 const MY_ID = "daa639ec";
 const MY_KEY = "6c8b2f4074dcce5c50d9704ef35af7a2";

 const [mySearch, setMySearch]= useState('');
 const [myRecipes, setMyRecipes] = useState([]);
 const [wordSubmitted, setWordSubmitted] = useState('health food');
 useEffect(() => {
  getRecipes ();
}, [wordSubmitted])
const getRecipes = async ()=> {
const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${wordSubmitted}&app_id=${MY_ID}&app_key=${MY_KEY}`);
const data = await response.json();
setMyRecipes(data.hits);
} 
const myRecipeSearch = (e) =>{
  setMySearch(e.target.value)
}
const finalSearch = (e) => {
  e.preventDefault();
  setWordSubmitted(mySearch);
}
  return (
    <div className="App">

    <div className="container">
     <video autoPlay muted loop>
     <source src={video} type="video/mp4" />
     </video>

  <h1>Find a Recipe</h1>
    </div>
    <div className='container'>
    <form onSubmit={finalSearch}>
      <input className='search' placeholder='Search...' onChange={myRecipeSearch} value={mySearch}></input>
    </form>
    </div>
    <div className='container'>
<button>
  <img src="https://img.icons8.com/fluency/48/000000/fry.png" className='icon'/>
</button>
    </div>
    <div>
{myRecipes.map (element=>(
  <MyRecipesComponent 
  label={element.recipe.label} 
  image={element.recipe.image} 
  ingredients={element.recipe.ingredientLines}
  calories={element.recipe.calories} 
  />
))}
    </div>
    </div>
  );
 } 

export default App;
