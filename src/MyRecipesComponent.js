 
function MyRecipesComponent ({label,image,ingredients,calories}){
    return (<div>
        <div className="container">
        <h2>{label}</h2>
        </div>
        <div className="container">
        <img className="tasty" src={image}/>
        </div>
        <ul className="list">
        {ingredients.map(ingredient=>(
        <li>
            <img src="https://img.icons8.com/color-glass/256/checked.png" className="icon"/>
            {ingredient}</li>
        ))}
        </ul>
        <div className="container">
        <p>{calories.toFixed()} calories</p>
         </div>
    </div>)
    
}
export default MyRecipesComponent;