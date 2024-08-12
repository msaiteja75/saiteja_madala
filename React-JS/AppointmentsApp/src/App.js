import {Component}  from 'react';
import './App.css';
import Appointment from './components/Appointments/Appointment';
import Item from './components/AppointmentItem/Item'
import {format} from 'date-fns'

import {v4 as uuidv4} from 'uuid';

const appointmentList = [];

class App extends Component{
    state = {list:appointmentList, starredStatus:false};
    getDetails = (title, date) =>{
        // console.log(title);
        // console.log(date);
        const formattedDate = format(new Date(date),'dd MMMM yyyy, EEEE');
        // console.log(formattedDate);
        const newappointment = {
            id: uuidv4(),
            title,
            appointment_date:formattedDate,
            isFavourite:false


        }
        this.setState((prevState)=>{
            return {list:[...prevState.list, newappointment]}
        })
    }

    // to update is Favourite
    getIdForStar = (id) =>{


        this.setState((prevState)=> {
            const updatedlist = prevState.list.map((eachItem) => {
                if (eachItem.id === id) {
                    return {...eachItem, isFavourite: !eachItem.isFavourite};
                }
                return eachItem;
            })
// console.log(updatedlist);

            return {list: updatedlist};
        })


    }

    // Changing Button Starred State

    setStarredStatus = () => {
        const {starredStatus} = this.state;
        this.setState((prevState)=>{
            return {starredStatus:!prevState.starredStatus};
        })

    }

    render(){
        const {list, starredStatus} = this.state;

        const filterList = starredStatus ? list.filter(eachItem=>eachItem.isFavourite===starredStatus):list


        return(
            <div className={'background_container'}>
                <h1 className={'h1'}>Add Appointment</h1>
               <Appointment getDetails = {this.getDetails}/>

                <hr className={'line'}/>

                <div className={'container3'}>
                    <h2 className={'h2'}>Appointments</h2>
                    <div className={'d1'}>
                        <button onClick={this.setStarredStatus} className={'b2'}>Starred</button>
                    </div>

                </div>
                <div className={'items'}>
                    {filterList.map((eachItem)=>{
                        return <Item list ={eachItem} key = {eachItem.id} getStarId = {this.getIdForStar}/>
                    })}
                </div>

            </div>
        )
    }
}

export default App;
