import './index.css'

const HistoryItem = props => {
  const {completeList, onClickDelete} = props
  const {timeAccessed, logoUrl, title, domainUrl} = completeList

  return (
    <li className="list-container">
      <p className="time">{timeAccessed}</p>
      <div className="list-details">
        <img src={logoUrl} alt="domain logo" className="image" />
        <p className="title">{title}</p>
        <p className="detailed">{domainUrl}</p>
      </div>
      <button type="button" className="icon" onClick={() => onClickDelete()}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
          className="delete-icon"
        />
      </button>
    </li>
  )
}

export default HistoryItem

