import React from 'react';
import GalleryView from '../GalleryView/GalleryView';
import toggleButtons from './toggleButtons.module.css';
class ToggleButtons extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            "buttonOne":{
                 "index":"1",
                 "copyText":"Recently Viewed"   
            },
            "buttonTwo": {
                "index":"2",
                "copyText":"Favourites"   
           },
            "gallery":[],
            "hasErrors":false
        };

        
    }
   
    fethcApiData = (index) => {
        let getDatafromLocalStorage = localStorage.getItem('gallery'+index);
        
        if(getDatafromLocalStorage){
            let getData = JSON.parse(getDatafromLocalStorage);
            this.setState({gallery: getData});
        }
        else{
            fetch("https://jsonplaceholder.typicode.com/photos?albumId="+index)
          .then(res => res.json())
          .then(res => {
            localStorage.setItem('gallery'+index,JSON.stringify(res));
            this.setState({ gallery: res })
          })
          .catch(() => this.setState({ hasErrors: true }));
        }
        
    }
    getSnapshotBeforeUpdate = (prevProps, prevState) => {
        let lastState  = (prevState.gallery.length > 0) ? prevState.gallery : false;
        console.log(lastState);
        return lastState;
        
    }

    componentDidUpdate = () =>  {
        let lastState  = (this.state.gallery.length > 0) ? this.state.gallery : "is null";
        console.log(lastState);
      }

    componentDidMount = () => {
        let index = '1';
        this.fethcApiData(index);
    }

    buttonsClick = (index,ev) => {
        console.log(index);
        this.fethcApiData(index);
    }
    render = () => {

        return (
                <div>
                    <div className={toggleButtons.toggleBtnCls}>
                        <div className={toggleButtons.buttonsCls} onClick={(ev)=>this.buttonsClick(this.state.buttonOne.index,ev)}>{this.state.buttonOne.copyText}</div>
                        <div className={toggleButtons.buttonsCls} onClick={(ev)=>this.buttonsClick(this.state.buttonTwo.index,ev)}>{this.state.buttonTwo.copyText}</div>
                    </div>
                    <GalleryView parentMethod={(ev)=>this.buttonsClick(this.state.buttonOne.index,ev)} data={this.state.gallery} />
                </div>
                
        );
    }

}

export default ToggleButtons;