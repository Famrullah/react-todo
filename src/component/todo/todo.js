import React, { Component } from 'react';
import TodoForm from './todo-form'
import shortid from 'shortid'
import List from './todo-list'
import Loading from '../hoc/loading'

import "./_todo.scss"

export default class todo extends Component {
    state = {
        posts:[],
        isLoading:null,
        complete:[],
        on:false,
        current:0,
        showModal:false
    }

    closeModal =(id)=>{
        this.setState({ showModal: false });
    }
    
    showModal =(id)=>{
        this.setState({ showModal: true });
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
              }, 1000) 
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
    
    update(id,event){
        const taskIndex = this.state.posts.findIndex(p =>{
            return p.id === id
        })
        const currentTask = {
            ...this.state.posts[taskIndex]
        }
        console.log(currentTask)
        this.setState({
            on:!this.state.on
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
                    onUpdate={(id)=>this.update(id)}
                    showModal={(id)=>this.showModal(id)}
                    modalClosed={(id)=>this.closeModal(id)}
                    />}
                </div>
            </div>
        );
    }
}

