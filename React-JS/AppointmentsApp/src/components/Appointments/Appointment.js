import {Component} from 'react';
import './Appointment.css';

class Appointment extends Component{
    state = {title:"", date:""};

    getTitle = (event) =>{
        // console.log(event.target.value)
        this.setState({title:event.target.value});
    }
    getDate = (event) =>{
        // console.log(event.target.value)
        this.setState({date:event.target.value});
    }

    render(){
        const {title, date} = this.state;
        const {getDetails} = this.props;
      const  submitForm = (event) =>{
            event.preventDefault();
            getDetails(title, date);


        }

        return(
            <div className={'appointment_container'}>

            <form onSubmit={submitForm} className={'formContainer'}>
                <label  className={'l1'}>TITLE </label>
                <br/>
                <input onChange={this.getTitle} className={'textbox'} type={'text'} placeholder={'Title'}/>
                <br/>
                <label className={'l1'}>DATE</label>
                <br/>

                <input className={'textbox'} onChange={this.getDate} type={'date'}/>
                <br/>
                <button className={'button1'}  type={'submit'}>Add</button>

            </form>
                <div className={'image_container'}>
                    <img className={'image'} src={'https://img.freepik.com/premium-vector/online-doctor-appointment-vector-man-calendar-planning-board-agenda_53562-11143.jpg?w=1380'}/>
                </div>

            </div>
        )
    }
}
export default Appointment;