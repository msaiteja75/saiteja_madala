import {Component} from "react";
import './Item.css';


class Item extends Component{

    render(){
        const {getId, status} = this.props;
        // console.log(formatDistanceToNow(new Date()));

        const {list} = this.props;
        const {id, name, comment, created_duration, isLiked} = list;
        const gettingId = () =>{
            getId(id);

        }
        const LikedorNot = () =>{
            status(id);

        }


        return(
            <div>
            <div className={'item_container'}>
                <div className={'details'}>
                <div className={'profile'}><h2 className={'head'}>{name[0].toUpperCase()}</h2></div>
                <div className={'username'}><h2>{name}</h2></div>
                <div className={'time'}><p>{created_duration}</p></div>
                </div>
                <div className={'comment'}>
                    <p>{comment}</p>
                </div>

                <div className={'like_and_delete'}>
                    <button className="b1" onClick={LikedorNot}>
                        {isLiked ? (
                            <img src="https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png" alt="liked"/>
                        ) : (
                            <img src="https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png" alt="like"/>
                        )}
                    </button>
                    <button className={'b1'} onClick={gettingId}><img
                        src={'https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png'} alt={'del'}></img>
                    </button>
                </div>


            </div>
            </div>
        )
    }
}

export default Item;