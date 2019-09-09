import React, { useState } from 'react'
import Radium from 'radium'


const styles = {
    done: {
        textDecoration: "line-through",
        color:"#2e9afe",
        ":hover": {
            color:"#5858fa"
        },
        
        

    },
    notDone: {
        fontSize: "large;",
        color:"#5858fa",
        ":hover": {
            color:"#2e9afe"
        }
    
    }    
}

const Item = ({ todo }) => {
    const [done, setDone] = useState(false)
    return (
        <div onClick={(e) => setDone(!done)} style={done ? styles.done : styles.notDone}>
            {todo.name}
            <input type="checkbox"/>
        </div>
    )
}

export default Radium(Item)