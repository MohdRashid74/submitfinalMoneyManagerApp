import {Component} from 'react'

import {v4} from 'uuid'

import './index.css'

import MoneyDetails from '../MoneyDetails'

import TransactionItem from '../TransactionItem'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]
class MoneyManager extends Component {
  state = {
    titleInput: '',
    amount: '',
    TransactionList: [],
    optionId: transactionTypeOptions[0].optionId,
  }

  ondelete = id => {
    const {TransactionList} = this.state
    const updateTransactionList = TransactionList.filter(
      eachItem => eachItem.id !== id,
    )
    this.setState({TransactionList: updateTransactionList})
  }

  onSubmit = event => {
    event.preventDefault()
    const {titleInput, amount, optionId, TransactionList} = this.state

    const newList = {
      id: v4(),
      Title: titleInput,
      Amount: parseInt(amount),
      optionID: optionId,
    }
    this.setState(prevState => ({
      TransactionList: [...prevState.TransactionList, newList],
      titleInput: '',
      amount: '',
      optionId: transactionTypeOptions[0].optionId,
    }))
  }

  onChangeValueInput = event => {
    this.setState({titleInput: event.target.value})
  }

  onChangeAmount = event => {
    this.setState({amount: event.target.value})
  }

  onSelectValue = event => {
    this.setState({optionId: event.target.value})
  }

  getBalance = () => {
    const {TransactionList} = this.state
    let balanceAmount = 0
    let incomeAmount = 0
    let expensesAmount = 0
    TransactionList.forEach(eachtransaction => {
      if (eachtransaction.optionID === transactionTypeOptions[0].optionId) {
        incomeAmount += eachtransaction.Amount
      } else {
        expensesAmount += eachtransaction.Amount
      }
    })

    balanceAmount = incomeAmount - expensesAmount
    return balanceAmount
  }

  getIncome = () => {
    const {TransactionList} = this.state
    let IncomeAmount = 0
    TransactionList.forEach(eachTransactionAmount => {
      if (
        eachTransactionAmount.optionID === transactionTypeOptions[0].optionId
      ) {
        IncomeAmount += eachTransactionAmount.Amount
      }
    })
    return IncomeAmount
  }

  getExpenses = () => {
    const {TransactionList} = this.state
    let expensesAmount = 0
    TransactionList.forEach(eachexpensesAmount => {
      if (
        eachexpensesAmount.optionID === transactionTypeOptions[1].displayText
      ) {
        expensesAmount += eachexpensesAmount.Amount
      }
    })
    return expensesAmount
  }

  render() {
    const {titleInput, amount, TransactionList, optionId} = this.state

    const BalanceDetails = this.getBalance()
    const IncomeDetails = this.getIncome()
    const ExpensesAmount = this.getExpenses()

    return (
      <div className="bg-container">
        <div className="banner-container">
          <div>
            <h1 className="heading">Hi,Richard</h1>
            <p className="pargraph">
              Welcome back to your<span className="span">Money Manager</span>
            </p>
          </div>
        </div>
        <MoneyDetails
          balanceDetail={BalanceDetails}
          amountDetail={IncomeDetails}
          expensesDetail={ExpensesAmount}
        />
        <div className="Transaction-History-container">
          <div className="input-container">
            <h1 className="heading">Add Transaction</h1>
            <form className="form" onSubmit={this.onSubmit}>
              <label className="label" htmlFor="label-title">
                TITLE
              </label>
              <br />
              <input
                className="input"
                type="search"
                placeholder="title"
                id="label-input"
                onChange={this.onChangeValueInput}
                value={titleInput}
              />
              <br />
              <label className="label" htmlFor="amount-label">
                AMOUNT
              </label>
              <br />
              <input
                className="input"
                id="amount-label"
                placeholder="amount"
                onChange={this.onChangeAmount}
                value={amount}
              />
              <br />
              <label className="label" htmlFor="Type">
                TYPE
              </label>
              <br />
              <select
                className="input"
                id="Type"
                onChange={this.onSelectValue}
                value={optionId}
              >
                {transactionTypeOptions.map(eachItem => (
                  <option>{eachItem.displayText}</option>
                ))}
              </select>
              <br />
              <button className="button" type="submit">
                Add
              </button>
            </form>
          </div>
          <div className="History-container">
            <h1 className="heading">History</h1>
            <ul className="special-container">
              <li className="list-2">
                <p className="pargraph2">Title</p>
                <p className="pargraph2">Amount</p>
                <p className="pargraph2">Type</p>
              </li>

              {TransactionList.map(each => (
                <TransactionItem
                  TranxactionList={each}
                  key={each.id}
                  deletetransaction={this.ondelete}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
export default MoneyManager
