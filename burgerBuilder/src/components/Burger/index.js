import React from 'react';
import './style.css';
import BurgerIngredient from './BurgerIngredient/'
import propTypes from 'prop-types'

const burger = ({ ingredients }) => {

    var renderIngredient = Object.keys(ingredients)
    .map(ingredientKey => {
        return [...Array(ingredients[ingredientKey])].map((_, i) => {
              return <BurgerIngredient key={ingredientKey + i} ingredientType={ingredientKey} />
        })
        
    })
    .reduce((arr, el) => {
        return arr.concat(el)
    }, []);
    if(renderIngredient === 0){
        renderIngredient = <p>Please start adding ingredients!</p>
    }


    return (
        <div className="Burger">
            <BurgerIngredient ingredientType="bread-top"></BurgerIngredient>
            {renderIngredient}
            <BurgerIngredient ingredientType="bread-bottom"></BurgerIngredient>
        </div>
    )
}

burger.propTypes = {
    ingredients : propTypes.string.isRequired
}

export default burger;