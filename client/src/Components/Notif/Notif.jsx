import React, { Component } from 'react'
import { Snotif } from './styled'

const Notif = props => {
    return (
        <Snotif notif={ props.notif } >
            <span>{ props.notif }</span>
        </Snotif>
    )
}

export default Notif