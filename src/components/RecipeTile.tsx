import React from "react"
import "./RecipeTile.css"

const RecipeTile = (props: { recipe: any }) => {
    const { recipe } = props;
    return (
         <div className="recipeTile">
            <img className="recipTile__img" src={recipe["recipe"]["image"]}/>
            <p className="recipeTile__name">{recipe["recipe"]["label"]}</p>
        </div>
    )
}

export default RecipeTile;