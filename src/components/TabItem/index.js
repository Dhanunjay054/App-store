import './index.css'

const TabItem = props => {
  const {eachTabItem, clickTabItem, isActive} = props
  const {tabId, displayText} = eachTabItem

  const selectCategory = () => {
    clickTabItem(tabId)
  }

  const activeTabBtnClassName = isActive ? 'active-tab-btn' : ''

  return (
    <ul>
      <button
        type="button"
        onClick={selectCategory}
        className={`tab-btn ${activeTabBtnClassName}`}
      >
        {displayText}
      </button>
    </ul>
  )
}

export default TabItem
