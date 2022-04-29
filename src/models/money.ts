import { createModel } from "@rematch/core";
import { RootModel } from ".";

// TODO: create basic core model / create constants
export const moneyModel = createModel<RootModel>()({
    state: {
        money: 0,
        income: 0,
        multiplier: 1,
    },
    reducers:{
        addMoney(state,payload: number){
            state.money = state.money + payload
            return {...state}
        },
        changeIncome(state,payload: number){
            state.income = state.income + payload
            return {...state}
        },
        changeMulti(state,payload: number){
            state.multiplier = state.multiplier + payload
            return {...state}
        },
},
    effects:{

    }


})