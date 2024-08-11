import {Component} from "react";
import './comments.css';

class Comments extends Component{
    state = {name:'', comment:''};

    render(){
        const {updateTime} = this.props;
const {name, comment} = this.state;
//gettingName
        const getName = (event) =>{
            this.setState({name:event.target.value});



        }

        //gettingComment
        const gettingComment  = (event) =>{
            this.setState({comment:event.target.value});
        }
        const {Function} = this.props;
        const submitForm = (event) =>{
            event.preventDefault();
            Function(name, comment);
            this.setState({name:"", comment: ""});


            setInterval(updateTime, 5000);
            updateTime();




        }
        return(
            <div className={'c1'}>

                <div className={'form_container'}>
                    <h1 className='h1'>Comments</h1>
                    <form onSubmit={submitForm}>
                        <p className={'para'}>Say something</p>
                        <input type={'text'} value={name} onChange={getName} className={'t1'}
                               placeholder={'Your Name'}></input>
                        <br/><br/>
                        <textarea className={'t2'} value={comment} onChange={gettingComment}
                                  placeholder={'Your Comment'}></textarea>
                        <br/> <br/>

                        <button type={'submit'} className={'b1'}>Add Comment</button>

                    </form>
                </div>
                <div className={'imagecontainer'}></div>


            </div>
        )
    }
}

export default Comments;