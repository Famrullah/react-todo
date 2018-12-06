import React from 'react';
import Aux from '../hoc/aux'
import Header from '../header/header'

const Layout =(props)=>(
    <Aux>
        <div>
            <Header/>
        </div>
        <main className="main">
            {props.children}
        </main>
    </Aux>
)

export default Layout;