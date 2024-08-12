import {Component} from 'react';
import './Item.css'


class Item extends Component {
    render() {
        const {list} = this.props;
        const {id, title, appointment_date, isFavourite} = list;

        const {getStarId} = this.props;

        const getId = () =>{
            getStarId(id);

        }
        return (
            <li className={'list'}>
                <div className={'container'}>

                    <div className={'details_container'}>
                        <h3>{title}</h3>
                        <p className={'date'}>{appointment_date}</p> </div>
                    <div className={'favourite_container'}>
                        <button onClick={getId} className={'b1'}>{isFavourite ? (<img src={'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'} alt={'notfavourite'}/>):(<img src={'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'} alt={''}/> ) } </button>

                    </div>

                </div>
            </li>
        )
    }
}

export default Item;