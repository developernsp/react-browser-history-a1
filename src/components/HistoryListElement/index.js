import './index.css'

const HistoryListElement = props => {
  const {history, deleteItem} = props
  const {timeAccessed, logoUrl, title, domainUrl, id} = history
  const onDelete = () => {
    deleteItem(id)
  }
  return (
    <li className="list-item-container">
      <div className="content-container">
        <p className="time">{timeAccessed}</p>
        <img src={logoUrl} alt="domain logo" className="logo" />
        <p className="title">{title}</p>
        <p className="domain">{domainUrl}</p>
      </div>
      <div>
        <button
          type="button"
          onClick={onDelete}
          className="btn"
          data-testid="delete"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            className="delete-icon"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}
export default HistoryListElement
