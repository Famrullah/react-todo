import React, { Component } from 'react';
import TodoForm from './todo-form'
import shortid from 'shortid'
import List from './todo-list'
import Loading from '../hoc/loading'
import TodoEdit from './todo-edit'

import "./_todo.scss"

export default class todo extends Component {
    state = {
        posts:[],
        isLoading:null,
        on:false,
        showModal:false,
        val:''
    }

    closeModal =(id)=>{
        this.setState({ showModal: false });
    }
    
    showModal =(id)=>{
        this.setState({ showModal: true ,val:id});
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

    remove=(id)=> {
        let data = this.state.posts;
        let i = data.findIndex(item =>item.id === this.state.val)
        data.splice(i,1)
        this.setState({
            posts:data,
            showModal:false
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
        },()=>{
            if(this.state.on) this.handleScrollToElement()
        })

        
    }

    handleScrollToElement = e => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
     };

    changeTask=(id,event)=>{
        let data = this.state.posts.filter(task => task[id] )
        console.log(data)
    }

    render () {
        const {on} = this.state
        return (
            <div className="todos">
                <TodoForm onSubmit={this.addTodo}/>
                <br/>
                {on && <div className="todos-edit" ref={elem => (this.gate = elem)}>
                   <TodoEdit/>
                </div>}
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

