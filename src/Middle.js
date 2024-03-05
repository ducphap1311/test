import React from 'react'
import { Content } from './Content'

export const Middle = ({text}) => {
    return (
        <div>
            <h1>Middle</h1>
            <Content value={text}/>
        </div>
    )
}
