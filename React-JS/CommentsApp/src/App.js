import {Component} from "react";
import './App.css';
import Item from "./components/CommentItem/Item";
import Comments from './components/Comments/comments'
import {v4 as uuidv4} from 'uuid'
import {formatDistanceToNow} from 'date-fns';

const commentsList = [];

class App extends Component{
    state = {clist:commentsList};


     // this is for gettingName and Comment from comments.js

     getNameComment = (name, comment) =>{
        console.log(name);
        console.log(comment);
        const time = new Date(Date.now());
        const c_duration = formatDistanceToNow(time);


        const newcomment = {
            id: uuidv4(),
            name,
            comment,
            isLiked:false,
            created_time:time,
            created_duration:c_duration

        }
        this.setState((prevState)=>{
            return {clist:[...prevState.clist, newcomment ]}
        })


     }
    // getting id from item FOR DELTEING COMMENT based on id

    DeleteComment = (id) =>{
    console.log(id)
        const {clist} = this.state;
    const filteredList =clist.filter((eachItem)=>{
        return eachItem.id!==id;
    })
        this.setState({clist:filteredList});
    }
    // getting id from item and changing state of clist isliked or not

    SetLikedorNot = (id) =>{
         const {clist} = this.state;
         this.setState(prevState => {


             const updatedClist =    prevState.clist.map(eachItem=>{
                     if(eachItem.id === id){
                         return {...eachItem, isLiked: !eachItem.isLiked}
                     }
                 return eachItem;
                 });
             return {clist:updatedClist};



         })

    }

    render(){

        const {clist} = this.state;
        // console.log(clist);

        //Updating time for item for every 5sec after adding a comment
        const updateClistTime = () =>{
            this.setState((prevState)=>{

                return {clist:prevState.clist.map((eachItem)=>{
                        let duration = formatDistanceToNow(eachItem.created_time);
                        return {...eachItem, created_duration: duration};
                    })}
            })

        }


        // console.log(clist);
        return(
            <div>
                <Comments clist = {clist} Function = {this.getNameComment} updateTime = {updateClistTime}/>
                <div className={'container2'}>
                    <p className={'value'}>{clist.length}</p>
                    <p >Comments</p>

                </div>
                <ul>
                    {clist.map((eachItem)=>{
                      return  <Item list = {eachItem} key = {eachItem.id}  getId = {this.DeleteComment} status={this.SetLikedorNot}/>
                    })}
                </ul>

            </div>
        )
    }
}
export default App;