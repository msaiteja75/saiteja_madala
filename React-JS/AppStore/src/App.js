import {Component} from "react";
import './App.css';
import AppStore from "./components/AppStore";

class App extends Component{
    render(){
        return(
            <div className={'container'}>
                <AppStore/>
            </div>
        )
    }
}
export default App;