import {Component} from 'react';

import './index.css';

class ButtonCom extends Component{
    render(){
        const {tabs, getTabId, currentTab} = this.props;
        const {displayText, tabId} = tabs;
        const tabIdIs = () =>{
            getTabId(tabId);
        }
        return(
            <div>
                <button className={currentTab===tabId ? "style1": "style2"} onClick={tabIdIs}>{displayText}</button>

            </div>
        )
    }
}

export default ButtonCom;