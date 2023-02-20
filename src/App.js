import {Component} from 'react'
import './App.css'
import HistoryListElement from './components/HistoryListElement'

// These are the list used in the application. You can move them to any component needed.
const initialHistoryList = [
  {
    id: 0,
    timeAccessed: '07:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/instagram-img.png',
    title: 'Instagram',
    domainUrl: 'instagram.com',
  },
  {
    id: 1,
    timeAccessed: '05:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/twitter-img.png',
    title: 'Twitter. It’s what’s happening / Twitter',
    domainUrl: 'twitter.com',
  },
  {
    id: 2,
    timeAccessed: '04:35 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/facebook-img.png',
    title: 'Facebook – log in or sign up',
    domainUrl: 'facebook.com',
  },
  {
    id: 3,
    timeAccessed: '04:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/linkedin-img.png',
    title: 'LinkedIn: Log In or Sign Up',
    domainUrl: 'linkedin.com',
  },
  {
    id: 4,
    timeAccessed: '04:00 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/hashnode-img.png',
    title: 'Hashnode: Everything you need to start blogging as a developer!',
    domainUrl: 'hashnode.com',
  },
  {
    id: 5,
    timeAccessed: '03:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/github-img.png',
    title: 'GitHub: Where the world builds software · GitHub',
    domainUrl: 'github.com',
  },

  {
    id: 6,
    timeAccessed: '02:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/react-img.png',
    title: 'React – A JavaScript library for building user interfaces',
    domainUrl: 'reactjs.org',
  },
  {
    id: 7,
    timeAccessed: '01:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/stackoverflow-img.png',
    title: 'Stack Overflow - Where Developers Learn, Share, & Build Careers',
    domainUrl: 'stackoverflow.com',
  },

  {
    id: 8,
    timeAccessed: '09:25 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/gmail-img.png',
    title: 'Gmail',
    domainUrl: 'mail.google.com',
  },
  {
    id: 9,
    timeAccessed: '09:00 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/google-img.png',
    title: 'Google',
    domainUrl: 'google.com',
  },
]

// Replace your code here
class App extends Component {
  state = {
    inputSearch: '',
    idOfItem: 0,
    historyList: initialHistoryList,
  }

  onType = event => {
    this.setState({inputSearch: event.target.value})
  }

  deleteItem = id => {
    const {historyList} = this.state
    const list = historyList.filter(each => each.id !== id)
    this.setState({historyList: list})
  }

  render() {
    const {inputSearch, idOfItem, historyList} = this.state
    const filteredList = historyList.filter(item =>
      item.title.toLowerCase().includes(inputSearch.toLowerCase()),
    )
    const lehgthOfList = filteredList.length

    return (
      <div className="app-container">
        <div className="header-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            alt="app logo"
            className="history-logo"
          />

          <div className="input-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/search-img.png "
              alt="search"
              className="search-logo"
            />
            <input
              type="search"
              className="input"
              onChange={this.onType}
              placeholder="Search History"
            />
          </div>
        </div>
        <div className="list-container">
          <ul className="list-items-container">
            {lehgthOfList === 0 ? (
              <div className="no-history-container">
                <p className="no-history">There is no history to show</p>
              </div>
            ) : (
              filteredList.map(historyItem => (
                <HistoryListElement
                  history={historyItem}
                  deleteItem={this.deleteItem}
                  key={historyItem.id}
                />
              ))
            )}
          </ul>
        </div>
      </div>
    )
  }
}

export default App
