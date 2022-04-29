import React, { useContext, useEffect, useReducer, useState } from 'react'
import { useSelector } from 'react-redux';
import { Navigate, Route, useRoutes } from 'react-router';
import Layout from './components/Layout';
import { RootState, store } from './store';

const { dispatch } = store

const App = () => {

const money = useSelector((state: RootState)=>state.moneyModel)
const age = useSelector((state: RootState)=>state.coreModel)


const core = (param:string, value:number) => {
    console.log(value)
    let tempMoney = 0;
    if(param == "work"){
        tempMoney += value
    }

    if(param == "pass"){
        tempMoney += -150
        console.log(value)
        dispatch.moneyModel.changeIncome(value)
    }

    if(param == "multy"){
        tempMoney += -500
        console.log(value)
        dispatch.moneyModel.changeMulti(value)
    }
    
    console.log(tempMoney)
    dispatch.moneyModel.addMoney(tempMoney + (money.income*money.multiplier))
    dispatch.coreModel.nextTurn()
    tempMoney = 0
}


  return (
      <div>
          <>
            {console.log(money)}
            {console.log(dispatch.moneyModel)}
          </>
        <Layout timer={age.age} money={money.money} core={core} multy={money.multiplier} income={money.income} />
    </div>
  )
}


export default App;
