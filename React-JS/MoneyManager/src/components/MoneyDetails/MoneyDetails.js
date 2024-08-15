import { Component } from "react";
import "./MoneyDetails.css";

class MoneyDetails extends Component {
  render() {
    const { text_name, amount, imageURL, bgColor } = this.props;
    return (
      <div className={"list2"}>
        <div
          className={"container12"}
          style={{
            backgroundColor: bgColor,
            border: `1px solid ${bgColor}`,
          }}
        >
          <div className={"imageContainer"}>
            <img className={"image"} src={imageURL} alt={"balance"} />
          </div>
          <div className={"amount_container"}>
            <p>{text_name}</p>
            <h2>RS {amount}</h2>
          </div>
        </div>
      </div>
    );
  }
}
export default MoneyDetails;
