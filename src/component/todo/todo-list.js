import React from 'react';
import Modal from '../ui/modals/modals'
import './_todo.scss'

const todolist =(props)=>{

    const {posts,on,showModal} = props.data
    console.log(showModal)
    const list = posts.map((item,index)=>{
        return <div className="wrapper" key={item.id}>
            <div className="task-list">
                <Modal show={showModal} modalClosed={props.modalClosed}>
                    <div className="confirmation">
                        <p>are you sure delete this item?</p>
                        <br/>
                        <button className="red" onClick={()=>props.onDelete(item.id)}>Remove</button>
                        <button className="blue" onClick={()=>props.modalClosed(item.id)}>cancel</button>
                    </div>
                </Modal>
                <div className="desc">
                    <div className="task">
                        <p className="main-task">{item.name}</p>
                        <p className="category"><span>Category :</span>{item.category}</p>
                        {on && <h1>test</h1>}
                    </div>
                </div>                   
            </div>
            <div className="done">
                <button onClick={()=>props.onUpdate(item.id)}>Update</button>
                <button className="red" onClick={()=>props.showModal(item.id)}>Remove</button>
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