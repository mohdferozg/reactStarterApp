import React from 'react';
import refreshIcon from '../../assets/images/refresh.svg';
import galleryViewStyles from './galleryView.module.css';

class GalleryView extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            "gallery":[]
        }
    }
    
   static getDerivedStateFromProps = (props,state) => {
        return {gallery:props.data}
    }

    shouldComponentUpdate = () => {
        return true;
    }

    refreshCacheData = () => {
        for(let i=1;i<3;i++){
            localStorage.removeItem('gallery'+i)
        }
        this.props.parentMethod();
    }
    
    render = () => {
        
        return (
                <div>
                    <div><span className={galleryViewStyles.spanIconCls} onClick={this.refreshCacheData}> 
                     <img src={refreshIcon} alt="refreshIcon"/></span></div>
                    <div className={galleryViewStyles.galleryContainer}>
                    {this.state.gallery.map(gal =>
                        <div className={galleryViewStyles.galleryCls} key={gal.id}>
                            <img src={gal.thumbnailUrl} alt={gal.title}/>
                            <div className={galleryViewStyles.gallerydesCls}>{gal.title}</div>
                        </div>
                    )} 
                    </div>
                </div>
                    
        )
    }
}

export default GalleryView;