import { createModel } from "@rematch/core";
import { RootModel } from ".";

// TODO: create basic core model / create constants
export const coreModel = createModel<RootModel>()({
    state: {
        age: 0,
        endAge: 75,
    },
    reducers:{
        nextTurn( state ){
            state.age += 0.5
            return { ...state }
        },
        changeAge( state, payload ){
            state.age += payload
            return { ...state }
        },
        changeFinalAge( state, payload ){
            state.endAge += payload
            return { ...state }
        }
    },
    effects:{

    }


})