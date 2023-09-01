import {Component} from 'react'

import './index.css'

import Loader from 'react-loader-spinner'
import LanguageFilterItem from '../LanguageFilterItem'
import RepositoryItem from '../RepositoryItem'

const languageFiltersData = [
  {id: 'ALL', language: 'All'},
  {id: 'JAVASCRIPT', language: 'Javascript'},
  {id: 'RUBY', language: 'Ruby'},
  {id: 'JAVA', language: 'Java'},
  {id: 'CSS', language: 'CSS'},
]

// Write your code here

class GithubPopularRepos extends Component {
  state = {
    clickTabId: '',
    apiList: [],
    isLoading: false,
    showSubmitError: false,
  }

  componentDidMount() {
    this.getReposLists()
  }

  getReposLists = async () => {
    this.setState({
      isLoading: true,
    })
    const {clickTabId} = this.state

    const url = `https://apis.ccbp.in/popular-repos?language=${clickTabId}`

    const options = {
      method: 'GET',
    }

    const response = await fetch(url, options)

    if (response.ok === true) {
      const data = await response.json()
      const updatedData = data.popular_repos.map(each => ({
        id: each.id,
        avatarUrl: each.avatar_url,
        forksCount: each.forks_count,
        issuesCount: each.issues_count,
        name: each.name,
        starsCount: each.stars_count,
      }))
      this.setState({apiList: updatedData, isLoading: false})
    } else {
      this.submitError()
    }
  }

  submitError = () => {
    this.setState({showSubmitError: true})
  }

  getTabClickId = id => {
    this.setState({clickTabId: id}, this.getReposLists)
  }

  renderErrorView = () => {
    ;<div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/api-failure-view.png"
        alt="failure view"
        className="failure-img"
      />
    </div>
  }

  render() {
    const {clickTabId, apiList, isLoading, showSubmitError} = this.state
    return (
      <div className="app-container">
        <div className="card-container">
          <h1 className="heading">Popular</h1>
          <ul className="tab-item-container">
            {languageFiltersData.map(each => (
              <LanguageFilterItem
                key={each.id}
                tabDetails={each}
                getTabClickId={this.getTabClickId}
                isActive={each.id === clickTabId}
              />
            ))}
          </ul>

          {isLoading ? (
            <div data-testid="loader">
              <Loader type="ThreeDots" color="#0284c7" height={80} width={80} />
            </div>
          ) : (
            <ul className="repository-container">
              {apiList.map(each => (
                <RepositoryItem key={each.id} repositoryDetails={each} />
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  }
}

export default GithubPopularRepos
