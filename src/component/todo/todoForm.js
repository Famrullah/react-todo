import React, { Component } from 'react';
import Input from '../ui/input/input'
import "./_todo.scss"

export default class todoform extends Component {
    state = {
        orderForm: {
            name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your Task'
                },
                value: '',
                
            },
            category: {
                elementType: 'select',
                elementConfig: {
                    options: [
                        {value: '', displayValue: 'category'},
                        {value: 'React', displayValue: 'React Js'},
                        {value: 'Angular', displayValue: 'Angular'},
                        {value: 'Ember', displayValue: 'Ember'},
                        {value: 'Meteor', displayValue: 'Meteor'},
                        {value: 'Node', displayValue: 'Node'},
                        {value: 'Rails', displayValue: 'Rails'},
                    ]
                },
                value: '',
            }
        },
        loading: false
    }

    orderHandler = ( event ) => {
        event.preventDefault();
        this.setState( { loading: true } );
        const formData = {};
        for (let formElementIdentifier in this.state.orderForm) {
            formData[formElementIdentifier] = this.state.orderForm[formElementIdentifier].value;
        }
        const order = {
            orderData: formData
        }

        if(order.orderData.category === "" || order.orderData.name === ""){
           alert('Please fill out this field !' )
        }else{
            this.props.onSubmit({
                orderData:formData
            });
            // console.log(this.state.orderForm.name.value)
            this.setState({
                orderForm: {
                    name: {
                        elementType: 'input',
                        elementConfig: {
                            type: 'text',
                            placeholder: 'Your Task'
                        },
                        value: '',
                    },
                    category: {
                        elementType: 'select',
                        elementConfig: {
                            options: [
                                {value: '', displayValue: 'category'},
                                {value: 'React', displayValue: 'React Js'},
                                {value: 'Angular', displayValue: 'Angular'},
                                {value: 'Ember', displayValue: 'Ember'},
                                {value: 'Meteor', displayValue: 'Meteor'},
                                {value: 'Node', displayValue: 'Node'},
                                {value: 'Rails', displayValue: 'Rails'},
                            ]
                        },
                        value: '',
                    }
                },
            })
        }
    }

    inputChangedHandler = (event, inputIdentifier) => {
        const updatedOrderForm = {
            ...this.state.orderForm
        };
        const updatedFormElement = { 
            ...updatedOrderForm[inputIdentifier]
        };
        console.log(updatedOrderForm)
        updatedFormElement.value = event.target.value;
        updatedOrderForm[inputIdentifier] = updatedFormElement;
        
        this.setState({orderForm: updatedOrderForm});
    }

    render () {
        const formElementsArray = [];
        for (let key in this.state.orderForm) {
            formElementsArray.push({
                id: key,
                config: this.state.orderForm[key]
            });
        }
        let form = (
            <form onSubmit={this.orderHandler} >
                <div className="form-container">
                    {formElementsArray.map(formElement => (
                        <Input 
                        key={formElement.id}
                        elementType={formElement.config.elementType}
                        elementConfig={formElement.config.elementConfig}
                        value={formElement.config.value}
                        changed={(event) => this.inputChangedHandler(event, formElement.id)} />
                    ))}
                </div>
                <button >add</button>
            </form>
        );
        return (
            <div className="todos-add">
                <div className="todos-add__container">
                    <h1>Add Task</h1>
                    {form}
                </div>   
            </div>
        );
    }
}

