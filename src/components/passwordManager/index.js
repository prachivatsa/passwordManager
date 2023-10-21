import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import './index.css'
import PasswordItem from '../psswordItem'

class PasswordManager extends Component {
  state = {
    passwordList: [],
    inputUrl: '',
    inputName: '',
    inputPassword: '',
    showPassword: false,
    searchInput: '',
  }

  onChangeUrl = event => {
    this.setState({inputUrl: event.target.value})
  }

  onChangeName = event => {
    this.setState({inputName: event.target.value})
  }

  onChangePassword = event => {
    this.setState({inputPassword: event.target.value})
  }

  addPasswordRecord = event => {
    event.preventDefault()
    console.log('add id')
    const {inputUrl, inputName, inputPassword} = this.state
    const newPasswordList = {
      id: uuidv4(),
      url: inputUrl,
      name: inputName,
      password: inputPassword,
      showPassword: false,
    }
    this.setState(prevState => ({
      passwordList: [...prevState.passwordList, newPasswordList],
      inputUrl: '',
      inputName: '',
      inputPassword: '',
    }))
  }

  showPassword = () => {
    this.setState(prevState => ({
      showPassword: !prevState.showPassword,
    }))
  }

  deletePassword = id => {
    this.setState(prevState => ({
      passwordList: prevState.passwordList.filter(
        eachList => eachList.id !== id,
      ),
    }))
  }

  showResult = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {
      passwordList,
      inputUrl,
      inputName,
      inputPassword,
      showPassword,
      searchInput,
    } = this.state
    const filteredList = passwordList.filter(eachItem =>
      eachItem.url.toLowerCase().includes(searchInput.toLowerCase()),
    )
    const objectLength = Object.keys(filteredList).length

    return (
      <div className="bg-container">
        <div>
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
              alt="app logo"
              className="app-logo"
            />
          </div>
          <div className="first-container">
            <div className="passwordmanager">
              <div className="container">
                <form onSubmit={this.addPasswordRecord}>
                  <h1 className="heading">Add New Password</h1>
                  <div className="input-container">
                    <div>
                      <img
                        src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                        alt="website"
                        className="image"
                      />
                    </div>
                    <input
                      type="text"
                      placeholder="Enter Website"
                      value={inputUrl}
                      onChange={this.onChangeUrl}
                    />
                  </div>
                  <div className="input-container">
                    <div>
                      <img
                        src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                        alt="username"
                        className="image"
                      />
                    </div>
                    <input
                      type="text"
                      placeholder="Enter Username"
                      value={inputName}
                      onChange={this.onChangeName}
                    />
                  </div>
                  <div className="input-container">
                    <div>
                      <img
                        src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                        alt="password"
                        className="image"
                      />
                    </div>
                    <input
                      type="password"
                      placeholder="Enter Password"
                      value={inputPassword}
                      onChange={this.onChangePassword}
                    />
                  </div>
                  <button className="button" type="submit">
                    Add
                  </button>
                </form>
              </div>
              <div>
                <img
                  className="keylockimg"
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
                  alt="password manager"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="second-container">
          <div className="password-search">
            <div>
              <h1 className="your-password">Your Passwords</h1>
              <p>{objectLength}</p>
            </div>
            <div className="input-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png "
                alt="search"
                className="image1"
              />
              <div>
                <input
                  type="search"
                  placeholder="search"
                  onChange={this.showResult}
                />
              </div>
            </div>
          </div>
          <hr />
          <input
            type="checkbox"
            name="checkbox"
            value="show passwords"
            onChange={this.showPassword}
            id="checkbox"
          />
          <label htmlFor="checkbox"> Show passwords</label>
          {filteredList.length !== 0 ? (
            <ul className="item-box">
              {filteredList.map(eachItem => (
                <PasswordItem
                  key={eachItem.id}
                  eachDetail={eachItem}
                  deletePassword={this.deletePassword}
                  showPassword={showPassword}
                />
              ))}
            </ul>
          ) : (
            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
                alt="no passwords"
                className="password-image"
              />
              <p className="no-password">No passwords</p>
            </div>
          )}
        </div>
      </div>
    )
  }
}
export default PasswordManager
