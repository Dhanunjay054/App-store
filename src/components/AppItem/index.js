// Write your code here
import './index.css'

const AppItem = props => {
  const {eachItem} = props
  const {appName, imageUrl} = eachItem

  return (
    <li className="App-item">
      <img src={imageUrl} className="App-icon" alt="appName" />
      <p className="App-Name">{appName}</p>
    </li>
  )
}

export default AppItem
