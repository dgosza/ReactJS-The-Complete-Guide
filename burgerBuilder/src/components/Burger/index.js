import React from 'react';
import './index.css';
import BurgerIngredient from './BurgerIngredient/'

const burger = ({ ingredients }) => {

    const renderIngredient = Object.keys(ingredients)
    .map(ingredientKey => {
        return [...Array(ingredients[ingredientKey])].map((_, i) => {
              return <BurgerIngredient key={ingredientKey + i} ingredientType={ingredientKey} />
        })
        
    });
    

    return (
        <div className="Burger">
            <BurgerIngredient ingredientType="bread-top"></BurgerIngredient>
            {renderIngredient}
            <BurgerIngredient ingredientType="bread-bottom"></BurgerIngredient>
        </div>
    )
}

export default burger;