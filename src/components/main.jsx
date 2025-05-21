import { useState,useRef, useEffect } from "react"
import MistralRecipe from "./MistralRecipe"
import IngredientsList from "./IngredientsList"
import { getRecipeFromMistral } from "../ai"

export default function Main(){

    const [ingredients,setIngredients] = useState([])
    const [recipe,setRecipe] = useState("")
    const recipeSection = useRef(null)
    
    useEffect(()=>{
        if(recipe!=="" && recipeSection.current !== null){
            recipeSection.current.scrollIntoView({behavior: "smooth"})
        }
    },[recipe])

    const addIngredient= (formData)=>{
        const newIngredient = formData.get("ingredient")
        setIngredients((prev)=>[...prev,newIngredient])
    }

    async function getARecipe(){
        const aiRecipeMd = await getRecipeFromMistral(ingredients)
        setRecipe(aiRecipeMd)
    }


    return(
        <main>
            <form action={addIngredient} className="add-ingredient-form">
                <input type="text" placeholder="e.g: tomato"
                    aria-label="Add ingredients" name="ingredient"
                />
                <button>Add ingredient</button>
            </form>
            { ingredients.length>0 && 
            <IngredientsList ref={recipeSection} ingredients={ingredients} handleClick={getARecipe}/>
            }
            {recipe && <MistralRecipe recipe={recipe}/>}
        </main>
    )
}