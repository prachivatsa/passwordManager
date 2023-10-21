import './index.css'

const PasswordItem = props => {
  const {eachDetail, deletePassword, showPassword} = props
  const {id, name, url, password} = eachDetail

  const deleteButton = () => {
    deletePassword(id)
  }
  const togglePassword = () => {
    console.log(`check status ${showPassword}`)
    if (showPassword) {
      return <p>{password}</p>
    }
    return (
      <p>
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
          alt="stars"
          className="star-image"
        />
      </p>
    )
  }

  return (
    <li className="list">
      <p>{url}</p>
      <p>{name}</p>
      {togglePassword()}
      <button
        className="delete-button"
        onClick={deleteButton}
        data-testid="delete"
        type="button"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
          alt="delete"
          className="img-logo"
        />
      </button>
    </li>
  )
}
export default PasswordItem
