import React from 'react'
import { BrowserRouter, Link, Router } from 'react-router-dom'
import { RootState, store } from '../store'
import Menu from './Menu/Menu'
import PlayArea from './PlayArea/PlayArea'

const { dispatch } = store
interface LayoutProps {
    money: number
    timer: number
    multy: number
    income: number
    core: (param: string, value: number) => void

}

const Layout = (props: LayoutProps) => {
    return (
        <BrowserRouter>
            <div className='main-wrapper'>
                <div className='first'>
                    <>Main menu</>
                    <p>{props.timer}</p>
                    <p>{props.money.toFixed(2)}</p>
                    <p>{props.income.toFixed(2)}</p>
                    <p>{props.multy.toFixed(2)}</p>
                    <Menu />
                </div>
                <div className='second'>
                    <div>
                        <PlayArea className='play-area' core={props.core}></PlayArea>
                        <p>Timer: {props.timer}</p>
                        <p>money: {props.money.toFixed(0)} (income:{(props.income * props.multy).toFixed(0)}/s)</p>
                        <p>current multiplier: {props.multy.toFixed(2)}</p>
                        <button onClick={() => props.core("work", 100)}>+100</button>
                        <button onClick={() => props.core("pass", 10)}>add passive +10, cost 150</button>
                        <button onClick={() => props.core("multy", 0.2)}>add passive +20% to income,cost 500</button>
                        <button onClick={() => dispatch.moneyModel.addMoney(10)}>+10 money in state</button>
                    </div>
                </div>

            </div>
        </BrowserRouter>
    )
}

export default Layout