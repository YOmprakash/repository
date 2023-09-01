// Write your code here
import './index.css'

const LanguageFilterItem = props => {
  const {tabDetails, getTabClickId, isActive} = props
  const {id, language} = tabDetails

  const onClickTab = () => {
    getTabClickId(id)
  }

  const className = isActive ? 'active-tab-button tab-button' : 'tab-button'

  return (
    <li className="tab-item">
      <button type="button" className={className} onClick={onClickTab}>
        {language}
      </button>
    </li>
  )
}

export default LanguageFilterItem
