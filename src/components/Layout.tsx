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
                    <Menu />
                </div>
                <div className='second'>
                    <div>
                        <PlayArea className='play-area' core={props.core}></PlayArea>
                        {/* <button onClick={() => props.core("work", 100)}>+100</button> */}
                        {/* <button onClick={() => props.core("pass", 10)}>add passive +10, cost 150</button> */}
                        {/* <button onClick={() => props.core("multy", 0.2)}>add passive +20% to income,cost 500</button> */}
                    </div>
                </div>
                <div className='stats'>
                    <p>Age: {props.timer}</p>
                    <p>money: {props.money.toFixed(0)} </p>
                    <p>income:{(props.income * props.multy).toFixed(0)}/turn</p>
                    <p>multiplier: {props.multy.toFixed(2)}</p>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default Layout