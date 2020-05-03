import React from 'react';
import headerStyles from './header.module.css';

class Header extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            "headerText":"React",
            "refreshCopy":""
        }

    }
    render = () => {
            return (
                     <div className={headerStyles.headerCls}><span>{this.state.headerText}</span>
                     </div>
            ); 
            
    }
}

export default Header;