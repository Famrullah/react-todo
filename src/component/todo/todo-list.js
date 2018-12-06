import React from 'react';
import './_todo.scss'

const todolist =(props)=>{
    const {posts} = props.data
    const list = posts.map((item,index)=>{
        return <div className="wrapper" key={index}>
            <div className="task-list">
                <div className="desc">
                    <div className="task">
                        <p className="main-task">{item.name}</p>
                        <p className="category">{item.category}</p>
                    </div>
                </div>                   
            </div>
            <div className="done">
                <button>Done</button>
                <button className="red">Remove</button>
            </div>     
        </div>
    })
    return(
        <div>
            {list}
        </div>
    )
}

export default todolist