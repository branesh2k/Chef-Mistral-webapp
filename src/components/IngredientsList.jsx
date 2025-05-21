

export default function IngredientsList(props){

    const ingredientsListItems = props.ingredients.map((ingredient) => 
    (<li key={ingredient}> {ingredient}</li>))

    return(
        <section >
                <h2>Ingredients on hand:<span style={{fontSize:'1rem',fontStyle:'italic',fontWeight:'100'}}>(atleast 4)</span></h2>
                <ul className="ingredients-list" aria-live="polite">{ingredientsListItems}</ul>
                {
                props.ingredients.length>3 &&
                <div ref={props.ref} className="get-recipe-container">
                    <h3>Ready for a recipe?</h3>
                    <div>
                        <p>Generate a recipe from your list of ingredients</p>
                    </div>
                    <button onClick={props.handleClick}>Get a recipe</button>
                </div>
                }
            </section>
    )
}