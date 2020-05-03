import React from 'react';
import ReactDom from 'react-dom';
//import Styles from './header.module.css';

class Header extends React.Component{
    constructor(props){
        super(props);
        this.state = {"headerText":"React"}
    }

    render(){
            return (
                <div>Header</div>
              
            ); 
            
    }
}

export default Header;