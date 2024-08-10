import {Component} from "react";
import './App.css';
import ReviewItem from "./components/ReviewItem";

const reviewsList = [
    {
        imgUrl: 'https://assets.ccbp.in/frontend/react-js/wade-warren-img.png',
        username: 'Wade Warren',
        companyName: 'Rang',
        description:
            'The most important thing I learnt is that nothing is a failure, but what we learn from that is a rich and rewarding experience.',
    },
    {
        imgUrl: 'https://assets.ccbp.in/frontend/react-js/adrian-williams-img.png',
        username: 'Adrian Williams',
        companyName: 'WheelO',
        description:
            'Coming to Startup School is the best thing that has happened to me. I wish every startup in the country should get this opportunity.',
    },
    {
        imgUrl: 'https://assets.ccbp.in/frontend/react-js/sherry-jhonson-img.png',
        username: 'Sherry Johnson',
        companyName: 'MedX',
        description:
            'I am glad to have such experienced mentors guiding us in every step through out the 4 weeks. I have improved personally and developed many interpersonal skills.',
    },
    {
        imgUrl: 'https://assets.ccbp.in/frontend/react-js/ronald-jones-img.png',
        username: 'Ronald Jones',
        companyName: 'Infinos Tech',
        description:
            'I am really loving the way how mentors are taking care of us, the way they are explaining big theories with lots of case studies and innovative methods.',
    },
]
class App extends Component{
    state = {currentProfile:0};
    leftTrigger = () =>{
        console.log('left triggered');
        this.setState((prevState)=>{
            return {currentProfile:Math.max(prevState.currentProfile-1,0)};
        })

    }
    rightTrigger = () =>{
        console.log('right Triggered');
        this.setState((prevState)=>{
            return {currentProfile: Math.min(prevState.currentProfile+1, reviewsList.length-1)};
        })
    }


    render(){
        const {currentProfile} = this.state;
        const filteredList= reviewsList[currentProfile];
        // console.log(filteredList);
        return(
            <div className={'container1'}>
                <h2 className={'head'}>Reviews</h2>

                    <ReviewItem list = {filteredList} leftFunction ={this.leftTrigger} rightFunction={this.rightTrigger}/>


            </div>
        )
    }
}
export default App;