import {MEALS} from '../../data/dummy-data'
import {TOGGLE_FAVORITE} from '../actions/meal'

const initialState =  {
    meals: MEALS,
    filteredMeals: MEALS,
    favoriteMeals: []
}

const mealsReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_FAVORITE:
            
            const existingIndex = state.filteredMeals.findIndex(meal => meal.id === action.mealId)
            if(existingIndex >= 0){
                const updated = [...state.favoriteMeals]
                updated.splice(updated,  1)
                return {...state, favoriteMeals: updated}
            }else{
                const meal = state.meal.find(meal=> meal.id === action.mealId)
                return {...state, favoriteMeals: state.favoriteMeals.concat(meal)}
            }
        default:
            return state;
    }
    return state;
}

export default mealsReducer;