import React from 'react'
import { useSelector } from 'react-redux'
import { RootState, store } from '../../store'

const Home = (props: any) => {
    const money = useSelector((state: RootState) => state.moneyModel)

    return (
        <>
            {/* <p>Timer: {props.timer}</p> */}
            <p>money: {money.money.toFixed(0)} (income:{(money.income * money.multiplier).toFixed(0)}/s)</p>
            <p>current multiplier: {money.multiplier.toFixed(2)}</p>
            <button onClick={() => props.core("work", 100)}>+100</button>
            <button onClick={() => props.core("pass", 10)}>add passive +10, cost 150</button>
            <button onClick={() => props.core("multy", 0.2)}>add passive +20% to income,cost 500</button>

        </>
    )
}

export default Home