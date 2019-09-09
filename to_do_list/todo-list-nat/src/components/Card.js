import React, {useState} from 'react'
import Item from "./Item"
import Radium from 'radium'

const Card=()=>{
    const [todos, setTodos]= useState([])
    let ref = React.createRef()
    return(
        <div>
            <div>
                {todos.map(todo => <Item todo={todo} />)}
            </div>
            <input type="text" ref={ref}></input>
            
            <button onClick={() => {
                setTodos([...todos, {name: ref.current.value}])
                ref.current.value = ''

            }}
            >ADD TODO</button>
        </div>
    )
}
export default Radium(Card)