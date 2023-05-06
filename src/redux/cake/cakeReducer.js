import React from 'react'
import { BUY_CAKE } from './cakeTypes'


const initiaState = {
    numOfCakes: 10
}

function cakeReducer(state = initiaState, action) {
    switch (action.type) {
        case BUY_CAKE:
            return {
                ...state,
                numOfCakes: state.numOfCakes - action.payload
            }


        default:
            return state;
    }
}

export default cakeReducer