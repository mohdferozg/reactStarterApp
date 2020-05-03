import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import ToggleButtons from '../ToggleButtons/ToggleButtons';

class Main extends React.Component{

    constructor(props){
        super(props);
        this.state = {"mainText": "Main"};
    }

    render = () => {

        return (
                <div>
                    <Header />
                    <ToggleButtons />
                    <Footer />
                </div>
                
        );
    }

}

export default Main;