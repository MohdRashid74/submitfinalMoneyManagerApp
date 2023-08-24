import './index.css'

const TransactionItem = props => {
  const {TranxactionList, deletetransaction} = props
  const {Title, Amount, id, optionID} = TranxactionList

  const onclickdeletebutton = () => {
    deletetransaction(id)
  }

  return (
    <li className="list-4">
      <p>{Title}</p>
      <p>{Amount}</p>
      <p>{optionID}</p>
      <button className="button1" onClick={onclickdeletebutton}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          className="delete-image"
          alt="delete"
        />
      </button>
    </li>
  )
}
export default TransactionItem
