import {Component} from 'react'

import Loader from 'react-loader-spinner'

import LatestMatch from '../LatestMatch'

import Team from '../TeamMatches'

import './index.css'

class MatchDetails extends Component {
  state = {
    status: true,
    Object1: {},
  }

  componentDidMount() {
    this.getDetails()
  }

  getObject = data => ({
    competingTeam: data.competing_team,
    competingLogo: data.competing_team_logo,
    date: data.date,
    firstInnings: data.first_innings,
    id: data.id,
    manOfMatch: data.man_of_the_match,
    matchStatus: data.match_status,
    result: data.result,
    secondInnings: data.second_innings,
    umpires: data.umpires,
    venue: data.venue,
  })

  getDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()

    const formated = {
      teamBannerUrl: data.team_banner_url,
      latestMatch: this.getObject(data.latest_match_details),
      recentMatches: data.recent_matches.map(each => this.getObject(each)),
    }
    this.setState({Object1: formated, status: false})
  }

  getRouteClassName = () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    switch (id) {
      case 'RCB':
        return 'red'
      case 'KKR':
        return 'red1'
      case 'KXP':
        return 'orange'
      case 'CSK':
        return 'yellow'
      case 'RR':
        return 'blue'
      case 'MI':
        return 'violet'
      case 'SH':
        return 'violet1'
      case 'DC':
        return 'blue2'
      default:
        return ''
    }
  }

  render() {
    const {Object1, status} = this.state
    const {teamBannerUrl, latestMatch, recentMatches, backgroundColor} = Object1
    return (
      <div className={`div11 div13 ${this.getRouteClassName()}`}>
        {status ? (
          <div testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <div>
            <img src={teamBannerUrl} className="img" alt="team banner" />
            <LatestMatch latestMatchs={latestMatch} />
            <ul className="div12">
              {recentMatches.map(each => (
                <Team key={each.id} Item={each} />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}

export default MatchDetails
