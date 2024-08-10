import {Component} from 'react';
import './index.css';

class AppItem extends Component{
    render(){
        const {apps} = this.props;
        const {appId, appName, imageUrl, category} = apps;
        return(
            <li className={'list'}>
            <div className={'item_container'}>
                <div className={"image_container"}>
                    <img className={"image"} src={imageUrl}></img>
                </div>
                <h3 className={'appName'}>{appName}</h3>
            </div>
            </li>
        )
    }
}

export default AppItem;

