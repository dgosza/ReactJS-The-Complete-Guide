import React from 'react';
import propTypes from 'prop-types'
//CSS
import './index.css'

const burgerIngredient = ({ ingredientType }) => {

    let ingredient = null;

    switch (ingredientType) {

        case ('bread-bottom'):
            ingredient = <div className="BreadBottom"></div>
            break;

        case ('bread-top'):
            ingredient = (
                <div className="BreadTop">
                    <div className="Seeds1"></div>
                    <div className="Seeds2"></div>
                </div>
            )
            break;

        case ('meat'):
            ingredient = <div className="Meat"></div>
            break;

        case ('cheese'):
            ingredient = <div className="Cheese"></div>
            break;

        case ('salad'):
            ingredient = <div className="Salad"></div>
            break;

        case ('bacon'):
            ingredient = <div className="Bacon"></div>
            break;

        default:
            ingredient = null
            break;

    }

    return ingredient;
}

burgerIngredient.propTypes = {
    ingredientType: propTypes.string.isRequired
}

export default burgerIngredient

