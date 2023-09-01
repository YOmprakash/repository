// Write your code here

import './index.css'

const RepositoryItem = props => {
  const {repositoryDetails} = props
  const {
    id,
    avatarUrl,
    forksCount,
    issuesCount,
    name,
    starsCount,
  } = repositoryDetails

  return (
    <li className="list-item">
      <img src={avatarUrl} className="avatar" alt={name} />

      <p className="name">{name}</p>
      <div className="text-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/stars-count-img.png"
          alt="star"
          className="icon"
        />

        <p className="text">{starsCount} stars</p>
      </div>

      <div className="text-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/forks-count-img.png"
          alt="forks"
          className="icon"
        />
        <p className="text">{forksCount} forks</p>
      </div>
      <div className="text-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/issues-count-img.png"
          alt="open issues"
          className="icon"
        />
        <p className="text">{issuesCount} issues</p>
      </div>
    </li>
  )
}

export default RepositoryItem
