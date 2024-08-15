import { Component } from "react";
import "./Item.css";

class Item extends Component {
  render() {
    const { list, IdtoDelete } = this.props;
    const { id, tempTitle, tempAmount, category } = list;
    const getIdToDelete = () =>{
      IdtoDelete(id);
    }
    return (
      <li className={"list3"}>
        <div className={"item_box"}>
          <div className={"item"}>
            <p className={" title"}>{tempTitle}</p>

            <p className={" amount"}>{tempAmount}</p>
            <p className={" category"}>{category}</p>
          </div>
          <div className={"del"}>
            <button onClick={getIdToDelete} className={"b1"}>
              <img
                className={"button_image"}
                src={
                  "https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
                }
                alt={"delte"}
              />
            </button>
          </div>
        </div>
      </li>
    );
  }
}
export default Item;
