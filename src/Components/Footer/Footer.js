import React from 'react';
import footerStyles from './footer.module.css';


class Footer extends React.Component{

    constructor(props){
        super(props);
        this.state = {"footerText":"Footer"}
    }

    render = () => {
        return <div className={footerStyles.footerCls}>{this.state.footerText}</div>
    }

}

export default Footer;