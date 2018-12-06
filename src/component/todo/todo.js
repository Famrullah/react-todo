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

    render () {
        return (
            <div className="todos">
                <TodoForm onSubmit={this.addTodo}/>
                <div className="todos-list">
                    <h3>Todo List</h3>
                    <List data={this.state}/>
                </div>
            </div>
        );
    }
}

