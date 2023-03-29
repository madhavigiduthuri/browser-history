/* eslint-disable react/destructuring-assignment */
import {Component} from 'react'
import HistoryItem from '../HistoryItem'
import './index.css'

class BrowserHistory extends Component {
  state = {
    searchInput: '',
    filteredList: this.props.initialHistoryList,
  }

  onSearchInput = event => {
    // console.log(event.target.value)
    // const {searchInput, filteredList} = this.state
    const {initialHistoryList} = this.props
    const inputValue = event.target.value
    const updatedFilterList = initialHistoryList.filter(each =>
      each.title.toLowerCase().includes(inputValue.toLowerCase()),
    )
    this.setState({
      searchInput: inputValue,
      filteredList: updatedFilterList,
    })
  }

  handleDelete = id => {
    // console.log(id)
    const {filteredList} = this.state
    const updatedFilterList = filteredList.filter(each => each.id !== id)
    // console.log(updatedFilterList)
    this.setState({
      filteredList: updatedFilterList,
    })
  }

  render() {
    // const {initialHistoryList} = this.props
    const {searchInput, filteredList} = this.state

    return (
      <div className="browserhistory-list-container">
        {/* <p>{searchInput ? "kiran" : "sai"} krishna</p> */}
        <div className="browserhistory-list-top-view">
          <img
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            alt="app logo"
            className="history-img"
          />
          <div className="search-input-container">
            <div className="search-input-box">
              <img
                src="https://assets.ccbp.in/frontend/react-js/search-img.png"
                alt="search icon"
                className="search-icon"
              />
            </div>
            <input
              type="search"
              className="search-input"
              placeholder=" Search history"
              value={searchInput}
              onChange={event => this.onSearchInput(event)}
            />
          </div>
        </div>
        <div className="browserhistory-list-apps">
          {filteredList.length > 0 ? (
            <ul className="listed-items">
              {filteredList.map(each => (
                <HistoryItem
                  completeList={each}
                  key={each.id}
                  onClickDelete={() => this.handleDelete(each.id)}
                />
              ))}
            </ul>
          ) : (
            <div className="emptyList">
              <p>There is no history to show</p>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default BrowserHistory
