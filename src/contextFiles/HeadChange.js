import React from 'react'
import HeadContext from './headContext'
import { useState } from 'react'

const HeadChange = (props) => {

    const myName = {
        "name": "Kedar"
    }

    const [state, setState] = useState(myName);
    const update = () => {
        setTimeout(() => {
            setState({
                "name": "Kedar Gavali"
            })
        }, 2000);
    }

    return (
        <HeadContext.Provider value={{state:state, update:update}}>
            {props.children}
        </HeadContext.Provider>
    )

}

export default HeadChange;