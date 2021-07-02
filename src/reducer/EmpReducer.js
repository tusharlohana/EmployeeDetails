import React from 'react'

const initstate = { userData : [] }

const EmpReducer = (state = initstate, action) => {
// debugger

    switch (action.type) {
        case "SUBMIT":
        const copyUserData = { ...state, }
        copyUserData.userData.push(action.payload)
        return copyUserData;

        default: return state
    }
}


export default EmpReducer
