import {Component} from "react";
import  './index.css';

class ReviewItem extends Component{
    render(){
        const {list} = this.props;
        const {imgUrl, username, companyName, description} = list;
        const {leftFunction, rightFunction} = this.props;
        const left = () =>{
            leftFunction();

        }
        const right  = () =>{
            rightFunction();

        }
        return(

            <div>
        <div className={"container"}>
            <div className={'image_container'}>

                <img src={imgUrl} alt={''}></img>

            </div>

            <div className={'details_container'}>
                <div className={'name'}>
                    <button className={'b1'} onClick={left}><img src={'https://assets.ccbp.in/frontend/react-js/left-arrow-img.png'} alt={'backward'}></img></button>
                    <h2> {username}</h2>
                    <button className={'b1'} onClick={right}><img src={'https://assets.ccbp.in/frontend/react-js/right-arrow-img.png'} alt={'forward'}></img></button>

                </div>
                <p>{companyName}</p>
                <p className={'description'}>{description}</p>
            </div>
        </div>


            </div>
        )
    }
}
export default ReviewItem;