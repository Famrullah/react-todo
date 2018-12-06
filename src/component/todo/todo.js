import React, { Component } from 'react';
import TodoForm from './todoForm'
import shortid from 'shortid'
import List from './todo-list'

import "./_todo.scss"

export default class todo extends Component {
    state = {
        posts:[],
        loading:true
    }

    addTodo = todo =>{
        const newTodo = {
            id:shortid.generate(),
            name:todo.orderData.name,
            category:todo.orderData.category,
        }
        this.setState({
            posts:[newTodo,...this.state.posts],
            loading:false
        })
    }



    remove(e) {
        var array = [...this.state.posts]; 
        var index = array.indexOf(e.target.value)
        array.splice(index, 1);
        this.setState({posts: array});
      }

    changeTask=(id,event)=>{
        let data = this.state.posts.filter(task => task[id] )
        console.log(data)
    }

    render () {
        console.log(this.state.posts)
        return (
            <div className="todos">
                <TodoForm onSubmit={this.addTodo}/>
                <div className="todos-list">
                    <h3>Todo List</h3>
                    <List 
                    data={this.state} 
                    onDelete={(e)=>this.remove(e)}
                    />
                </div>
            </div>
        );
    }
}

