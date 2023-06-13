import {Component} from 'react'

import Loader from 'react-loader-spinner'

import Items from '../MatchCard'

import './index.css'

class Home extends Component {
  state = {
    status: true,
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
    this.setState({List1: formatedList, status: false})
  }

  render() {
    const {status, List1} = this.state
    return (
      <div>
        <div className="backs">
          {status ? (
            <div testid="loader">
              <Loader type="Oval" color="#ffffff" height={50} width={50} />
            </div>
          ) : (
            <>
              <div className="con1">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
                  alt="ipl logo"
                  className="size"
                />
                <h1 className="head">IPL Dashboard</h1>
              </div>
              <ul className="UnList">
                {List1.map(each => (
                  <Items key={each.id} Item={each} />
                ))}
              </ul>
            </>
          )}
        </div>
      </div>
    )
  }
}

export default Home
