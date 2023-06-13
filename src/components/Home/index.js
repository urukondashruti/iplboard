import {Component} from 'react'

import Items from '../MatchCard'

import './index.css'

class Home extends Component {
  state = {
    List1: [],
  }

  componentDidMount() {
    this.getIplList()
  }

  getIplList = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const list = await response.json()
    const {teams} = list
    const formatedList = teams.map(each => ({
      id: each.id,
      name: each.name,
      teamImage: each.team_image_url,
    }))
    this.setState({List1: formatedList})
  }

  render() {
    const {List1} = this.state
    return (
      <div className="backs">
        <div className="con1">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
            className="size"
          />
          <h1 className="head">IPLDashboard</h1>
        </div>
        <ul className="UnList">
          {List1.map(each => (
            <Items key={each.id} Item={each} />
          ))}
        </ul>
      </div>
    )
  }
}

export default Home
