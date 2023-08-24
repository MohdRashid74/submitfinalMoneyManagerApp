import './index.css'

const MoneyDetails = props => {
  const {balanceDetail, amountDetail, expensesDetail} = props

  return (
    <div className="mini-container">
      <div className="first-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
          className="balance-image "
        />
        <div className="balance-container-first">
          <h1 className="balance-heading">Your Balance</h1>
          <p className="balance-pargraph">Rs {balanceDetail}</p>
        </div>
      </div>

      <div className="second-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
          className="balance-image "
        />
        <div className="balance-container-first">
          <h1 className="balance-heading">Your Income</h1>
          <p className="balance-pargraph">Rs {amountDetail}</p>
        </div>
      </div>
      <div className="third-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt=" expenses"
          className="balance-image"
        />
        <div className="balance-container-first">
          <h1 className="balance-heading">Your Expenses</h1>
          <p className="balance-pargraph">Rs {expensesDetail}</p>
        </div>
      </div>
    </div>
  )
}
export default MoneyDetails
