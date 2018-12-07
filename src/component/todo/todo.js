import React, { Component } from 'react';
import TodoForm from './todoForm'
import shortid from 'shortid'
import List from './todo-list'
import Loading from '../hoc/loading'

import "./_todo.scss"

export default class todo extends Component {
    state = {
        posts:[],
        isLoading:null,
        counter:[]
    }

    addTodo = todo =>{
        const newTodo = {
            id:shortid.generate(),
            name:todo.orderData.name,
            category:todo.orderData.category,
        }
        this.setState({isLoading: true}, () => {
            setTimeout(() => {
                this.setState({
                    posts:[...this.state.posts,newTodo],
                    isLoading:false
                })     
              }, 2000) 
        })
    }

    remove(id) {
        let data = this.state.posts;
        let i = data.findIndex(item =>item.id === id)
        data.splice(i,1)
        this.setState({
            posts:data
        })
    }

    changeTask=(id,event)=>{
        let data = this.state.posts.filter(task => task[id] )
        console.log(data)
    }

    render () {
        return (
            <div className="todos">
                <TodoForm onSubmit={this.addTodo}/>
                <div className="todos-list">
                    <h3>Todo List</h3>
                    {this.state.isLoading ===true?<Loading/>:<List 
                    data={this.state} 
                    onDelete={(id)=>this.remove(id)}
                    />}
                </div>
            </div>
        );
    }
}

