import {Component} from "react";
import './index.css';

class ButtonsCom extends Component{

    render(){
        const {tabs, onChangeTab} = this.props;
        const {tabId, displayText} = tabs;
        const {statetab} = this.props;


        const getTabId = () =>{
            onChangeTab(tabId);
            if(statetab===tabId){
                console.log(true);
            }else{
                console.log(false);
            }



        }
        return(
            <div className={'buttonscontainer'}>


                <button className={statetab === tabId ? "style1" : "style2"} onClick={getTabId}>{displayText}</button>



                {/*<button className={'b1'} onClick={getTabId}>{displayText}</button>*/}

            </div>
        )
    }
}

export default ButtonsCom;