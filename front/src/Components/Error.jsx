import React from 'react'
import '../Style/VirtualHendiInterface.css'

export const Error = props => {
    return <div className="spinner-container">
            <img src="/virtual-hendi/error.jpg" className="error"/>
            <label>Error fetching spectrum!</label>
        </div>
}
export default Error;