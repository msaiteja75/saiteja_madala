import { Component } from "react";
import "./MoneyManager.css";

class MoneyManager extends Component {
  render() {
    const { username } = this.props;
    return (
      <div className="list">
        <div className={"container"}>
          <h2 className={"greeting"}>Hi, {username}</h2>
          <p className={"para"}>
            Welcome back to your <span className={"sp1"}>Money Manager</span>
          </p>
        </div>
      </div>
    );
  }
}
export default MoneyManager;
