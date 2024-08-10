
import {Component} from "react";
import './index.css';

class CardItem extends Component{
    render(){
        const {list} = this.props;
        const {imageURL, title, description} = list;
        return(
            <li className={'list'}>
                <div className = 'card_container'>
                    <div className={'image_container'}>
                        <img className={'image'} src={imageURL} alt={''}></img>
                    </div>
                    <div className={'details_container'}>
                        <h2>{title}</h2>
                        <p>{description}</p>
                    </div>
                </div>
            </li>
        )
    }
}
export default CardItem;