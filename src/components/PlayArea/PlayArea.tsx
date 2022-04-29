import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Home/Home'
const PlayArea = (props: any) => {
    return (
        <div>
            <Routes>
                <Route path='' element={<Home core={props.core} />}></Route>
                <Route path='/job'>
                    <>job</>
                </Route>
                <Route path='/bank'>
                    <>Bank</>
                </Route>
            </Routes>
        </div>
    )
}

export default PlayArea