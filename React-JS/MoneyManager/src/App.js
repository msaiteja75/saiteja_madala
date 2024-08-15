import { Component } from "react";
import "./App.css";
import MoneyManager from "./components/MoneyManager/MoneyManager";
import MoneyDetails from "./components/MoneyDetails/MoneyDetails";
import Item from "./components/TransactionItem/Item";
import { v4 as uuidv4 } from "uuid";

const transactionTypeOptions = [
  {
    optionId: "INCOME",
    displayText: "Income",
  },
  {
    optionId: "EXPENSES",
    displayText: "Expenses",
  },
];
const History = [];
const tempStorage = { tempTitle: "", tempAmount: 0, tempCatType: "", tempExpenses:0};
class App extends Component {
  state = { title: "", totalamount:0, total_expenses:0, catType: "", list: History };

  //get Title
  getTitle = (event) => {
    // console.log(event.target.value);
    tempStorage.tempTitle = event.target.value;
  };

  // get Amount
  getAmount = (event) => {
    // console.log(event.target.value);
    tempStorage.tempAmount = event.target.value;
  };
  //getType
  getType = (event) => {
    // console.log(typeof event.target.value);
    tempStorage.tempCatType = event.target.value;
  };

  Add = (event) => {
    event.preventDefault();
    const { tempTitle, tempAmount, tempCatType,tempExpenses } = tempStorage;
    // console.log(tempTitle);
    // console.log(tempAmount);

    // console.log(category);

    // console.log(displayText);
    const category = tempCatType === "" ? "INCOME" : tempCatType;


    const historyItem = {
      id: uuidv4(),
      tempTitle,
      tempAmount: parseFloat(tempAmount)||0,
      category,

    };

this.setState((prevState)=>{
  let exp = prevState.total_expenses;
  let newTotalAmount = prevState.totalamount;
  if(historyItem.category==='EXPENSES'){
    exp += historyItem.tempAmount;
    newTotalAmount -= historyItem.tempAmount;
  }
  else{

    exp = 0
    newTotalAmount = historyItem.tempAmount;
  }
  return {
    title: tempTitle,
    totalamount: newTotalAmount,
    catType: category,
    total_expenses: exp,
    list: [...prevState.list, historyItem]
  }
})





  };
  // Delete History Item
    IdToDelete  =(id) =>{
    // console.log(id)
      const {list} = this.state;
    const filterdList=  list.filter ((each)=>{
      return each.id!=id;
    })
      this.setState({list:filterdList})

      if(filterdList.length===0){

        this.setState({totalamount:0, total_expenses:0})
      }


  }


  render() {
    const { title, totalamount,expenses, catType, list, total_expenses } = this.state;
    // console.log(totalamount);
    console.log(total_expenses);



    return (
      <div>
        {/*  Balance*/}
        <MoneyManager username="Saiteja Madala" />
        <ul className={"unorderdlist"}>
          <MoneyDetails
            text_name="Your Balance"
            amount={totalamount}
            imageURL={
              "https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
            }
            bgColor="lightgreen"
          />
          {/*  Income*/}

          <MoneyDetails
            text_name="Your Income"
            amount={totalamount}
            imageURL={
              "https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
            }
            bgColor="#cffafe"
          />
          {/*Expenses*/}
          <MoneyDetails
            text_name="Your Expenses"
            amount={total_expenses}
            imageURL={
              "https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
            }
            bgColor="#ede9fe"
          />
        </ul>
        <div className={"container13"}>
          <div className={"formContainer"}>
            <form className={"form"} onSubmit={this.Add}>
              <h2>Add Transaction</h2>
              <label className={"l1"}>TITLE</label>
              <br />

              <input
                name={"title"}
                className={"input_box"}
                type="text"
                placeholder={"TITLE"}
                onChange={this.getTitle}
              />
              <br />
              <label className={"l1"}>AMOUNT</label>
              <br />
              <input
                name={"amount"}
                className={"input_box"}
                type={"text"}
                onChange={this.getAmount}
                placeholder={"AMOUNT"}
              />
              <br />
              <label className={"l1"}>TYPE</label>
              <br />
              <select
                onChange={this.getType}
                name={"catType"}
                className={"selector"}
              >
                {transactionTypeOptions.map((eachOption, index) => {
                  return (
                    <option key={index} value={eachOption.optionId}>
                      {eachOption.displayText}
                    </option>
                  );
                })}
              </select>
              <br />
              <button className={"add"} type={"submit"} onClick={this.Add}>
                Add
              </button>
            </form>
          </div>

          <div className={"historyContainer"}>
            <div className={"historyBox"}>
              <h2>History</h2>
              <div className={"head_box"}>
                <h4 className={"h"}>Title</h4>
                <h4 className={"h"}>Amount</h4>
                <h4 className={"h"}>Type</h4>
                <h4></h4>
              </div>
              <ul className={"unorderdlist2"}>
                {list.map((eachItem) => {
                  return <Item list={eachItem} key={eachItem.id} IdtoDelete={this.IdToDelete} />;
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
